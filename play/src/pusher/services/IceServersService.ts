import { IceServer } from "@workadventure/messages";
import {
    STUN_SERVER,
    TURN_SERVER,
    TURN_USER,
    TURN_PASSWORD,
    CLOUDFLARE_TURN_KEY_ID,
    CLOUDFLARE_TURN_API_TOKEN,
} from "../enums/EnvironmentVariable";
import { webRTCCredentialsService } from "./WebRTCCredentialsService";

/**
 * Service to generate complete ICE server configuration including STUN and TURN servers.
 *
 * Supports three modes:
 *   1. Cloudflare Calls TURN (recommended, auto-rotating ephemeral credentials)
 *      — set CLOUDFLARE_TURN_KEY_ID + CLOUDFLARE_TURN_API_TOKEN
 *   2. Static credentials (TURN_USER + TURN_PASSWORD)
 *   3. HMAC time-limited credentials (TURN_STATIC_AUTH_SECRET)
 */

interface CloudflareIceServer {
    urls: string[] | string;
    username?: string;
    credential?: string;
}
interface CloudflareIceServersResponse {
    iceServers: CloudflareIceServer[];
}

// Cache Cloudflare credentials for 20 minutes to avoid hammering their API.
// Credentials have a 24h TTL server-side, so a 20-minute cache is comfortably safe.
const CLOUDFLARE_CACHE_TTL_MS = 20 * 60 * 1000;
const CLOUDFLARE_CREDENTIAL_TTL_SECONDS = 86_400; // 24h — server-side validity

let cachedCloudflareServers: IceServer[] | null = null;
let cachedAt = 0;
let inFlight: Promise<IceServer[]> | null = null;

async function fetchCloudflareIceServers(): Promise<IceServer[]> {
    const url = `https://rtc.live.cloudflare.com/v1/turn/keys/${CLOUDFLARE_TURN_KEY_ID}/credentials/generate-ice-servers`;
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${CLOUDFLARE_TURN_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ttl: CLOUDFLARE_CREDENTIAL_TTL_SECONDS }),
    });
    if (!resp.ok) {
        const body = await resp.text().catch(() => "");
        throw new Error(`Cloudflare TURN API ${resp.status}: ${body.slice(0, 200)}`);
    }
    const data = (await resp.json()) as CloudflareIceServersResponse;
    return data.iceServers.map((srv) =>
        IceServer.fromPartial({
            urls: Array.isArray(srv.urls) ? srv.urls : [srv.urls],
            username: srv.username,
            credential: srv.credential,
            credentialType: srv.credential ? "password" : undefined,
        })
    );
}

async function getCloudflareIceServers(): Promise<IceServer[]> {
    const now = Date.now();
    if (cachedCloudflareServers && now - cachedAt < CLOUDFLARE_CACHE_TTL_MS) {
        return cachedCloudflareServers;
    }
    if (inFlight) return inFlight;

    inFlight = fetchCloudflareIceServers()
        .then((servers) => {
            cachedCloudflareServers = servers;
            cachedAt = Date.now();
            return servers;
        })
        .finally(() => {
            inFlight = null;
        });
    return inFlight;
}

export class IceServersService {
    /**
     * Generate complete ICE configuration for a user.
     * @param userId - User ID to generate TURN credentials for
     * @returns IceServersAnswer containing all ICE servers (STUN + TURN)
     */
    public async generateIceServers(userId: string): Promise<IceServer[]> {
        // Cloudflare TURN mode — takes precedence when configured
        if (CLOUDFLARE_TURN_KEY_ID && CLOUDFLARE_TURN_API_TOKEN) {
            try {
                return await getCloudflareIceServers();
            } catch (err) {
                console.error("Cloudflare TURN fetch failed, falling back to static config:", err);
                // fall through to static config
            }
        }

        const iceServers: IceServer[] = [];

        // Static STUN
        if (STUN_SERVER) {
            iceServers.push(
                IceServer.fromPartial({
                    urls: STUN_SERVER.split(",").map((u: string) => u.trim()),
                })
            );
        }

        // Static or HMAC-signed TURN
        if (TURN_SERVER) {
            const credentials = webRTCCredentialsService.generateCredentials(userId);
            iceServers.push(
                IceServer.fromPartial({
                    urls: TURN_SERVER.split(",").map((u: string) => u.trim()),
                    username: credentials.webRtcUserName || TURN_USER,
                    credential: credentials.webRtcPassword || TURN_PASSWORD,
                    credentialType: "password",
                })
            );
        }

        return iceServers;
    }
}

export const iceServersService = new IceServersService();
