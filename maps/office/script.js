/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// ── ALL DESKS ─────────────────────────────────────────────
const desks = [
    // Product area (3×3 cluster)
    { name: 'desk_product',   cx: 112, cy: 112, label: '📦 Product' },
    { name: 'desk_product_2', cx:  80, cy: 112, label: '📦 Product' },
    { name: 'desk_product_3', cx: 144, cy: 112, label: '📦 Product' },
    { name: 'desk_product_4', cx: 176, cy: 112, label: '📦 Product' },
    { name: 'desk_product_5', cx:  48, cy: 112, label: '📦 Product' },
    { name: 'desk_product_6', cx:  80, cy:  80, label: '📦 Product' },
    { name: 'desk_product_7', cx: 112, cy:  80, label: '📦 Product' },
    { name: 'desk_product_8', cx: 144, cy:  80, label: '📦 Product' },
    { name: 'desk_product_9', cx: 176, cy:  80, label: '📦 Product' },
    // PM corner
    { name: 'desk_pm_corner',   cx: 208, cy: 144, label: '📦 PM' },
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
    // Dev Center upper (6 desks)
    { name: 'desk_center_1', cx: 400, cy: 304, label: '💻 Dev-U 1' },
    { name: 'desk_center_2', cx: 464, cy: 304, label: '💻 Dev-U 2' },
    { name: 'desk_center_3', cx: 528, cy: 304, label: '💻 Dev-U 3' },
    { name: 'desk_center_6', cx: 432, cy: 304, label: '💻 Dev-U 4' },
    { name: 'desk_center_7', cx: 496, cy: 304, label: '💻 Dev-U 5' },
    { name: 'desk_center_8', cx: 560, cy: 304, label: '💻 Dev-U 6' },
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
    { name: 'desk_product_6_B', cx:  80, cy: 720, label: '📦B Product' },
    { name: 'desk_product_7_B', cx: 112, cy: 720, label: '📦B Product' },
    { name: 'desk_product_8_B', cx: 144, cy: 720, label: '📦B Product' },
    { name: 'desk_product_9_B', cx: 176, cy: 720, label: '📦B Product' },
    { name: 'desk_pm_corner_B',   cx: 208, cy: 816, label: '📦B PM' },
    { name: 'desk_pm_corner_2_B', cx: 208, cy: 848, label: '📦B PM' },
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
    { name: 'desk_qa_7_B', cx: 816, cy: 1040, label: '🧪B QA' },
    { name: 'desk_qa_8_B', cx: 912, cy: 1040, label: '🧪B QA' },
    { name: 'desk_center_1_B',  cx: 400, cy:  944, label: '💻B Dev-U 1' },
    { name: 'desk_center_2_B',  cx: 464, cy:  944, label: '💻B Dev-U 2' },
    { name: 'desk_center_3_B',  cx: 528, cy:  944, label: '💻B Dev-U 3' },
    { name: 'desk_center_6_B',  cx: 432, cy:  944, label: '💻B Dev-U 4' },
    { name: 'desk_center_7_B',  cx: 496, cy:  944, label: '💻B Dev-U 5' },
    { name: 'desk_center_8_B',  cx: 560, cy:  944, label: '💻B Dev-U 6' },
    { name: 'desk_center_4_B',  cx: 400, cy: 1072, label: '💻B Dev-L 1' },
    { name: 'desk_center_5_B',  cx: 528, cy: 1072, label: '💻B Dev-L 2' },
    { name: 'desk_center_9_B',  cx: 432, cy: 1072, label: '💻B Dev-L 3' },
    { name: 'desk_center_10_B', cx: 464, cy: 1072, label: '💻B Dev-L 4' },
    { name: 'desk_center_11_B', cx: 496, cy: 1072, label: '💻B Dev-L 5' },
    { name: 'desk_center_12_B', cx: 560, cy: 1072, label: '💻B Dev-L 6' },
    { name: 'desk_sw_1_B', cx: 176, cy: 1136, label: '💻B SW 1' },
    { name: 'desk_sw_2_B', cx: 176, cy: 1200, label: '💻B SW 2' },
    { name: 'desk_south_1_B', cx: 400, cy: 1232, label: '💻B South 1' },
    { name: 'desk_south_2_B', cx: 560, cy: 1232, label: '💻B South 2' },
    { name: 'desk_south_3_B', cx: 400, cy: 1264, label: '💻B South 3' },
    { name: 'desk_south_4_B', cx: 560, cy: 1264, label: '💻B South 4' },
    { name: 'desk_se_1_B', cx: 688, cy: 1200, label: '🏢B SE 1' },
    { name: 'desk_se_2_B', cx: 784, cy: 1200, label: '🏢B SE 2' },
    { name: 'desk_se_3_B', cx: 848, cy: 1232, label: '🏢B SE 3' },
    { name: 'desk_se_4_B', cx: 720, cy: 1200, label: '🏢B SE 4' },
    { name: 'desk_se_5_B', cx: 816, cy: 1200, label: '🏢B SE 5' },
];

// ── CONSTANTS ─────────────────────────────────────────────
const PROXIMITY_RADIUS  = 40;
const TILE_SIZE         = 32;
const HIGHLIGHT_LAYER   = 'chair_highlight';
const TILE_VACANT       = 2956;   // green  border — vacant (no one booked)
const TILE_MINE         = 2957;   // blue   border — my booked desk
const TILE_OTHER        = 2958;   // red    border — someone else's desk

// ── DESK OWNER REGISTRY ───────────────────────────────────
// deskName → { playerName, playerId }
const deskOwners = new Map();

// ── STATE ─────────────────────────────────────────────────
let isSitting      = false;
let currentDesk    = undefined;
let nearestDesk    = null;
let myBookedDesk   = undefined;
let myDeskPosition = null;
let myPlayerName   = '';
let sitActionMsg   = undefined;
let standActionMsg = undefined;
let goHomeActionMsg= undefined;
let bookingBtnActive = false;   // tracks whether booking action-bar button is shown

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

// ── CHAIR TILE HIGHLIGHT ──────────────────────────────────
function highlightTileFor(deskName) {
    if (myBookedDesk === deskName)   return TILE_MINE;
    if (deskOwners.has(deskName))    return TILE_OTHER;
    return TILE_VACANT;
}
function showHighlight(deskName) {
    try {
        const d = getDeskData(deskName);
        if (!d) return;
        WA.room.setTiles([{
            x:     Math.floor(d.cx / TILE_SIZE),
            y:     Math.floor(d.cy / TILE_SIZE),
            tile:  highlightTileFor(deskName),
            layer: HIGHLIGHT_LAYER
        }]);
    } catch(e) {}
}
function clearHighlight(deskName) {
    try {
        const d = getDeskData(deskName);
        if (!d) return;
        WA.room.setTiles([{
            x:     Math.floor(d.cx / TILE_SIZE),
            y:     Math.floor(d.cy / TILE_SIZE),
            tile:  null,
            layer: HIGHLIGHT_LAYER
        }]);
    } catch(e) {}
}

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
function showGoHomeButton() {
    if (goHomeActionMsg) { goHomeActionMsg.remove(); goHomeActionMsg = undefined; }
    if (!myBookedDesk || !myDeskPosition) return;
    goHomeActionMsg = WA.ui.displayActionMessage({
        message: `🏠 SPACE — ไปที่ ${getDeskLabel(myBookedDesk)}`,
        type: 'message',
        callback: () => goToMyDesk()
    });
}
function hideGoHomeButton() {
    if (goHomeActionMsg) { goHomeActionMsg.remove(); goHomeActionMsg = undefined; }
}
async function goToMyDesk() {
    try {
        if (!myDeskPosition) return;
        hideGoHomeButton();
        await WA.player.moveTo(myDeskPosition.x, myDeskPosition.y, 10);
    } catch(e) {}
}

// ── SIT / STAND ───────────────────────────────────────────
async function sitDown(desk) {
    try {
        if (isSitting) return;
        const deskData = getDeskData(desk);

        // Snap to exact chair tile centre (teleport = instant, no walk)
        if (deskData) {
            try { await WA.player.teleport(deskData.cx, deskData.cy); } catch(e) {
                try { await WA.player.moveTo(deskData.cx, deskData.cy, 1000); } catch(e2) {}
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
        WA.controls.disablePlayerControls();
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
        WA.controls.restorePlayerControls();
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
        await WA.player.state.saveVariable('bookedDesk',    deskName,       { public: true,  persist: true });
        await WA.player.state.saveVariable('bookedDeskPos', myDeskPosition, { public: false, persist: true });
        await WA.player.state.saveVariable('playerName',    myPlayerName,   { public: true,  persist: true });
        WA.chat.sendChatMessage(`📌 จองแล้ว: ${getDeskLabel(deskName)}`, 'ระบบ');
        // Refresh highlight to blue (mine) and update booking menu
        if (nearestDesk === deskName) {
            showHighlight(deskName);
            updateBookingMenu(deskName);
        }
    } catch(e) {}
}

async function unbookDesk() {
    try {
        if (!myBookedDesk) return;
        const old = myBookedDesk;
        myBookedDesk   = undefined;
        myDeskPosition = null;
        await WA.player.state.saveVariable('bookedDesk',    null, { public: true,  persist: true });
        await WA.player.state.saveVariable('bookedDeskPos', null, { public: false, persist: true });
        await WA.player.state.saveVariable('playerName',    null, { public: true,  persist: true });
        hideGoHomeButton();
        WA.chat.sendChatMessage(`🔓 ยกเลิกการจอง: ${getDeskLabel(old)}`, 'ระบบ');
        // Refresh highlight and menu
        if (nearestDesk === old) {
            showHighlight(old);
            updateBookingMenu(old);
        }
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

    const ownerName = getDeskOwnerName(desk);
    if (ownerName) {
        // Someone else's booked desk — show owner name; still allow sitting
        sitActionMsg = WA.ui.displayActionMessage({
            message: `🔴 ของ ${ownerName} — SPACE นั่ง`,
            type: 'warning',
            callback: () => sitDown(desk)
        });
    } else {
        // Vacant or my desk — minimal hint
        sitActionMsg = WA.ui.displayActionMessage({
            message: '💺 SPACE — นั่ง',
            type: 'message',
            callback: () => sitDown(desk)
        });
    }
}

function onLeaveDesk(desk) {
    clearHighlight(desk);
    clearBookingMenu();
    if (sitActionMsg) { sitActionMsg.remove(); sitActionMsg = undefined; }
    if (myBookedDesk && myDeskPosition) showGoHomeButton();
}

// ── PLAYER TRACKING ───────────────────────────────────────
function trackPlayer(player) {
    try {
        const booked = player.state['bookedDesk'];
        if (booked) deskOwners.set(booked, { playerName: player.name, playerId: player.id });
        player.state.onVariableChange('bookedDesk').subscribe(value => {
            for (const [d, o] of deskOwners.entries())
                if (o.playerId === player.id) { deskOwners.delete(d); break; }
            if (value) deskOwners.set(value, { playerName: player.name, playerId: player.id });
            // Refresh highlight if this desk is our current nearest
            if (nearestDesk && !isSitting) showHighlight(nearestDesk);
            if (nearestDesk && !isSitting) updateBookingMenu(nearestDesk);
        });
    } catch(e) {}
}

// ── INIT ──────────────────────────────────────────────────
WA.onInit().then(async () => {
    try { myPlayerName = WA.player.name || ''; } catch(e) {}

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

    // Persistent menu commands
    WA.ui.registerMenuCommand('🏠 ไปที่โต๊ะของฉัน',    { callback: () => goToMyDesk() });
    WA.ui.registerMenuCommand('📋 ดูสถานะโต๊ะทั้งหมด', { callback: () => showDeskDirectory() });

    // Track other players for desk nameplates
    // configureTracking() MUST be called before any WA.players.* API
    try {
        await WA.players.configureTracking({ players: true, movement: false });
        for (const p of WA.players.list()) trackPlayer(p);
        WA.players.onPlayerEnters.subscribe(p => trackPlayer(p));
        WA.players.onPlayerLeaves.subscribe(p => {
            for (const [d, o] of deskOwners.entries())
                if (o.playerId === p.id) { deskOwners.delete(d); break; }
            if (nearestDesk && !isSitting) showHighlight(nearestDesk);
        });
    } catch(e) { console.warn('[desk] player tracking failed:', e); }

    // Proximity polling — drives the chair highlight + approach/leave events
    setInterval(async () => {
        if (isSitting) return;
        try {
            const pos  = await WA.player.getPosition();
            const desk = findNearestDesk(pos.x, pos.y);
            if (desk !== nearestDesk) {
                if (nearestDesk) onLeaveDesk(nearestDesk);
                if (desk)        onApproachDesk(desk);
                nearestDesk = desk;
            }
        } catch(e) {}
    }, 200);
});
