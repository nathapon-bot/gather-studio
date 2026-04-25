/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// ── ALL DESKS ─────────────────────────────────────────────
const desks = [
    // Product area (3×3 cluster)
    { name: 'desk_product',   cx: 112, cy: 112, label: '📦 Product' },
    { name: 'desk_product_2', cx:  80, cy: 112, label: '📦 Product' },
    { name: 'desk_product_3', cx: 144, cy: 112, label: '📦 Product' },
    { name: 'desk_product_4', cx: 176, cy: 112, label: '📦 Product' },
    { name: 'desk_product_5', cx:  48, cy: 112, label: '📦 Product' },
    // Note: product_6-9 removed — cy=80 is the sofa BACK (headrest) tile.
    // The seat tile is at cy=112, already covered by desk_product 1-4 above.
    // PM corner — only 1 seat: cy=176 (SOFA-SM-SEAT). cy=144 is SOFA-SM-BACK (headrest), removed.
    { name: 'desk_pm_corner_2', cx: 208, cy: 176, label: '📦 PM' },
    // East-Left
    { name: 'desk_EL_1', cx: 336, cy: 144, label: '🏢 East-L 1' },
    { name: 'desk_EL_2', cx: 432, cy: 144, label: '🏢 East-L 2' },
    { name: 'desk_EL_3', cx: 336, cy: 208, label: '🏢 East-L 3' },
    { name: 'desk_EL_4', cx: 432, cy: 208, label: '🏢 East-L 4' },
    // East-Right
    { name: 'desk_ER_1', cx: 528, cy: 144, label: '🏢 East-R 1' },
    { name: 'desk_ER_2', cx: 624, cy: 144, label: '🏢 East-R 2' },
    { name: 'desk_ER_3', cx: 528, cy: 208, label: '🏢 East-R 3' },
    { name: 'desk_ER_4', cx: 624, cy: 208, label: '🏢 East-R 4' },
    // QA zone (2 columns × 4 rows)
    { name: 'desk_qa',   cx: 816, cy: 304, label: '🧪 QA' },
    { name: 'desk_qa_2', cx: 912, cy: 304, label: '🧪 QA' },
    { name: 'desk_qa_3', cx: 816, cy: 272, label: '🧪 QA' },
    { name: 'desk_qa_4', cx: 912, cy: 272, label: '🧪 QA' },
    { name: 'desk_qa_5', cx: 816, cy: 336, label: '🧪 QA' },
    { name: 'desk_qa_6', cx: 912, cy: 336, label: '🧪 QA' },
    { name: 'desk_qa_7', cx: 816, cy: 368, label: '🧪 QA' },
    { name: 'desk_qa_8', cx: 912, cy: 368, label: '🧪 QA' },
    // Dev Center upper (6 desks) — cy=336 is the SEAT tile (row10); cy=304 was the BACK tile (row9)
    { name: 'desk_center_1', cx: 400, cy: 336, label: '💻 Dev-U 1' },
    { name: 'desk_center_2', cx: 464, cy: 336, label: '💻 Dev-U 2' },
    { name: 'desk_center_3', cx: 528, cy: 336, label: '💻 Dev-U 3' },
    { name: 'desk_center_6', cx: 432, cy: 336, label: '💻 Dev-U 4' },
    { name: 'desk_center_7', cx: 496, cy: 336, label: '💻 Dev-U 5' },
    { name: 'desk_center_8', cx: 560, cy: 336, label: '💻 Dev-U 6' },
    // Dev Center lower (6 desks)
    { name: 'desk_center_4',  cx: 400, cy: 432, label: '💻 Dev-L 1' },
    { name: 'desk_center_5',  cx: 528, cy: 432, label: '💻 Dev-L 2' },
    { name: 'desk_center_9',  cx: 432, cy: 432, label: '💻 Dev-L 3' },
    { name: 'desk_center_10', cx: 464, cy: 432, label: '💻 Dev-L 4' },
    { name: 'desk_center_11', cx: 496, cy: 432, label: '💻 Dev-L 5' },
    { name: 'desk_center_12', cx: 560, cy: 432, label: '💻 Dev-L 6' },
    // SW
    { name: 'desk_sw_1', cx: 176, cy: 496, label: '💻 SW 1' },
    { name: 'desk_sw_2', cx: 176, cy: 560, label: '💻 SW 2' },
    // South (2 cols × 2 rows)
    { name: 'desk_south_1', cx: 400, cy: 592, label: '💻 South 1' },
    { name: 'desk_south_2', cx: 560, cy: 592, label: '💻 South 2' },
    { name: 'desk_south_3', cx: 400, cy: 624, label: '💻 South 3' },
    { name: 'desk_south_4', cx: 560, cy: 624, label: '💻 South 4' },
    // SE
    { name: 'desk_se_1', cx: 688, cy: 560, label: '🏢 SE 1' },
    { name: 'desk_se_2', cx: 784, cy: 560, label: '🏢 SE 2' },
    { name: 'desk_se_3', cx: 848, cy: 592, label: '🏢 SE 3' },
    { name: 'desk_se_4', cx: 720, cy: 560, label: '🏢 SE 4' },
    { name: 'desk_se_5', cx: 816, cy: 560, label: '🏢 SE 5' },

    // ── Floor B (+640 / +672 for PM & QA) ──────────────────
    { name: 'desk_product_B',   cx: 112, cy: 752, label: '📦B Product' },
    { name: 'desk_product_2_B', cx:  80, cy: 752, label: '📦B Product' },
    { name: 'desk_product_3_B', cx: 144, cy: 752, label: '📦B Product' },
    { name: 'desk_product_4_B', cx: 176, cy: 752, label: '📦B Product' },
    { name: 'desk_product_5_B', cx:  48, cy: 752, label: '📦B Product' },
    // Note: product_6_B-9_B removed — cy=720 is the sofa BACK (headrest) tile on Floor B.
    // Floor B seat tile for those sofas is at cy=752, already covered by product_B 1-4 above.
    // PM corner Floor B — only 1 seat: cy=816 (SOFA-SM-SEAT). cy=784 is SOFA-SM-BACK, cy=848 is empty.
    // desk_pm_corner_2_B removed — it was a duplicate of desk_pm_corner_B at the same (208,816).
    { name: 'desk_pm_corner_B', cx: 208, cy: 816, label: '📦B PM' },
    { name: 'desk_EL_1_B', cx: 336, cy: 784, label: '🏢B East-L 1' },
    { name: 'desk_EL_2_B', cx: 432, cy: 784, label: '🏢B East-L 2' },
    { name: 'desk_EL_3_B', cx: 336, cy: 848, label: '🏢B East-L 3' },
    { name: 'desk_EL_4_B', cx: 432, cy: 848, label: '🏢B East-L 4' },
    { name: 'desk_ER_1_B', cx: 528, cy: 784, label: '🏢B East-R 1' },
    { name: 'desk_ER_2_B', cx: 624, cy: 784, label: '🏢B East-R 2' },
    { name: 'desk_ER_3_B', cx: 528, cy: 848, label: '🏢B East-R 3' },
    { name: 'desk_ER_4_B', cx: 624, cy: 848, label: '🏢B East-R 4' },
    { name: 'desk_qa_B',   cx: 816, cy:  976, label: '🧪B QA' },
    { name: 'desk_qa_2_B', cx: 912, cy:  976, label: '🧪B QA' },
    { name: 'desk_qa_3_B', cx: 816, cy:  944, label: '🧪B QA' },
    { name: 'desk_qa_4_B', cx: 912, cy:  944, label: '🧪B QA' },
    { name: 'desk_qa_5_B', cx: 816, cy: 1008, label: '🧪B QA' },
    { name: 'desk_qa_6_B', cx: 912, cy: 1008, label: '🧪B QA' },
    // desk_qa_7_B (816,1040) and desk_qa_8_B (912,1040) removed — row 32 has no chair tiles on Floor B
    // Floor B upper: same fix — cy=976 is the SEAT tile; cy=944 was the BACK tile
    { name: 'desk_center_1_B',  cx: 400, cy:  976, label: '💻B Dev-U 1' },
    { name: 'desk_center_2_B',  cx: 464, cy:  976, label: '💻B Dev-U 2' },
    { name: 'desk_center_3_B',  cx: 528, cy:  976, label: '💻B Dev-U 3' },
    { name: 'desk_center_6_B',  cx: 432, cy:  976, label: '💻B Dev-U 4' },
    { name: 'desk_center_7_B',  cx: 496, cy:  976, label: '💻B Dev-U 5' },
    { name: 'desk_center_8_B',  cx: 560, cy:  976, label: '💻B Dev-U 6' },
    { name: 'desk_center_4_B',  cx: 400, cy: 1072, label: '💻B Dev-L 1' },
    { name: 'desk_center_5_B',  cx: 528, cy: 1072, label: '💻B Dev-L 2' },
    { name: 'desk_center_9_B',  cx: 432, cy: 1072, label: '💻B Dev-L 3' },
    { name: 'desk_center_10_B', cx: 464, cy: 1072, label: '💻B Dev-L 4' },
    { name: 'desk_center_11_B', cx: 496, cy: 1072, label: '💻B Dev-L 5' },
    { name: 'desk_center_12_B', cx: 560, cy: 1072, label: '💻B Dev-L 6' },
    // desk_sw_1_B, desk_sw_2_B, desk_south_1-4_B, desk_se_1-5_B removed —
    // Floor B map ends at row 33 (1072px); these sections don't exist on Floor B
];

// ── CONSTANTS ─────────────────────────────────────────────
const PROXIMITY_RADIUS  = 24;   // ~0.75 tile — must be nearly on the chair to trigger
const TILE_SIZE         = 32;
const HIGHLIGHT_LAYER   = 'chair_highlight';
const TILE_VACANT       = 2956;   // green  border — vacant (no one booked)
const TILE_MINE         = 2957;   // blue   border — my booked desk
const TILE_OTHER        = 2958;   // red    border — someone else's desk

// ── DESK OWNER REGISTRY ───────────────────────────────────
// deskName → { playerName, playerId }
const deskOwners = new Map();

// ── STATE ─────────────────────────────────────────────────
let isSitting        = false;
let currentDesk      = undefined;
let nearestDesk      = null;
let myBookedDesk     = undefined;
let myDeskPosition   = null;
let myPlayerName     = '';
let sitActionMsg     = undefined;
let standActionMsg   = undefined;
let goHomeActionMsg  = undefined;
let bookingBtnActive = false;   // tracks whether booking action-bar button is shown
let proximityEnabled = true;    // proximity chat ON by default (allows camera/mic to work)
                                // users can opt-out from menu; sitting always disables it
let proximityMenuCmd = undefined;

// ── CALL / WAVE SYSTEM ────────────────────────────────────
// WA AvailabilityStatus enum (from framework):
//   ONLINE=1, SILENT=2, AWAY=3, JITSI=4, DENY_PROXIMITY_MEETING=5,
//   SPEAKER=6, BUSY=7, BACK_IN_A_MOMENT=8, DO_NOT_DISTURB=9
const STATUS_ONLINE            = 1;
const STATUS_SILENT            = 2;
const STATUS_AWAY              = 3;
const STATUS_JITSI             = 4;
const STATUS_DENY_PROXIMITY    = 5;
const STATUS_SPEAKER           = 6;
const STATUS_BUSY              = 7;
const STATUS_BACK_IN_A_MOMENT  = 8;
const STATUS_DO_NOT_DISTURB    = 9;

const RING_DURATION_MS = 5000;          // phone rings for 5s
const CALL_TIMEOUT_MS  = 8000;          // outgoing call stays "active" for 8s

let myId                 = '';
let ringStopFn           = null;        // current ringtone stopper
let callHistory          = [];          // { fromId, fromName, type, ts, answered }
let outgoingCallTimer    = null;
const callMenuCmds       = new Map();   // playerId → WA menu cmd
let callHistoryMenuCmd   = null;
let incomingActionMsg    = null;
let incomingActionClear  = null;

// ── CHAT SYSTEM ───────────────────────────────────────────
const MAX_MSGS_PER_ROOM    = 50;
const PROXIMITY_CHAT_RADIUS= 100;     // px — "nearby for group chat" detection
const chatRooms            = new Map();   // roomId → { id, name, members:Set<id>, memberNames:Map, messages:[], unread }
let   currentChatRoomId    = null;
let   chatWebsite          = null;        // WA.ui.website handle
let   chatReady            = false;       // iframe ready for state sync
let   chatBtnActive        = false;
let   chatBtnUnread        = 0;
let   proximityChatBtn     = null;        // "💬 Chat nearby" action bar btn

// ── HELPERS ───────────────────────────────────────────────
function findNearestDesk(px, py) {
    let best = null, bestDist = Infinity;
    for (const d of desks) {
        const dist = Math.hypot(px - d.cx, py - d.cy);
        if (dist < PROXIMITY_RADIUS && dist < bestDist) { best = d.name; bestDist = dist; }
    }
    return best;
}
function getDeskData(name)  { return desks.find(d => d.name === name); }
function getDeskLabel(name) { const d = getDeskData(name); return d ? d.label : name; }
function getDeskOwnerName(deskName) {
    if (deskOwners.has(deskName)) return deskOwners.get(deskName).playerName;
    return null;
}
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// Remote players expose `.uuid` + `.playerId` — NOT `.id`. Local `WA.player.id`
// does work (legacy accessor returning uuid). This helper normalises both.
function pid(player) {
    if (!player) return '';
    return player.uuid || player.id || (player.playerId != null ? String(player.playerId) : '');
}

// ── CHAIR TILE HIGHLIGHT ──────────────────────────────────
// The highlight layer shows colored circles on chair tiles so every user
// can see at-a-glance:
//   🟢 green  — vacant desk they can sit on (only the nearest one while walking)
//   🔵 blue   — desk THEY booked (always visible to self)
//   🔴 red    — desk booked by someone else (always visible to everyone)
//
// We keep a local record of every tile we've painted so we can diff-refresh
// without flashing the whole map.
const _paintedTiles = new Map();  // deskName → tileId currently painted (or null)

function highlightTileFor(deskName) {
    if (myBookedDesk === deskName)   return TILE_MINE;
    if (deskOwners.has(deskName))    return TILE_OTHER;
    return TILE_VACANT;
}
function _setTile(deskName, tileId) {
    const d = getDeskData(deskName);
    if (!d) return;
    if (_paintedTiles.get(deskName) === tileId) return;   // no change
    try {
        WA.room.setTiles([{
            x:     Math.floor(d.cx / TILE_SIZE),
            y:     Math.floor(d.cy / TILE_SIZE),
            tile:  tileId,
            layer: HIGHLIGHT_LAYER,
        }]);
        if (tileId == null) _paintedTiles.delete(deskName);
        else                _paintedTiles.set(deskName, tileId);
    } catch(e){}
}
function showHighlight(deskName) { _setTile(deskName, highlightTileFor(deskName)); }
function clearHighlight(deskName) {
    // Only clear if this desk ISN'T booked by anyone — booked desks stay highlighted
    // (blue/red) as persistent zone-markers.
    if (myBookedDesk === deskName)   { _setTile(deskName, TILE_MINE);  return; }
    if (deskOwners.has(deskName))    { _setTile(deskName, TILE_OTHER); return; }
    _setTile(deskName, null);
}

// Repaint every booked desk with its correct colour. Call whenever booking
// state changes (self books/unbooks, other player enters/leaves/toggles).
function refreshAllBookingHighlights() {
    const keep = new Set();
    if (myBookedDesk) {
        _setTile(myBookedDesk, TILE_MINE);
        keep.add(myBookedDesk);
    }
    for (const deskName of deskOwners.keys()) {
        if (deskName === myBookedDesk) continue;
        _setTile(deskName, TILE_OTHER);
        keep.add(deskName);
    }
    // Clear any previously-painted tile that is no longer booked
    for (const [deskName] of [..._paintedTiles]) {
        if (keep.has(deskName)) continue;
        if (nearestDesk === deskName) continue;   // vacant + nearest stays green
        _setTile(deskName, null);
    }

    // Nameplates iframe DISABLED — Chrome renders cross-origin iframes
    // (maps-* subdomain inside play-* parent) as opaque white despite
    // body/html background:transparent. The iframe was covering the
    // viewport with white. Floating name pills are sacrificed to keep
    // the rest of the office visible. Re-enable when nameplates can
    // be served from the play domain (same-origin).
    // if (keep.size > 0 && !_nameplatesWebsite) {
    //     openNameplatesOverlay().catch(() => {});
    // }
    // pushBookingsToNameplates();
}

// ── ABSOLUTE URLs for our helper iframes ─────────────────
// WA resolves `./foo.html` relative to the map URL, but when the map URL is
// momentarily empty (during scene transitions) `new URL('./foo.html', '')`
// throws "Invalid URL". Hardcoding the absolute URL avoids this entirely.
const MAPS_HOST         = 'https://maps-production-863b.up.railway.app';
const CHAT_HTML_URL     = `${MAPS_HOST}/office/chat.html`;
const NAMEPLATES_URL    = `${MAPS_HOST}/office/nameplates.html`;

// ── DESK NAMEPLATES OVERLAY ──────────────────────────────
// Floating labels above booked desks (blue = mine, red = others').
// Implemented as a full-viewport transparent website iframe that receives
// booking + camera data via postMessage. The iframe handles world→screen
// projection and rAF-batched position updates — negligible CPU cost.
let   _nameplatesWebsite   = null;
let   _nameplatesReady     = false;
let   _nameplatesIframe    = null;
let   _pendingNameplates   = null;       // queued booking data if iframe not ready yet
let   _pendingCamera       = null;

async function openNameplatesOverlay() {
    if (_nameplatesWebsite) return;
    try {
        _nameplatesWebsite = await WA.ui.website.open({
            url:      NAMEPLATES_URL,
            position: { vertical: 'middle', horizontal: 'middle' },
            // Guarantee 100px clearance top + bottom for the ☰ menu, action bar,
            // status indicator, etc. — a percentage margin isn't enough on short
            // viewports (e.g. 768p), where 7.5% = ~58px and the menu gets covered.
            size:     { width: '100%', height: 'calc(100% - 200px)' },
            margin:   { top: '100px', bottom: '100px', left: '0px', right: '0px' },
            allowApi: true,
        });
    } catch(e) { console.warn('[nameplates] open failed:', e); }
}

// Send a payload to the nameplates iframe via WA's event system.
// The iframe filters by senderId so only our own nameplates instance reacts.
function _sendToNameplates(payload) {
    try { WA.event.broadcast('mimo-np-state', payload); } catch(e){}
}

function pushBookingsToNameplates() {
    const payload = [];
    if (myBookedDesk) {
        const d = getDeskData(myBookedDesk);
        if (d) payload.push({
            name: d.name, label: d.label, cx: d.cx, cy: d.cy,
            ownerName: myPlayerName || 'คุณ', isMine: true,
        });
    }
    for (const [deskName, info] of deskOwners) {
        if (deskName === myBookedDesk) continue;
        const d = getDeskData(deskName);
        if (!d) continue;
        payload.push({
            name: d.name, label: d.label, cx: d.cx, cy: d.cy,
            ownerName: info.playerName || '?', isMine: false,
        });
    }
    if (!_nameplatesReady) { _pendingNameplates = payload; return; }
    _sendToNameplates({ type: 'bookings', desks: payload });
}

// DEPRECATED: the nameplates iframe now subscribes to WA.camera directly —
// broadcasting 60fps camera updates through WA.event was saturating bandwidth.
// Kept as a no-op so any stale caller doesn't throw.
function pushCameraToNameplates(_cam) { /* no-op by design */ }

// ── BOOKING ACTION-BAR BUTTON ─────────────────────────────
// Shows a prominent clickable button in the WA action bar.
// "จองโต๊ะนี้" (green) when near a vacant desk,
// "ยกเลิกการจอง" (red) when near your own booked desk.
// Hidden when near someone else's desk or when not near any desk.
function updateBookingMenu(deskName) {
    if (bookingBtnActive) {
        try { WA.ui.actionBar.removeButton('desk-book'); } catch(e) {}
        bookingBtnActive = false;
    }
    if (!deskName || isSitting) return;

    if (myBookedDesk === deskName) {
        // Already mine → offer unbook
        try {
            WA.ui.actionBar.addButton({
                id: 'desk-book',
                label: `🔓 ยกเลิกการจอง`,
                bgColor: '#e74c3c',
                textColor: '#ffffff',
                toolTip: `ยกเลิกการจอง: ${getDeskLabel(deskName)}`,
                callback: () => unbookDesk()
            });
            bookingBtnActive = true;
        } catch(e) {}
    } else if (!deskOwners.has(deskName)) {
        // Vacant → offer booking
        try {
            WA.ui.actionBar.addButton({
                id: 'desk-book',
                label: `📌 จองโต๊ะนี้`,
                bgColor: '#2ecc71',
                textColor: '#ffffff',
                toolTip: `จอง: ${getDeskLabel(deskName)}`,
                callback: () => bookDesk(deskName)
            });
            bookingBtnActive = true;
        } catch(e) {}
    }
    // (if owned by someone else — no booking button)
}
function clearBookingMenu() {
    if (bookingBtnActive) {
        try { WA.ui.actionBar.removeButton('desk-book'); } catch(e) {}
        bookingBtnActive = false;
    }
}

// ── GO HOME BUTTON ────────────────────────────────────────
// Now a persistent action-bar button instead of the SPACE-key action message.
// SPACE is reserved for sitting/standing so the two actions don't collide.
let _goHomeBtnActive = false;
function showGoHomeButton() {
    if (!myBookedDesk || !myDeskPosition) return hideGoHomeButton();
    const label = `🏠 กลับโต๊ะ`;
    try {
        if (_goHomeBtnActive) WA.ui.actionBar.removeButton('desk-go-home');
        WA.ui.actionBar.addButton({
            id:        'desk-go-home',
            label,
            bgColor:   '#3a8be0',
            textColor: '#ffffff',
            toolTip:   `เดินกลับไปที่ ${getDeskLabel(myBookedDesk)}`,
            callback:  () => goToMyDesk(),
        });
        _goHomeBtnActive = true;
    } catch(e){}
}
function hideGoHomeButton() {
    if (!_goHomeBtnActive) return;
    try { WA.ui.actionBar.removeButton('desk-go-home'); } catch(e){}
    _goHomeBtnActive = false;
}
async function goToMyDesk() {
    try {
        if (!myDeskPosition) return;
        await WA.player.moveTo(myDeskPosition.x, myDeskPosition.y, 10);
    } catch(e) {}
}

// ── SIT / STAND ───────────────────────────────────────────
async function sitDown(desk) {
    try {
        if (isSitting) return;
        const deskData = getDeskData(desk);

        // Snap to chair tile centre.
        // setSitting(true) shifts the sprite +4 px downward visually, so we
        // teleport 4 px ABOVE the tile centre so the sitting sprite lands exactly on the seat.
        if (deskData) {
            const tx = deskData.cx;
            const ty = deskData.cy - 4;   // -4 px compensates for setSitting visual offset
            try { await WA.player.teleport(tx, ty); } catch(e) {
                try { await WA.player.moveTo(tx, ty, 1000); } catch(e2) {}
            }
            await delay(50);
        }

        isSitting   = true;
        currentDesk = desk;
        if (sitActionMsg) { sitActionMsg.remove(); sitActionMsg = undefined; }
        hideGoHomeButton();
        clearBookingMenu();

        // Real sit animation: sprite −4 px + "{woka}-down-sit" anim
        await WA.player.setSitting(true);
        disableControlsFor('sit');        // refcount — composes with typing lock
        // NOTE: we deliberately do NOT call disablePlayerProximityMeeting() here.
        // Proximity chat must stay enabled while sitting so users can turn on
        // their camera/mic and talk with neighbours at adjacent desks.
        WA.player.setStatus('BUSY');
        await WA.player.setOutlineColor(255, 130, 0);   // orange = busy

        standActionMsg = WA.ui.displayActionMessage({
            message: '🚶 SPACE — ลุกขึ้น',
            type: 'message',
            callback: () => standUp()
        });
    } catch(e) {}
}

async function standUp() {
    try {
        if (!isSitting) return;
        if (standActionMsg) { standActionMsg.remove(); standActionMsg = undefined; }

        // Real stand animation: sprite +4 px + resume idle
        await WA.player.setSitting(false);
        restoreControlsFor('sit');        // only lifts the 'sit' reason; typing lock stays if user is typing
        // Proximity meeting was never disabled in sitDown() any more, so nothing to restore.
        WA.player.setStatus('ONLINE');
        await WA.player.removeOutlineColor();

        const prevDesk  = currentDesk;
        isSitting       = false;
        currentDesk     = undefined;
        // Don't reset nearestDesk — let the polling detect we're still near the chair
        nearestDesk     = null;

        if (myBookedDesk && myDeskPosition) showGoHomeButton();

        // Re-register booking menu if we're still near the desk
        if (prevDesk) updateBookingMenu(prevDesk);
    } catch(e) {}
}

// ── BOOKING ───────────────────────────────────────────────
async function bookDesk(deskName) {
    try {
        const d = getDeskData(deskName);
        myBookedDesk   = deskName;
        myDeskPosition = d ? { x: d.cx, y: d.cy } : await WA.player.getPosition();
        // Parallelise the 3 saveVariable round-trips — they're independent,
        // so Promise.all saves ~2x network latency on each booking action.
        await Promise.all([
            WA.player.state.saveVariable('bookedDesk',    deskName,       { public: true,  persist: true }),
            WA.player.state.saveVariable('bookedDeskPos', myDeskPosition, { public: false, persist: true }),
            WA.player.state.saveVariable('playerName',    myPlayerName,   { public: true,  persist: true }),
        ]);
        WA.chat.sendChatMessage(`📌 จองแล้ว: ${getDeskLabel(deskName)}`, 'ระบบ');
        refreshAllBookingHighlights();
        if (nearestDesk === deskName) updateBookingMenu(deskName);
    } catch(e) {}
}

async function unbookDesk() {
    try {
        if (!myBookedDesk) return;
        const old = myBookedDesk;
        myBookedDesk   = undefined;
        myDeskPosition = null;
        await Promise.all([
            WA.player.state.saveVariable('bookedDesk',    null, { public: true,  persist: true }),
            WA.player.state.saveVariable('bookedDeskPos', null, { public: false, persist: true }),
            WA.player.state.saveVariable('playerName',    null, { public: true,  persist: true }),
        ]);
        hideGoHomeButton();
        WA.chat.sendChatMessage(`🔓 ยกเลิกการจอง: ${getDeskLabel(old)}`, 'ระบบ');
        refreshAllBookingHighlights();
        if (nearestDesk === old) updateBookingMenu(old);
    } catch(e) {}
}

// ── DESK DIRECTORY ────────────────────────────────────────
function showDeskDirectory() {
    const lines = [];
    if (myBookedDesk) lines.push(`✅ ${getDeskLabel(myBookedDesk)} — คุณ`);
    for (const [desk, { playerName }] of deskOwners.entries())
        lines.push(`🔴 ${getDeskLabel(desk)} — ${playerName}`);
    WA.chat.sendChatMessage(
        lines.length ? '📋 สถานะโต๊ะ:\n' + lines.join('\n') : '📋 ยังไม่มีใครจองโต๊ะ',
        'ระบบ'
    );
}

// ── APPROACH / LEAVE ──────────────────────────────────────
function onApproachDesk(desk) {
    if (isSitting) return;
    showHighlight(desk);
    updateBookingMenu(desk);
    hideGoHomeButton();

    // Minimal action message — just registers the SPACE key callback
    // The chair highlight is the visual cue; no intrusive popup text
    sitActionMsg = WA.ui.displayActionMessage({
        message: '💺',
        type: 'message',
        callback: () => sitDown(desk)
    });
}

function onLeaveDesk(desk) {
    clearHighlight(desk);
    clearBookingMenu();
    if (sitActionMsg) { sitActionMsg.remove(); sitActionMsg = undefined; }
    if (myBookedDesk && myDeskPosition) showGoHomeButton();
}

// ── PROXIMITY CHAT TOGGLE ─────────────────────────────────
function updateProximityMenu() {
    if (proximityMenuCmd) { proximityMenuCmd.remove(); proximityMenuCmd = undefined; }
    if (proximityEnabled) {
        proximityMenuCmd = WA.ui.registerMenuCommand('📹 ปิด Proximity Chat', {
            callback: () => {
                proximityEnabled = false;
                WA.controls.disablePlayerProximityMeeting();
                updateProximityMenu();
            }
        });
    } else {
        proximityMenuCmd = WA.ui.registerMenuCommand('📹 เปิด Proximity Chat', {
            callback: () => {
                proximityEnabled = true;
                if (!isSitting) WA.controls.restorePlayerProximityMeeting();
                updateProximityMenu();
            }
        });
    }
}

// ── PLAYER TRACKING ───────────────────────────────────────
// Each subscription is wrapped in try/catch so one noisy event can't tear down
// the whole tracking pipeline. Critical for stability under flaky networks.
function safeSubscribe(observable, handler) {
    try {
        observable.subscribe((v) => { try { handler(v); } catch(err) { console.warn('[track] handler err', err); } });
    } catch(err) { console.warn('[track] subscribe err', err); }
}

function trackPlayer(player) {
    try {
        const booked = player.state['bookedDesk'];
        const playerUuid = pid(player);
        if (booked) deskOwners.set(booked, { playerName: player.name, playerId: playerUuid });

        safeSubscribe(player.state.onVariableChange('bookedDesk'), (value) => {
            for (const [d, o] of deskOwners.entries())
                if (o.playerId === playerUuid) { deskOwners.delete(d); break; }
            if (value) deskOwners.set(value, { playerName: player.name, playerId: playerUuid });
            refreshAllBookingHighlights();                 // keep zone colours in sync
            if (nearestDesk && !isSitting) updateBookingMenu(nearestDesk);
        });

        // CALL SYSTEM
        safeSubscribe(player.state.onVariableChange('callOut'), (value) => {
            if (!value)                          return;
            if (value.targetId !== myId)         return;
            if (Date.now() - value.ts > 10_000)  return;
            handleIncomingCall(value, player);
        });

        // CUSTOM STATUS — refresh menus when a player changes preset
        safeSubscribe(player.state.onVariableChange('customStatus'), () => {
            updateCallMenu();
            pushStateToChat();
        });

        // CHAT messages + join events
        safeSubscribe(player.state.onVariableChange('chatMsg'),  (msg) => {
            if (msg) handleInboundChatMsg(msg, player);
        });
        safeSubscribe(player.state.onVariableChange('chatJoin'), (ev)  => {
            if (!ev) return;
            if (Date.now() - (ev.ts || 0) > 30_000) return;
            handleInboundChatJoin(ev, player);
        });
    } catch(e) { console.warn('[track] trackPlayer err', e); }
}

// ── CUSTOM STATUS PRESETS ─────────────────────────────────
// Each preset sets a base AvailabilityStatus (so camera/mic/call logic still
// respects it) AND publishes a display label/emoji for other players to see.
const STATUS_PRESETS = [
    { key: 'online',   emoji: '🟢', label: 'พร้อมทำงาน',       base: 'ONLINE'          },
    { key: 'wfh',      emoji: '🏠', label: 'Work From Home',    base: 'ONLINE'          },
    { key: 'lunch',    emoji: '🍱', label: 'พักเที่ยง',          base: 'AWAY'            },
    { key: 'break',    emoji: '☕', label: 'พักเบรค',           base: 'AWAY'            },
    { key: 'errand',   emoji: '🚗', label: 'ออกนอกออฟฟิศ',     base: 'AWAY'            },
    { key: 'meeting',  emoji: '🎙️', label: 'ประชุมอยู่',         base: 'DO_NOT_DISTURB'  },
    { key: 'focus',    emoji: '💻', label: 'Focus Mode',        base: 'DO_NOT_DISTURB'  },
    { key: 'oncall',   emoji: '📞', label: 'คุยโทรศัพท์อยู่',      base: 'DO_NOT_DISTURB'  },
];

const statusMenuCmds = new Map();   // key → WA menu cmd
let myCustomStatus    = null;        // { key, emoji, label, base, ts }

async function applyCustomStatus(preset) {
    try {
        try { WA.player.setStatus(preset.base); } catch(e) {}
        myCustomStatus = {
            key: preset.key, emoji: preset.emoji, label: preset.label,
            base: preset.base, ts: Date.now(),
        };
        // Publish so other players see the custom label next to our name
        await WA.player.state.saveVariable('customStatus', myCustomStatus, {
            public: true, persist: true,
        });
        WA.chat.sendChatMessage(`${preset.emoji} เปลี่ยนสถานะ: ${preset.label}`, 'ระบบ');
        updateStatusMenu();        // refresh own menu (show checkmark)
    } catch(e) { console.warn('[status] apply failed:', e); }
}

function updateStatusMenu() {
    // Remove previous entries, re-add with live checkmarks
    for (const [, cmd] of statusMenuCmds) { try { cmd.remove(); } catch(e){} }
    statusMenuCmds.clear();
    for (const preset of STATUS_PRESETS) {
        const isActive = myCustomStatus && myCustomStatus.key === preset.key;
        const label    = `${preset.emoji} ${preset.label}${isActive ? ' ✓' : ''}`;
        try {
            const cmd = WA.ui.registerMenuCommand(label, {
                callback: () => applyCustomStatus(preset)
            });
            statusMenuCmds.set(preset.key, cmd);
        } catch(e){}
    }
}

// ── CALL / WAVE SYSTEM — helpers ──────────────────────────
function getPlayerStatus(player) {
    try { return player.availabilityStatus ?? STATUS_ONLINE; } catch(e) { return STATUS_ONLINE; }
}
function statusIcon(status) {
    if (status === STATUS_AWAY || status === STATUS_BACK_IN_A_MOMENT) return '🟡';
    if (status === STATUS_BUSY || status === STATUS_DO_NOT_DISTURB)   return '🔴';
    if (status === STATUS_JITSI || status === STATUS_SPEAKER)         return '🎙️';
    if (status === STATUS_SILENT || status === STATUS_DENY_PROXIMITY) return '🔕';
    return '🟢';
}
function statusLabel(status) {
    if (status === STATUS_AWAY || status === STATUS_BACK_IN_A_MOMENT) return 'Away';
    if (status === STATUS_BUSY)                                        return 'Busy';
    if (status === STATUS_DO_NOT_DISTURB)                              return 'DND';
    if (status === STATUS_JITSI || status === STATUS_SPEAKER)          return 'In meeting';
    if (status === STATUS_SILENT || status === STATUS_DENY_PROXIMITY)  return 'Silent';
    return 'Online';
}
function isCallable(status) {
    // Can call: ONLINE, AWAY, BACK_IN_A_MOMENT
    // Can't call: BUSY, DND, SILENT, DENY_PROXIMITY, in meeting
    return status === STATUS_ONLINE
        || status === STATUS_AWAY
        || status === STATUS_BACK_IN_A_MOMENT;
}
function isAwayStatus(status) {
    return status === STATUS_AWAY || status === STATUS_BACK_IN_A_MOMENT;
}

// ── RINGTONE (two-tone phone ring via Web Audio API) ──────
// Reuse ONE AudioContext across rings — creating/closing contexts is costly and
// some browsers rate-limit new-context creation ("too many AudioContexts" warning).
let _sharedAudioCtx = null;
function playRingtone(totalMs) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return () => {};
    if (!_sharedAudioCtx || _sharedAudioCtx.state === 'closed') {
        try { _sharedAudioCtx = new AC(); } catch(e) { return () => {}; }
    }
    const ctx = _sharedAudioCtx;
    // Resume if suspended (browser autoplay policy)
    if (ctx.state === 'suspended') { try { ctx.resume(); } catch(e){} }

    let stopped = false;
    const liveOscs = new Set();

    function burst() {
        if (stopped) return;
        const t0 = ctx.currentTime;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0,        t0);
        gain.gain.linearRampToValueAtTime(0.18, t0 + 0.03);
        gain.gain.setValueAtTime(0.18,     t0 + 1.8);
        gain.gain.linearRampToValueAtTime(0,    t0 + 2.0);
        gain.connect(ctx.destination);
        for (const freq of [440, 480]) {          // NA-style dual-tone ring
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = freq;
            osc.connect(gain);
            osc.start(t0);
            osc.stop(t0 + 2.0);
            liveOscs.add(osc);
            osc.onended = () => liveOscs.delete(osc);
        }
        setTimeout(burst, 3000);                   // 2s ring + 1s silence, repeat
    }
    burst();

    function stop() {
        if (stopped) return;
        stopped = true;
        for (const o of liveOscs) { try { o.stop(); } catch(e){} }
        liveOscs.clear();
        // DO NOT close the shared context — we reuse it for subsequent rings.
    }
    setTimeout(stop, totalMs);
    return stop;
}

// ── OUTGOING CALL ─────────────────────────────────────────
async function initiateCall(targetPlayer) {
    try {
        const status = getPlayerStatus(targetPlayer);
        if (!isCallable(status)) {
            WA.chat.sendChatMessage(`${statusIcon(status)} ${targetPlayer.name} — ${statusLabel(status)} (โทรไม่ได้)`, 'ระบบ');
            return;
        }
        const type   = isAwayStatus(status) ? 'ring' : 'wave';
        const callId = `${myId}-${Date.now()}`;

        // Publish on our state — every callee subscribes and filters by targetId
        await WA.player.state.saveVariable('callOut', {
            targetId:   targetPlayer.id,
            callerName: myPlayerName,
            type, callId,
            ts: Date.now(),
        }, { public: true, persist: false });

        WA.chat.sendChatMessage(
            type === 'ring'
                ? `📞 กำลังโทรหา ${targetPlayer.name}... (รอสูงสุด ${RING_DURATION_MS/1000} วิ)`
                : `👋 เรียก ${targetPlayer.name} แล้ว`,
            'ระบบ'
        );

        if (outgoingCallTimer) clearTimeout(outgoingCallTimer);
        outgoingCallTimer = setTimeout(async () => {
            try { await WA.player.state.saveVariable('callOut', null, { public: true, persist: false }); } catch(e){}
        }, CALL_TIMEOUT_MS);
    } catch(e) { console.warn('[call] initiateCall failed:', e); }
}

// ── INCOMING CALL ─────────────────────────────────────────
function handleIncomingCall(callData, caller) {
    const { type, callerName, callId } = callData;

    // Don't double-handle same callId
    if (callHistory.length && callHistory[0].callId === callId) return;

    // Add to history
    callHistory.unshift({
        callId, fromId: caller.id, fromName: callerName,
        type, ts: Date.now(), answered: false,
    });
    if (callHistory.length > 20) callHistory.length = 20;
    updateCallHistoryMenu();

    // Stop any previous ring, start new one for 'ring' type only
    if (ringStopFn) { ringStopFn(); ringStopFn = null; }
    if (type === 'ring') {
        ringStopFn = playRingtone(RING_DURATION_MS);
    }

    const callerPos = caller.position || { x: 0, y: 0 };
    const label = type === 'ring'
        ? `📞 ${callerName} กำลังโทรหา — SPACE เดินไปหา`
        : `👋 ${callerName} เรียกคุณ — SPACE เดินไปหา`;

    WA.chat.sendChatMessage(label, 'ระบบ');

    // Clean up any previous incoming indicator
    if (incomingActionClear) { try { incomingActionClear(); } catch(e){} }

    incomingActionMsg = WA.ui.displayActionMessage({
        message: label,
        type:    'message',
        callback: () => {
            // Stop ring + mark answered + walk over
            if (ringStopFn) { ringStopFn(); ringStopFn = null; }
            const entry = callHistory.find(c => c.callId === callId);
            if (entry) entry.answered = true;
            updateCallHistoryMenu();
            try { WA.player.moveTo(callerPos.x, callerPos.y, 400); } catch(e){}
            cleanupIncoming();
        }
    });

    const removeTimer = setTimeout(cleanupIncoming, 12_000);
    incomingActionClear = () => {
        clearTimeout(removeTimer);
        if (incomingActionMsg) { try { incomingActionMsg.remove(); } catch(e){} incomingActionMsg = null; }
    };
    function cleanupIncoming() {
        if (incomingActionClear) { incomingActionClear(); incomingActionClear = null; }
    }
}

// ── CALL "MENU" — moved into chat UI's Online tab (see chat.html) ──
// Rationale: stuffing 1 game-menu command per player (15+) was burying the
// Custom Status presets in a scrollable list. Calls now live next to each user
// row in the chat popup's Online tab, which is where users already look for
// "who's around" — one consistent place for social actions.
//
// We keep the function name + no-op the legacy menu-update behaviour so the
// rest of the code base continues to work. A state push is enough to refresh
// the chat UI's user list when anything changes.
const _callMenuLabels = new Map();          // retained for compatibility

function updateCallMenu() {
    // Remove any leftover menu commands from previous builds
    if (callMenuCmds.size > 0) {
        for (const [id, cmd] of callMenuCmds) { try { cmd.remove(); } catch(e){} }
        callMenuCmds.clear();
        _callMenuLabels.clear();
    }
    // The chat UI now shows the user list with a Call button per row —
    // pushing state is sufficient to keep it current.
    pushStateToChat();
}

// Called from the chat iframe when the user taps the 📞 icon on a row.
async function initiateCallById(userId) {
    try {
        const player = WA.players.list().find(p => pid(p) === userId);
        if (!player) return;
        await initiateCall(player);
    } catch(e) { console.warn('[call] initiateCallById failed:', e); }
}

// Walk our wok to another player's current position.
async function walkToPlayer(userId) {
    try {
        const player = WA.players.list().find(p => pid(p) === userId);
        if (!player || !player.position) {
            WA.chat.sendChatMessage('ไม่พบตำแหน่งของผู้เล่น', 'ระบบ');
            return;
        }
        await WA.player.moveTo(player.position.x, player.position.y, 8);
    } catch(e) { console.warn('[walk] moveTo failed:', e); }
}

function updateCallHistoryMenu() {
    if (callHistoryMenuCmd) { try { callHistoryMenuCmd.remove(); } catch(e){} callHistoryMenuCmd = null; }
    if (callHistory.length === 0) return;
    const missed = callHistory.filter(c => !c.answered).length;
    const lab    = `📋 ประวัติการเรียก${missed > 0 ? ` (${missed} พลาด)` : ''}`;
    try {
        callHistoryMenuCmd = WA.ui.registerMenuCommand(lab, {
            callback: () => showCallHistory()
        });
    } catch(e){}
}

function showCallHistory() {
    if (callHistory.length === 0) {
        WA.chat.sendChatMessage('📋 ไม่มีประวัติการเรียก', 'ระบบ');
        return;
    }
    const lines = callHistory.slice(0, 10).map(c => {
        const d    = new Date(c.ts);
        const time = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
        const ti   = c.type === 'ring' ? '📞' : '👋';
        const st   = c.answered ? '✓ รับสาย' : '❌ พลาด';
        return `  ${ti} ${time} — ${c.fromName}  ${st}`;
    });
    WA.chat.sendChatMessage('📋 ประวัติการเรียก (10 ล่าสุด):\n' + lines.join('\n'), 'ระบบ');
    // Mark all as read
    for (const c of callHistory) c.answered = true;
    updateCallHistoryMenu();
}

// ── CHAT SYSTEM — helpers ─────────────────────────────────
function getNameById(id) {
    if (id === myId) return myPlayerName;
    try { for (const p of WA.players.list()) if (pid(p) === id) return p.name; } catch(e){}
    return 'ไม่ทราบชื่อ';
}

function roomToWire(r) {
    return {
        id: r.id,
        name: r.name,
        members: [...r.members].map(id => ({ id, name: getNameById(id) })),
        messages: r.messages.slice(-MAX_MSGS_PER_ROOM),
        unread: r.unread || 0,
    };
}

function buildChatState() {
    let onlineUsers = [];
    try {
        // WA.players.list() returns an Iterator Helper in modern Chrome —
        // .filter()/.map() chained on it stay as Iterator Helper too, which
        // is NOT an Array (no .length, JSON.stringify ignores it). Force
        // Array.from up front so all downstream array logic works.
        onlineUsers = Array.from(WA.players.list())
            .filter(p => pid(p) !== myId)
            .map(p => ({
                id:                 pid(p),
                name:               p.name,
                availabilityStatus: p.availabilityStatus,
                customStatus:       (p.state && p.state.customStatus) || null,
            }));
    } catch(e){}
    return {
        myId, myName: myPlayerName,
        rooms:         [...chatRooms.values()].map(roomToWire),
        onlineUsers,
        // Mirror as `users` with explicit `online: true` for the redesigned
        // chat.html (Lovable), which expects state.users[].online.
        users:         onlineUsers.map(u => ({ ...u, online: true })),
        currentRoomId: currentChatRoomId,
    };
}

// Debounced state push via WA.event — coalesces multiple triggers within 150ms.
// Also content-dedup: if the built state is byte-identical to the previous push,
// skip the broadcast entirely. Stops the 5s heartbeat from spamming events
// when the user is idle.
let _pushStateTimer = null;
let _lastPushedState = '';
function pushStateToChat() {
    if (!chatWebsite || !chatReady) return;
    if (_pushStateTimer) return;
    _pushStateTimer = setTimeout(() => {
        _pushStateTimer = null;
        if (!chatWebsite || !chatReady) return;
        try {
            const state = buildChatState();
            const serialised = JSON.stringify(state);
            if (serialised === _lastPushedState) return;     // no change — skip
            _lastPushedState = serialised;
            // postMessage uses StructuredClone, which rejects Iterator Helper
            // objects that JSON tolerates. Round-trip through JSON to strip
            // any non-cloneable fields that snuck in via Player/state spreads.
            WA.event.broadcast('mimo-chat-state', JSON.parse(serialised));
        } catch(e){}
    }, 150);
}

function recomputeChatUnread() {
    chatBtnUnread = [...chatRooms.values()].reduce((s, r) => s + (r.unread || 0), 0);
    updateChatActionBarBtn();
}

// ── CHAT ACTION-BAR BUTTON ──────────────────────────────
// Single "💬 Chat" button toggles the popup on/off. Label flips to indicate
// state (closed vs open). The in-dialog X also works after the closeChatUI
// orphan-ref fix, so the separate "✕ ปิด Chat" button is no longer needed.
function updateChatActionBarBtn() {
    const isOpen = !!chatWebsite;
    const base   = isOpen ? '💬 ปิด Chat' : '💬 Chat';
    const label  = chatBtnUnread > 0 ? `${base} (${chatBtnUnread})` : base;
    try {
        if (chatBtnActive) WA.ui.actionBar.removeButton('chat-open');
        WA.ui.actionBar.addButton({
            id:        'chat-open',
            label,
            bgColor:   chatBtnUnread > 0 ? '#e74c3c' : (isOpen ? '#555' : '#4aa3ff'),
            textColor: '#ffffff',
            toolTip:   chatBtnUnread > 0 ? `มีข้อความใหม่ ${chatBtnUnread} ข้อความ` : 'เปิด/ปิด Chat',
            callback:  () => toggleChatUI(),
        });
        chatBtnActive = true;
    } catch(e){}
}

// ── CHAT IFRAME ───────────────────────────────────────────
let _chatPeriodicTimer = null;
let _chatCurrentSize   = 'S';           // start compact; user can tap M/L to grow

// Size presets for the chat popup. The WA sidebar lives on the LEFT, so we pin
// ours to the RIGHT to avoid overlap.
// Smaller defaults — users said the panel was eating too much screen
const CHAT_SIZES = {
    S: { width: '15%', height: '50%' },
    M: { width: '22%', height: '65%' },
    L: { width: '32%', height: '80%' },
};
const CHAT_POSITION = { vertical: 'middle', horizontal: 'right' };
const CHAT_MARGIN   = { top: '70px', bottom: '70px', right: '12px' };

async function openChatUI(size) {
    if (chatWebsite) return;
    const _afterOpen = () => { try { updateChatActionBarBtn(); } catch(e){} };
    // Default to S (compact) on every open. User can tap M/L to grow per session.
    _chatCurrentSize = size || 'S';
    try {
        chatWebsite = await WA.ui.website.open({
            url:       CHAT_HTML_URL,
            position:  CHAT_POSITION,
            size:      CHAT_SIZES[_chatCurrentSize],
            margin:    CHAT_MARGIN,
            // allowApi:true is REQUIRED — WA registers the iframe, letting it
            // call WA.event.broadcast/on to talk to us. The chat iframe does NOT
            // use raw postMessage any more, so we no longer trigger "Invalid event"
            // errors with the strict schema validator.
            allowApi:  true,
        });
        chatReady = false;
        _afterOpen();                        // show the "✕ ปิด Chat" action-bar button
        // Multiple resync attempts — the Online list depends on configureTracking()
        // having populated, which can lag the iframe load.
        setTimeout(pushStateToChat, 300);
        setTimeout(pushStateToChat, 1_000);
        setTimeout(pushStateToChat, 3_000);
        if (_chatPeriodicTimer) clearInterval(_chatPeriodicTimer);
        _chatPeriodicTimer = setInterval(pushStateToChat, 5_000);
    } catch(e) { console.warn('[chat] open failed:', e); chatWebsite = null; }
}

// Resize in-place via WA's website.size setter — no close+reopen needed,
// iframe state (scroll, text in input, etc.) is preserved.
function resizeChatUI(newSize) {
    if (!CHAT_SIZES[newSize] || newSize === _chatCurrentSize) return;
    _chatCurrentSize = newSize;
    if (!chatWebsite) return;
    try { chatWebsite.size = CHAT_SIZES[newSize]; }
    catch(e) { console.warn('[chat] resize failed', e); }
}

async function closeChatUI() {
    const handle    = chatWebsite;
    chatWebsite     = null;             // clear state FIRST so no callers re-enter
    chatReady       = false;
    _lastPushedState = '';               // fresh state on next open
    if (_pushStateTimer)     { clearTimeout(_pushStateTimer);     _pushStateTimer = null; }
    if (_chatPeriodicTimer)  { clearInterval(_chatPeriodicTimer); _chatPeriodicTimer = null; }
    try { updateChatActionBarBtn(); } catch(e){}    // flip "💬 ปิด Chat" → "💬 Chat"

    // Fire-and-forget: don't await WA's response (queryWorkadventure can hang on resize
    // races). We mark the handle closed and move on.
    try { handle && handle.close && handle.close(); } catch(e){ console.warn('[chat] primary close failed', e); }

    // Safety sweep: a moment later, enumerate all open UI websites and close any
    // whose URL contains chat.html. Catches the case where WA didn't actually
    // remove the iframe (leftover from a previous resize, crashed handle, etc.).
    setTimeout(async () => {
        try {
            const all = await WA.ui.website.getAll();
            for (const w of all || []) {
                const url = (w && w.url) || '';
                if (url.indexOf('chat.html') !== -1) {
                    try { await w.close(); } catch(e){}
                }
            }
        } catch(e) { /* getAll may not be available in older WA; ignore */ }
    }, 150);
}

async function toggleChatUI() {
    if (chatWebsite) await closeChatUI();
    else             await openChatUI();
}

// ── CHAT: messages + rooms ────────────────────────────────
const MAX_CHAT_ROOMS = 30;          // cap memory — drop least-recently-used when exceeded

function ensureRoom(roomId, name, memberIds) {
    let room = chatRooms.get(roomId);
    if (!room) {
        room = {
            id:       roomId,
            name:     name || 'Chat',
            members:  new Set(memberIds),
            messages: [],
            unread:   0,
            lastActivity: Date.now(),
        };
        chatRooms.set(roomId, room);
        // LRU eviction — drop oldest-inactive room if we're over limit
        if (chatRooms.size > MAX_CHAT_ROOMS) {
            let oldestId = null, oldestTs = Infinity;
            for (const [rid, r] of chatRooms) {
                if (rid === currentChatRoomId) continue;     // never evict active
                if (r.lastActivity < oldestTs) { oldestTs = r.lastActivity; oldestId = rid; }
            }
            if (oldestId) chatRooms.delete(oldestId);
        }
    } else {
        if (name) room.name = name;
        for (const id of memberIds) room.members.add(id);
        room.lastActivity = Date.now();
    }
    return room;
}

// Scheduled clear of the `chatMsg` state variable a bit after send. This stops the
// message from being delivered a 2nd time to someone who re-joins the room later.
let _chatMsgClearTimer = null;
async function sendChatMessage(roomId, text) {
    const room = chatRooms.get(roomId);
    if (!room) return;
    const msg = {
        id:        `${myId}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,
        roomId,
        from:      myId,
        fromName:  myPlayerName,
        text,
        ts:        Date.now(),
        members:   [...room.members],
        roomName:  room.name,
    };
    room.messages.push(msg);
    room.lastActivity = msg.ts;
    while (room.messages.length > MAX_MSGS_PER_ROOM) room.messages.shift();
    try {
        await WA.player.state.saveVariable('chatMsg', msg, { public: true, persist: false });
    } catch(e){ console.warn('[chat] saveVariable chatMsg failed', e); }
    pushStateToChat();
    // Clear the variable after 10s — receivers have already consumed it via onVariableChange.
    // This prevents anyone arriving later (or re-joining) from seeing a stale "new message".
    if (_chatMsgClearTimer) clearTimeout(_chatMsgClearTimer);
    _chatMsgClearTimer = setTimeout(() => {
        WA.player.state.saveVariable('chatMsg', null, { public: true, persist: false }).catch(() => {});
    }, 10_000);
}

let _chatJoinClearTimer = null;
async function createDirectRoom(otherId, otherName) {
    const roomId = `dm-${[myId, otherId].sort().join('-')}`;
    ensureRoom(roomId, otherName, [myId, otherId]);
    try {
        await WA.player.state.saveVariable('chatJoin', {
            roomId, members: [myId, otherId],
            name: null,    // DM — receiver uses their own counterpart name
            ts: Date.now(),
        }, { public: true, persist: false });
    } catch(e){}
    scheduleChatJoinClear();
    currentChatRoomId = roomId;
    pushStateToChat();
}

// Clear the chatJoin state var after 15s so a player who joins later doesn't
// re-receive a stale invite event.
function scheduleChatJoinClear() {
    if (_chatJoinClearTimer) clearTimeout(_chatJoinClearTimer);
    _chatJoinClearTimer = setTimeout(() => {
        WA.player.state.saveVariable('chatJoin', null, { public: true, persist: false }).catch(()=>{});
    }, 15_000);
}

async function createGroupRoom(memberIds, name) {
    const allMembers = [myId, ...memberIds];
    const roomId = `grp-${myId}-${Date.now()}-${Math.random().toString(36).slice(2,6)}`;
    const roomName = name || `Group (${allMembers.length})`;
    ensureRoom(roomId, roomName, allMembers);
    try {
        await WA.player.state.saveVariable('chatJoin', {
            roomId, members: allMembers, name: roomName, ts: Date.now(),
        }, { public: true, persist: false });
    } catch(e){}
    scheduleChatJoinClear();
    currentChatRoomId = roomId;
    pushStateToChat();
    WA.chat.sendChatMessage(`💬 สร้างกลุ่มแชท "${roomName}" (${allMembers.length} คน)`, 'ระบบ');
}

async function inviteToRoom(roomId, newMemberIds) {
    const room = chatRooms.get(roomId);
    if (!room) return;
    for (const id of newMemberIds) room.members.add(id);
    try {
        await WA.player.state.saveVariable('chatJoin', {
            roomId, members: [...room.members], name: room.name, ts: Date.now(),
        }, { public: true, persist: false });
    } catch(e){}
    scheduleChatJoinClear();
    pushStateToChat();
}

// Handle inbound message from another player
function handleInboundChatMsg(msg, fromPlayer) {
    if (!msg || !msg.members) return;
    if (!msg.members.includes(myId)) return;   // not for me
    // Early-exit: stale message (> 5 min old) — skip.
    if (Date.now() - (msg.ts || 0) > 300_000) return;
    const room = ensureRoom(
        msg.roomId,
        msg.roomName || fromPlayer.name,
        msg.members,
    );
    // Dedupe by message id (O(50) scan, worth it for correctness)
    if (room.messages.some(x => x.id === msg.id)) return;
    room.messages.push(msg);
    room.lastActivity = msg.ts || Date.now();
    while (room.messages.length > MAX_MSGS_PER_ROOM) room.messages.shift();
    if (msg.roomId !== currentChatRoomId) {
        room.unread = (room.unread || 0) + 1;
        recomputeChatUnread();
    }
    pushStateToChat();
}

// Handle inbound join/invite event
function handleInboundChatJoin(ev, fromPlayer) {
    if (!ev || !ev.members) return;
    if (!ev.members.includes(myId)) return;
    // DM — room name = the OTHER person's name (not necessarily our perspective)
    const dm = /^dm-/.test(ev.roomId);
    const roomName = ev.name || (dm ? fromPlayer.name : 'Chat');
    const existed  = chatRooms.has(ev.roomId);
    ensureRoom(ev.roomId, roomName, ev.members);
    if (!existed && !dm) {
        WA.chat.sendChatMessage(`💬 ${fromPlayer.name} เชิญคุณเข้ากลุ่ม: ${roomName}`, 'ระบบ');
    }
    pushStateToChat();
}

// ── PROXIMITY → GROUP CHAT BUTTON ─────────────────────────
async function chatWithNearby() {
    try {
        const myPos = await WA.player.getPosition();
        const nearby = [];
        for (const p of WA.players.list()) {
            if (pid(p) === myId) continue;
            if (!p.position) continue;
            const d = Math.hypot(p.position.x - myPos.x, p.position.y - myPos.y);
            if (d <= PROXIMITY_CHAT_RADIUS) nearby.push(p);
        }
        if (nearby.length === 0) {
            WA.chat.sendChatMessage('👥 ไม่มีคนใกล้ๆ ให้สร้างกลุ่ม', 'ระบบ');
            return;
        }
        await createGroupRoom(nearby.map(p => pid(p)), `Nearby Group`);
        if (!chatWebsite) await openChatUI();
    } catch(e) { console.warn('[chat] chatWithNearby failed:', e); }
}

let _lastProximityCount = -1;
function updateProximityChatBtn(nearbyCount) {
    // Skip if unchanged — avoids flicker
    if (nearbyCount === _lastProximityCount) return;
    _lastProximityCount = nearbyCount;
    try {
        if (proximityChatBtn) {
            WA.ui.actionBar.removeButton('chat-nearby');
            proximityChatBtn = null;
        }
        if (nearbyCount >= 1) {
            WA.ui.actionBar.addButton({
                id:        'chat-nearby',
                label:     `👥 Chat กลุ่ม (${nearbyCount + 1})`,
                bgColor:   '#7b5bff',
                textColor: '#ffffff',
                toolTip:   `สร้าง group chat กับ ${nearbyCount} คนใกล้ๆ`,
                callback:  () => chatWithNearby(),
            });
            proximityChatBtn = true;
        }
    } catch(e){}
}

// ── CONTROLS LOCK (refcount) ─────────────────────────────
// Multiple independent reasons may want to suppress player keyboard controls
// at the same time (sitting, typing in chat, typing in invite modal, …).
// A naive disable/restore pair for each one races badly — e.g. standing up
// while still typing would restore controls mid-sentence and move the wok.
//
// Instead: every caller holds a named "reason". Controls are disabled while
// ANY reason is held, restored only when ALL are released.
const _disableReasons         = new Set();
let   _typingLockSafetyTimer  = null;
function disableControlsFor(reason) {
    const wasEmpty = _disableReasons.size === 0;
    _disableReasons.add(reason);
    if (wasEmpty) { try { WA.controls.disablePlayerControls(); } catch(e){} }
}
function restoreControlsFor(reason) {
    if (!_disableReasons.has(reason)) return;
    _disableReasons.delete(reason);
    if (_disableReasons.size === 0) { try { WA.controls.restorePlayerControls(); } catch(e){} }
}
function setTypingLock(focused) {
    if (focused) {
        disableControlsFor('typing');
        // Safety net: force-release after 2 min in case the iframe dies without blur.
        if (_typingLockSafetyTimer) clearTimeout(_typingLockSafetyTimer);
        _typingLockSafetyTimer = setTimeout(() => setTypingLock(false), 120_000);
    } else {
        restoreControlsFor('typing');
        if (_typingLockSafetyTimer) { clearTimeout(_typingLockSafetyTimer); _typingLockSafetyTimer = null; }
    }
}

// Event handlers for chat / nameplates iframes — subscribed inside WA.onInit().
// See the INIT block below for the actual subscription calls.
async function _handleChatEvent(d) {
    if (!d) return;
    try {
        switch (d.type) {
            case 'ready':
                chatReady = true;
                pushStateToChat();
                break;
            case 'close':
                setTypingLock(false);
                await closeChatUI();
                break;
            case 'typingFocus':
                setTypingLock(!!d.focused);
                break;
            case 'selectRoom': {
                currentChatRoomId = d.roomId;
                if (d.roomId) {
                    const room = chatRooms.get(d.roomId);
                    if (room) { room.unread = 0; recomputeChatUnread(); }
                }
                pushStateToChat();
                break;
            }
            case 'sendMessage':   await sendChatMessage(d.roomId, d.text); break;
            case 'openDm':        await createDirectRoom(d.userId, d.userName); break;
            case 'callUser':      await initiateCallById(d.userId); break;
            case 'walkTo':        await walkToPlayer(d.userId); break;
            case 'resize':        await resizeChatUI(d.size); break;
            case 'createGroup':   await createGroupRoom(d.memberIds); break;
            case 'inviteToRoom':  await inviteToRoom(d.roomId, d.memberIds); break;
        }
    } catch(e) { console.warn('[chat] msg handler error', e); }
}

function _handleNameplatesEvent(d) {
    if (!d) return;
    if (d.type === 'ready') {
        _nameplatesReady = true;
        if (_pendingNameplates) { _sendToNameplates({ type: 'bookings', desks: _pendingNameplates }); _pendingNameplates = null; }
        if (_pendingCamera)     { _sendToNameplates({ type: 'camera',   cam:   _pendingCamera });     _pendingCamera     = null; }
    }
}

// ── INIT ──────────────────────────────────────────────────
WA.onInit().then(async () => {
    try { myPlayerName = WA.player.name || ''; } catch(e) {}
    try { myId         = WA.player.uuid || WA.player.id || ''; } catch(e) {}
    let _myPlayerId = null;
    try { _myPlayerId = WA.player.playerId; } catch(e){}

    // ─── Cross-iframe event subscriptions ────────────────────
    // Chat + Nameplates iframes use WA.event to reach us. WA broadcasts to ALL
    // users in the room; we filter by senderId so we only react to events
    // originating from our own iframes (same playerId).
    try {
        WA.event.on('mimo-chat').subscribe((ev) => {
            // Lenient filter: drop only when both IDs are known AND differ.
            // Strict equality blocked all events when _myPlayerId was undefined
            // (race with WA.player.playerId not being populated yet) — meaning
            // the in-dialog X close button silently failed.
            if (_myPlayerId != null && ev.senderId != null && ev.senderId !== _myPlayerId) return;
            _handleChatEvent(ev.data);
        });
        WA.event.on('mimo-np').subscribe((ev) => {
            if (_myPlayerId != null && ev.senderId != null && ev.senderId !== _myPlayerId) return;
            _handleNameplatesEvent(ev.data);
        });
    } catch(e) { console.warn('[init] event subscribe failed', e); }

    // Restore persisted booking
    try {
        const saved    = WA.player.state.bookedDesk;
        const savedPos = WA.player.state.bookedDeskPos;
        if (saved) {
            myBookedDesk   = saved;
            myDeskPosition = savedPos || null;
            WA.chat.sendChatMessage(`📋 โต๊ะของคุณ: ${getDeskLabel(saved)}`, 'ระบบ');
            showGoHomeButton();
        }
    } catch(e) {}

    // Proximity chat is ENABLED by default so camera/mic work out of the box.
    // It is only disabled while the player is sitting (to prevent camera auto-open on stand-up).
    // Users can opt-out entirely via the menu if they find it annoying.

    // Persistent menu commands
    WA.ui.registerMenuCommand('🏠 ไปที่โต๊ะของฉัน',    { callback: () => goToMyDesk() });
    WA.ui.registerMenuCommand('📋 ดูสถานะโต๊ะทั้งหมด', { callback: () => showDeskDirectory() });
    updateProximityMenu();   // "📹 เปิด Proximity Chat" toggle

    // Restore last saved custom status (persists across sessions)
    try {
        const saved = WA.player.state.customStatus;
        if (saved && saved.key) myCustomStatus = saved;
    } catch(e) {}
    updateStatusMenu();

    // Track other players for desk nameplates AND call/wave system
    // configureTracking() MUST be called before any WA.players.* API
    try {
        await WA.players.configureTracking({ players: true, movement: false });
        for (const p of WA.players.list()) trackPlayer(p);
        updateCallMenu();
        WA.players.onPlayerEnters.subscribe(p => {
            trackPlayer(p);
            updateCallMenu();
            pushStateToChat();   // refresh Online tab in chat UI
        });
        WA.players.onPlayerLeaves.subscribe(p => {
            const puuid = pid(p);
            // Desk owner cleanup
            for (const [d, o] of deskOwners.entries())
                if (o.playerId === puuid) { deskOwners.delete(d); break; }
            refreshAllBookingHighlights();     // the desk they freed is no longer red
            // Call-menu cleanup (diff-based; player removed below, then rerender)
            if (callMenuCmds.has(puuid)) {
                try { callMenuCmds.get(puuid).remove(); } catch(e){}
                callMenuCmds.delete(puuid);
                _callMenuLabels.delete(puuid);
            }
            // Chat: drop them from all rooms' member sets so the chat UI hides them
            for (const r of chatRooms.values()) r.members.delete(puuid);
            pushStateToChat();
            updateCallMenu();
        });
        // Initial paint once we've discovered existing bookings
        refreshAllBookingHighlights();
    } catch(e) { console.warn('[desk] player tracking failed:', e); }

    // Chat action-bar button — always visible
    updateChatActionBarBtn();

    // Desk nameplates overlay — opened LAZILY by refreshAllBookingHighlights()
    // the first time we know of any booked desk. Reduces cold-start overhead
    // (iframe creation + iframe_api.js fetch) when the office is empty.

    // ─── EVENT-DRIVEN chair highlight (was 400ms poll) ───────
    // WA emits onPlayerMove whenever the player actually moves (throttled to 200ms
    // by WA while moving, nothing when idle). No more constant polling on an idle
    // woka — the main CPU win for people sitting still most of the day.
    let _lastMovePos = { x: -9999, y: -9999 };
    function checkNearestDesk(x, y) {
        if (isSitting) return;
        // Micro-optimization: if we moved < 8px (quarter-tile) since last check,
        // the nearest desk can't have changed — skip the scan.
        if (Math.abs(x - _lastMovePos.x) < 8 && Math.abs(y - _lastMovePos.y) < 8) return;
        _lastMovePos = { x, y };
        const desk = findNearestDesk(x, y);
        if (desk !== nearestDesk) {
            if (nearestDesk) onLeaveDesk(nearestDesk);
            if (desk)        onApproachDesk(desk);
            nearestDesk = desk;
        }
    }
    try {
        WA.player.onPlayerMove((ev) => { checkNearestDesk(ev.x, ev.y); });
    } catch(e) { console.warn('[desk] onPlayerMove unavailable, falling back to poll', e); }
    // One-shot initial check (so first load without any movement still highlights)
    WA.player.getPosition().then(p => checkNearestDesk(p.x, p.y)).catch(()=>{});

    // ─── SLOW polling (proximity-chat button, others' positions) ───
    // We can't get movement events for OTHER players (we use movement:false in
    // configureTracking for bandwidth), so we still poll their position — but
    // sparingly. Adaptive cadence: 3s when sitting (user unlikely to move),
    // 2s when standing. Skipped entirely when alone.
    async function proximityChatTick() {
        let playerCount = 0;
        try { playerCount = WA.players.list().length; } catch(e){}
        if (playerCount <= 1) {
            updateProximityChatBtn(0);
            return;
        }
        try {
            const pos = await WA.player.getPosition();
            let nearby = 0;
            for (const p of WA.players.list()) {
                if (pid(p) === myId || !p.position) continue;
                const dx = p.position.x - pos.x;
                const dy = p.position.y - pos.y;
                // Early-exit: if outside bounding box, skip expensive hypot
                if (Math.abs(dx) > PROXIMITY_CHAT_RADIUS || Math.abs(dy) > PROXIMITY_CHAT_RADIUS) continue;
                if (dx*dx + dy*dy <= PROXIMITY_CHAT_RADIUS * PROXIMITY_CHAT_RADIUS) nearby++;
            }
            updateProximityChatBtn(nearby);
        } catch(e) {}
    }

    // Adaptive scheduler — reschedules itself at a cadence that depends on state.
    (function scheduleProximityTick() {
        const delay = isSitting ? 3_000 : 2_000;
        setTimeout(async () => {
            await proximityChatTick();
            scheduleProximityTick();
        }, delay);
    })();
});
