/* eslint-disable listeners/no-inline-function-event-listener, listeners/no-missing-remove-event-listener */
import type { RedisClientOptions } from "redis";
import { createClient } from "redis";
import * as Sentry from "@sentry/node";

import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from "../enums/EnvironmentVariable";

const config: RedisClientOptions = {
    socket: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        // Exponential backoff reconnect: 500ms, 1s, 1.5s … up to 30s
        reconnectStrategy: (retries: number) => {
            if (retries > 40) {
                console.error("Redis: too many reconnect attempts, giving up");
                return new Error("Redis: too many reconnect attempts");
            }
            const delay = Math.min(retries * 500, 30_000);
            console.info(`Redis: reconnecting in ${delay}ms (attempt ${retries})`);
            return delay;
        },
    },
};

if (REDIS_PASSWORD) {
    config.password = REDIS_PASSWORD;
}

const redisClient = REDIS_HOST !== undefined ? createClient(config) : null;
let pingInterval: NodeJS.Timeout | null = null;
let connectPromise: Promise<void> | null = null;

if (redisClient) {
    redisClient.on("error", (err: unknown) => {
        console.error("Error connecting to Redis:", err);
        Sentry.captureException(err);
        if (pingInterval) {
            clearInterval(pingInterval);
            pingInterval = null;
        }
    });
    redisClient.on("connect",      () => console.info("Redis client is connected"));
    redisClient.on("reconnecting", () => console.info("Redis client is reconnecting"));
    redisClient.on("ready", () => {
        console.info("Redis client is ready");
        // Re-arm ping interval after reconnect
        if (pingInterval === null) {
            pingInterval = setInterval(() => {
                redisClient.ping().catch((err) => {
                    console.error("Redis Ping Interval Error", err);
                    Sentry.captureException(err);
                });
            }, 60_000); // ping every 60s (was 4 minutes) for faster failure detection
        }
    });
}

export type RedisClient = NonNullable<typeof redisClient>;

export async function getRedisClient(): Promise<RedisClient | null> {
    if (redisClient === null) {
        return null;
    }

    if (!redisClient.isOpen && connectPromise === null) {
        connectPromise = redisClient
            .connect()
            .finally(() => {
                connectPromise = null;
            });
    }

    if (!redisClient.isOpen && connectPromise !== null) {
        await connectPromise;
    }

    return redisClient;
}
