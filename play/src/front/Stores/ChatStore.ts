import { writable } from "svelte/store";

export const chatZoneLiveStore = writable(false);
export const chatVisibilityStore = writable(false);
export const chatInputFocusStore = writable(false);
export const shouldDisableChatInProximityRoomStore = writable(false);
export const intentionallyClosedChatDuringMeetingStore = writable(false);

// Call "forceRefresh" to force the refresh of the chat iframe.
function createForceRefreshChatStore() {
    const { subscribe, update } = writable({});
    return {
        subscribe,
        forceRefresh() {
            update((list) => {
                return {};
            });
        },
    };
}
export const forceRefreshChatStore = createForceRefreshChatStore();

export const isMatrixChatEnabledStore = writable(false);

// Default chat panel width — aim for roughly 1/3 of a typical 1440-1920px screen.
// Min 360, max 520 — big enough to read messages, small enough not to cover half the map.
export const INITIAL_SIDEBAR_WIDTH = (() => {
    if (typeof window === "undefined") return 420;
    return Math.max(360, Math.min(520, Math.round(window.innerWidth / 3)));
})();
export const INITIAL_SIDEBAR_WIDTH_MOBILE = 280;
export const loginTokenErrorStore = writable(false);
