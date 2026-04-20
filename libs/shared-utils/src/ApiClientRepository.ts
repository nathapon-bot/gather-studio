/**
 * A class to get connections to the correct "api" server given a room name.
 */
import crypto from "crypto";
import * as grpc from "@grpc/grpc-js";

import Debug from "debug";
import { RoomManagerClient, SpaceManagerClient } from "@workadventure/messages/src/ts-proto-generated/services";

const debug = Debug("apiClientRespository");

// gRPC keepalive options — prevents Railway's load balancer from dropping
// long-lived bidirectional streams after idle timeout
const GRPC_KEEPALIVE_OPTIONS = {
    "grpc.keepalive_time_ms": 10_000,           // send ping every 10s
    "grpc.keepalive_timeout_ms": 5_000,          // wait 5s for pong
    "grpc.keepalive_permit_without_calls": 1,    // ping even when no RPC in flight
    "grpc.http2.max_pings_without_data": 0,      // unlimited pings
    "grpc.http2.min_time_between_pings_ms": 10_000,
    "grpc.http2.min_ping_interval_without_data_ms": 5_000,
};

export class ApiClientRepository {
    private roomManagerClients: RoomManagerClient[] = [];
    private spaceManagerClients: SpaceManagerClient[] = [];

    public constructor(private apiUrls: string[]) {}

    public async getClient(roomId: string, GRPC_MAX_MESSAGE_SIZE: number): Promise<RoomManagerClient> {
        const index = this.getIndex(roomId);

        let client = this.roomManagerClients[index];
        if (client === undefined) {
            this.roomManagerClients[index] = client = new RoomManagerClient(
                this.apiUrls[index],
                grpc.credentials.createInsecure(),
                {
                    "grpc.max_receive_message_length": GRPC_MAX_MESSAGE_SIZE,
                    "grpc.max_send_message_length": GRPC_MAX_MESSAGE_SIZE,
                    ...GRPC_KEEPALIVE_OPTIONS,
                }
            );
        }
        debug("Mapping room %s to API server %s", roomId, this.apiUrls[index]);

        return Promise.resolve(client);
    }

    public getAllClients(GRPC_MAX_MESSAGE_SIZE: number): Promise<RoomManagerClient[]> {
        for (let i = 0; i < this.apiUrls.length; i++) {
            if (this.roomManagerClients[i] === undefined) {
                this.roomManagerClients[i] = new RoomManagerClient(this.apiUrls[i], grpc.credentials.createInsecure(), {
                    "grpc.max_receive_message_length": GRPC_MAX_MESSAGE_SIZE,
                    "grpc.max_send_message_length": GRPC_MAX_MESSAGE_SIZE,
                    ...GRPC_KEEPALIVE_OPTIONS,
                });
            }
        }
        return Promise.resolve(this.roomManagerClients);
    }

    async getSpaceClient(spaceName: string, GRPC_MAX_MESSAGE_SIZE: number): Promise<SpaceManagerClient> {
        const index = this.getIndex(spaceName);

        let client = this.spaceManagerClients[index];
        if (client === undefined) {
            this.spaceManagerClients[index] = client = new SpaceManagerClient(
                this.apiUrls[index],
                grpc.credentials.createInsecure(),
                {
                    "grpc.max_receive_message_length": GRPC_MAX_MESSAGE_SIZE,
                    "grpc.max_send_message_length": GRPC_MAX_MESSAGE_SIZE,
                    ...GRPC_KEEPALIVE_OPTIONS,
                }
            );
        }
        debug("Mapping room %s to API server %s", spaceName, this.apiUrls[index]);

        return Promise.resolve(client);
    }

    public getIndex(name: string) {
        const array = new Uint32Array(crypto.createHash("md5").update(name).digest());
        return array[0] % this.apiUrls.length;
    }
}
