/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// ── ALL DESKS ─────────────────────────────────────────────
const desks = [
    // ── Product area (3×3 cluster, tile centres) ──
    { name: 'desk_product',   cx: 112, cy: 112, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_2', cx:  80, cy: 112, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_3', cx: 144, cy: 112, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_4', cx: 176, cy: 112, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_5', cx:  48, cy: 112, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_6', cx:  80, cy:  80, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_7', cx: 112, cy:  80, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_8', cx: 144, cy:  80, label: '📦 โต๊ะทีม Product' },
    { name: 'desk_product_9', cx: 176, cy:  80, label: '📦 โต๊ะทีม Product' },
    // ── PM corner ──
    { name: 'desk_pm_corner',   cx: 208, cy: 144, label: '📦 มุม PM' },
    { name: 'desk_pm_corner_2', cx: 208, cy: 176, label: '📦 มุม PM' },
    // ── East-Left ──
    { name: 'desk_EL_1', cx: 336, cy: 144, label: '🏢 โต๊ะตะวันออก-ซ้าย 1' },
    { name: 'desk_EL_2', cx: 432, cy: 144, label: '🏢 โต๊ะตะวันออก-ซ้าย 2' },
    { name: 'desk_EL_3', cx: 336, cy: 208, label: '🏢 โต๊ะตะวันออก-ซ้าย 3' },
    { name: 'desk_EL_4', cx: 432, cy: 208, label: '🏢 โต๊ะตะวันออก-ซ้าย 4' },
    // ── East-Right ──
    { name: 'desk_ER_1', cx: 528, cy: 144, label: '🏢 โต๊ะตะวันออก-ขวา 1' },
    { name: 'desk_ER_2', cx: 624, cy: 144, label: '🏢 โต๊ะตะวันออก-ขวา 2' },
    { name: 'desk_ER_3', cx: 528, cy: 208, label: '🏢 โต๊ะตะวันออก-ขวา 3' },
    { name: 'desk_ER_4', cx: 624, cy: 208, label: '🏢 โต๊ะตะวันออก-ขวา 4' },
    // ── QA zone (2 columns × 4 rows) ──
    { name: 'desk_qa',   cx: 816, cy: 304, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_2', cx: 912, cy: 304, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_3', cx: 816, cy: 272, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_4', cx: 912, cy: 272, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_5', cx: 816, cy: 336, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_6', cx: 912, cy: 336, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_7', cx: 816, cy: 368, label: '🧪 โซน QA / ทดสอบ' },
    { name: 'desk_qa_8', cx: 912, cy: 368, label: '🧪 โซน QA / ทดสอบ' },
    // ── Dev Center upper row (6 desks) ──
    { name: 'desk_center_1', cx: 400, cy: 304, label: '💻 Dev Center — ซ้าย' },
    { name: 'desk_center_2', cx: 464, cy: 304, label: '💻 Dev Center — กลาง' },
    { name: 'desk_center_3', cx: 528, cy: 304, label: '💻 Dev Center — ขวา' },
    { name: 'desk_center_6', cx: 432, cy: 304, label: '💻 Dev Center — กลาง-ซ้าย' },
    { name: 'desk_center_7', cx: 496, cy: 304, label: '💻 Dev Center — กลาง' },
    { name: 'desk_center_8', cx: 560, cy: 304, label: '💻 Dev Center — ขวาสุด' },
    // ── Dev Center lower row (6 desks) ──
    { name: 'desk_center_4',  cx: 400, cy: 432, label: '💻 Dev Center — ล่าง-ซ้าย' },
    { name: 'desk_center_5',  cx: 528, cy: 432, label: '💻 Dev Center — ล่าง-ขวา' },
    { name: 'desk_center_9',  cx: 432, cy: 432, label: '💻 Dev Center — ล่าง' },
    { name: 'desk_center_10', cx: 464, cy: 432, label: '💻 Dev Center — ล่าง' },
    { name: 'desk_center_11', cx: 496, cy: 432, label: '💻 Dev Center — ล่าง' },
    { name: 'desk_center_12', cx: 560, cy: 432, label: '💻 Dev Center — ล่าง-ขวาสุด' },
    // ── SW ──
    { name: 'desk_sw_1', cx: 176, cy: 496, label: '💻 โต๊ะ SW 1' },
    { name: 'desk_sw_2', cx: 176, cy: 560, label: '💻 โต๊ะ SW 2' },
    // ── South desks (2 columns × 2 rows) ──
    { name: 'desk_south_1', cx: 400, cy: 592, label: '💻 โต๊ะใต้ 1' },
    { name: 'desk_south_2', cx: 560, cy: 592, label: '💻 โต๊ะใต้ 2' },
    { name: 'desk_south_3', cx: 400, cy: 624, label: '💻 โต๊ะใต้ 3' },
    { name: 'desk_south_4', cx: 560, cy: 624, label: '💻 โต๊ะใต้ 4' },
    // ── SE desks ──
    { name: 'desk_se_1', cx: 688, cy: 560, label: '🏢 โต๊ะ SE คู่ 1' },
    { name: 'desk_se_2', cx: 784, cy: 560, label: '🏢 โต๊ะ SE คู่ 2' },
    { name: 'desk_se_3', cx: 848, cy: 592, label: '🏢 โต๊ะ SE 3' },
    { name: 'desk_se_4', cx: 720, cy: 560, label: '🏢 โต๊ะ SE คู่ 4' },
    { name: 'desk_se_5', cx: 816, cy: 560, label: '🏢 โต๊ะ SE คู่ 5' },

    // ── ชั้น B (offset +640px ยกเว้น PM corner และ QA ที่ใช้ +672) ──
    { name: 'desk_product_B',   cx: 112, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_2_B', cx:  80, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_3_B', cx: 144, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_4_B', cx: 176, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_5_B', cx:  48, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_6_B', cx:  80, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_product_7_B', cx: 112, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_product_8_B', cx: 144, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_product_9_B', cx: 176, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_pm_corner_B',   cx: 208, cy: 816, label: '📦B มุม PM' },
    { name: 'desk_pm_corner_2_B', cx: 208, cy: 848, label: '📦B มุม PM' },
    { name: 'desk_EL_1_B', cx: 336, cy: 784, label: '🏢B ตะวันออก-ซ้าย 1' },
    { name: 'desk_EL_2_B', cx: 432, cy: 784, label: '🏢B ตะวันออก-ซ้าย 2' },
    { name: 'desk_EL_3_B', cx: 336, cy: 848, label: '🏢B ตะวันออก-ซ้าย 3' },
    { name: 'desk_EL_4_B', cx: 432, cy: 848, label: '🏢B ตะวันออก-ซ้าย 4' },
    { name: 'desk_ER_1_B', cx: 528, cy: 784, label: '🏢B ตะวันออก-ขวา 1' },
    { name: 'desk_ER_2_B', cx: 624, cy: 784, label: '🏢B ตะวันออก-ขวา 2' },
    { name: 'desk_ER_3_B', cx: 528, cy: 848, label: '🏢B ตะวันออก-ขวา 3' },
    { name: 'desk_ER_4_B', cx: 624, cy: 848, label: '🏢B ตะวันออก-ขวา 4' },
    { name: 'desk_qa_B',   cx: 816, cy:  976, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_2_B', cx: 912, cy:  976, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_3_B', cx: 816, cy:  944, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_4_B', cx: 912, cy:  944, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_5_B', cx: 816, cy: 1008, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_6_B', cx: 912, cy: 1008, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_7_B', cx: 816, cy: 1040, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_8_B', cx: 912, cy: 1040, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_center_1_B',  cx: 400, cy:  944, label: '💻B Dev Center ซ้าย' },
    { name: 'desk_center_2_B',  cx: 464, cy:  944, label: '💻B Dev Center กลาง' },
    { name: 'desk_center_3_B',  cx: 528, cy:  944, label: '💻B Dev Center ขวา' },
    { name: 'desk_center_6_B',  cx: 432, cy:  944, label: '💻B Dev Center กลาง-ซ้าย' },
    { name: 'desk_center_7_B',  cx: 496, cy:  944, label: '💻B Dev Center กลาง' },
    { name: 'desk_center_8_B',  cx: 560, cy:  944, label: '💻B Dev Center ขวาสุด' },
    { name: 'desk_center_4_B',  cx: 400, cy: 1072, label: '💻B Dev Center ล่าง-ซ้าย' },
    { name: 'desk_center_5_B',  cx: 528, cy: 1072, label: '💻B Dev Center ล่าง-ขวา' },
    { name: 'desk_center_9_B',  cx: 432, cy: 1072, label: '💻B Dev Center ล่าง' },
    { name: 'desk_center_10_B', cx: 464, cy: 1072, label: '💻B Dev Center ล่าง' },
    { name: 'desk_center_11_B', cx: 496, cy: 1072, label: '💻B Dev Center ล่าง' },
    { name: 'desk_center_12_B', cx: 560, cy: 1072, label: '💻B Dev Center ล่าง-ขวาสุด' },
    { name: 'desk_sw_1_B', cx: 176, cy: 1136, label: '💻B โต๊ะ SW 1' },
    { name: 'desk_sw_2_B', cx: 176, cy: 1200, label: '💻B โต๊ะ SW 2' },
    { name: 'desk_south_1_B', cx: 400, cy: 1232, label: '💻B โต๊ะใต้ 1' },
    { name: 'desk_south_2_B', cx: 560, cy: 1232, label: '💻B โต๊ะใต้ 2' },
    { name: 'desk_south_3_B', cx: 400, cy: 1264, label: '💻B โต๊ะใต้ 3' },
    { name: 'desk_south_4_B', cx: 560, cy: 1264, label: '💻B โต๊ะใต้ 4' },
    { name: 'desk_se_1_B', cx: 688, cy: 1200, label: '🏢B โต๊ะ SE คู่ 1' },
    { name: 'desk_se_2_B', cx: 784, cy: 1200, label: '🏢B โต๊ะ SE คู่ 2' },
    { name: 'desk_se_3_B', cx: 848, cy: 1232, label: '🏢B โต๊ะ SE 3' },
    { name: 'desk_se_4_B', cx: 720, cy: 1200, label: '🏢B โต๊ะ SE คู่ 4' },
    { name: 'desk_se_5_B', cx: 816, cy: 1200, label: '🏢B โต๊ะ SE คู่ 5' },
];

const PROXIMITY_RADIUS = 40;

// ── DESK OWNER REGISTRY (other players) ───────────────────
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
let unbookActionMsg= undefined;
let goHomeActionMsg= undefined;

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

/** Returns the display name of who booked this desk (excluding self), or null if vacant. */
function getDeskOwnerName(deskName) {
    if (deskOwners.has(deskName)) return deskOwners.get(deskName).playerName;
    return null;
}

function clearActions() {
    if (sitActionMsg)    { sitActionMsg.remove();    sitActionMsg    = undefined; }
    if (unbookActionMsg) { unbookActionMsg.remove(); unbookActionMsg = undefined; }
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── ANIMATIONS ────────────────────────────────────────────
/**
 * Sit-down animation:
 *   1. Quick yellow flash (excitement burst)
 *   2. Settle to orange (busy indicator)
 */
async function animateSitDown() {
    try {
        await WA.player.setOutlineColor(255, 230, 0);   // yellow flash
        await delay(130);
        await WA.player.setOutlineColor(255, 130, 0);   // warm orange settle
    } catch(e) {}
}

/**
 * Stand-up animation:
 *   1. Quick green flash (release burst)
 *   2. Fade back to no outline
 */
async function animateStandUp() {
    try {
        await WA.player.setOutlineColor(80, 220, 80);   // green flash
        await delay(200);
        await WA.player.removeOutlineColor();
    } catch(e) {}
}

// ── GO HOME BUTTON ────────────────────────────────────────
function showGoHomeButton() {
    if (goHomeActionMsg) { goHomeActionMsg.remove(); goHomeActionMsg = undefined; }
    if (!myBookedDesk || !myDeskPosition) return;
    goHomeActionMsg = WA.ui.displayActionMessage({
        message: `🏠 กด SPACE — ไปที่ ${getDeskLabel(myBookedDesk)}`,
        type: 'message',
        callback: () => goToMyDesk()
    });
}
function hideGoHomeButton() {
    if (goHomeActionMsg) { goHomeActionMsg.remove(); goHomeActionMsg = undefined; }
}

async function goToMyDesk() {
    try {
        if (!myDeskPosition) { WA.chat.sendChatMessage('❌ ยังไม่ได้จองโต๊ะ', 'ระบบ'); return; }
        hideGoHomeButton();
        WA.chat.sendChatMessage(`🏠 กำลังไปที่ ${getDeskLabel(myBookedDesk)}…`, 'ระบบ');
        await WA.player.moveTo(myDeskPosition.x, myDeskPosition.y, 10);
    } catch(e) {}
}

// ── SIT / STAND ───────────────────────────────────────────
async function sitDown(desk) {
    try {
        if (isSitting) return;
        const deskData = getDeskData(desk);

        // FIX 1 ── Snap player exactly onto chair tile before sitting
        if (deskData) {
            try {
                await WA.player.moveTo(deskData.cx, deskData.cy, 1000); // fast snap
                await delay(80); // let physics settle on the tile
            } catch(e) {}
        }

        isSitting    = true;
        currentDesk  = desk;
        clearActions();
        hideGoHomeButton();

        // FIX 3 ── Sit-down animation before disabling controls
        await animateSitDown();

        WA.player.setStatus('BUSY');
        WA.controls.disablePlayerControls();
        try { await WA.player.setSitting(true); } catch(e) {}

        // Book desk (first sit = auto-book)
        if (myBookedDesk !== desk) {
            if (myBookedDesk) WA.chat.sendChatMessage(`🔄 เปลี่ยนจาก ${getDeskLabel(myBookedDesk)}`, 'ระบบ');
            myBookedDesk   = desk;
            // Use desk tile centre as the canonical "home" position (precise, no getPosition drift)
            myDeskPosition = deskData ? { x: deskData.cx, y: deskData.cy } : await WA.player.getPosition();
            await WA.player.state.saveVariable('bookedDesk',    desk,           { public: true,  persist: true });
            await WA.player.state.saveVariable('bookedDeskPos', myDeskPosition, { public: false, persist: true });
            await WA.player.state.saveVariable('playerName',    myPlayerName,   { public: true,  persist: true });
        }

        WA.chat.sendChatMessage(`💺 นั่งที่ ${getDeskLabel(desk)} — โต๊ะของคุณแล้ว!`, 'ระบบ');

        standActionMsg = WA.ui.displayActionMessage({
            message: '🚶 กด SPACE เพื่อลุกขึ้น',
            type: 'message',
            callback: () => standUp()
        });
    } catch(e) {}
}

async function standUp() {
    try {
        if (!isSitting) return;
        isSitting   = false;
        currentDesk = undefined;
        nearestDesk = null;
        if (standActionMsg) { standActionMsg.remove(); standActionMsg = undefined; }
        WA.controls.restorePlayerControls();
        try { await WA.player.setSitting(false); } catch(e) {}

        // FIX 3 ── Stand-up animation
        await animateStandUp();

        WA.player.setStatus('ONLINE');
        WA.chat.sendChatMessage(`🚶 ลุกขึ้นแล้ว — โต๊ะ ${getDeskLabel(myBookedDesk)} ยังจองอยู่`, 'ระบบ');
        showGoHomeButton();
    } catch(e) {}
}

// ── UNBOOK ────────────────────────────────────────────────
async function unbookDesk() {
    try {
        if (!myBookedDesk) { WA.chat.sendChatMessage('❌ ยังไม่ได้จองโต๊ะ', 'ระบบ'); return; }
        const old = myBookedDesk;
        myBookedDesk   = undefined;
        myDeskPosition = null;
        await WA.player.state.saveVariable('bookedDesk',    null, { public: true,  persist: true });
        await WA.player.state.saveVariable('bookedDeskPos', null, { public: false, persist: true });
        await WA.player.state.saveVariable('playerName',    null, { public: true,  persist: true });
        hideGoHomeButton();
        WA.chat.sendChatMessage(`🔓 ยกเลิกการจอง: ${getDeskLabel(old)}`, 'ระบบ');
        if (nearestDesk) showDeskActions(nearestDesk);
    } catch(e) {}
}

// ── DESK ACTION DISPLAY ───────────────────────────────────
function showDeskActions(desk) {
    clearActions();
    if (isSitting) return;

    const label     = getDeskLabel(desk);
    const isMyDesk  = (myBookedDesk === desk);
    const ownerName = getDeskOwnerName(desk); // other player's name (null if vacant)

    if (isMyDesk) {
        // Own booked desk ─ sit + unbook options
        sitActionMsg = WA.ui.displayActionMessage({
            message: `💺 กด SPACE — นั่งที่โต๊ะของคุณ`,
            type: 'message',
            callback: () => sitDown(desk)
        });
        unbookActionMsg = WA.ui.displayActionMessage({
            message: `🔓 กด SPACE — ยกเลิกการจอง`,
            type: 'warning',
            callback: () => unbookDesk()
        });
    } else if (ownerName) {
        // Booked by someone else ─ show nameplate, no sit
        sitActionMsg = WA.ui.displayActionMessage({
            message: `🔴 โต๊ะของ ${ownerName} — ถูกจองแล้ว`,
            type: 'warning',
            callback: () => WA.chat.sendChatMessage(`⚠️ ${label} จองโดย ${ownerName} แล้ว`, 'ระบบ')
        });
    } else {
        // Vacant desk
        sitActionMsg = WA.ui.displayActionMessage({
            message: `🟢 กด SPACE — นั่ง & จอง ${label}`,
            type: 'message',
            callback: () => sitDown(desk)
        });
    }
}

// ── APPROACH / LEAVE ──────────────────────────────────────
function onApproachDesk(desk) {
    if (isSitting) return;
    const label     = getDeskLabel(desk);
    const isMyDesk  = (myBookedDesk === desk);
    const ownerName = getDeskOwnerName(desk);

    if (isMyDesk) {
        WA.chat.sendChatMessage(`📍 ${label}\n✅ โต๊ะของคุณ`, 'ระบบ');
    } else if (ownerName) {
        // FIX 2 ── Show nameplate of desk owner
        WA.chat.sendChatMessage(`📍 ${label}\n🔴 จองโดย: ${ownerName}`, 'ระบบ');
    } else {
        WA.chat.sendChatMessage(`📍 ${label} 🟢 ว่าง`, 'ระบบ');
    }

    hideGoHomeButton();
    showDeskActions(desk);
}

function onLeaveDesk() {
    clearActions();
    if (myBookedDesk && myDeskPosition) showGoHomeButton();
}

// ── PLAYER TRACKING (for nameplates) ─────────────────────
/**
 * Start watching a remote player's bookedDesk variable.
 * Called both for existing players and new arrivals.
 */
function trackPlayer(player) {
    try {
        // Seed current state
        const booked = player.state['bookedDesk'];
        if (booked) deskOwners.set(booked, { playerName: player.name, playerId: player.id });

        // Watch future changes
        player.state.onVariableChange('bookedDesk').subscribe(value => {
            // Remove any prior entry for this player
            for (const [d, o] of deskOwners.entries()) {
                if (o.playerId === player.id) { deskOwners.delete(d); break; }
            }
            if (value) deskOwners.set(value, { playerName: player.name, playerId: player.id });

            // Refresh displayed action if the changed desk is the one we're standing at
            if (nearestDesk && !isSitting) showDeskActions(nearestDesk);
        });
    } catch(e) {}
}

// ── DESK DIRECTORY (menu command) ─────────────────────────
function showDeskDirectory() {
    const lines = [];
    // My desk first
    if (myBookedDesk) lines.push(`✅ ${getDeskLabel(myBookedDesk)} — คุณ`);
    // Others
    for (const [deskName, { playerName }] of deskOwners.entries()) {
        lines.push(`🔴 ${getDeskLabel(deskName)} — ${playerName}`);
    }
    if (lines.length === 0) {
        WA.chat.sendChatMessage('📋 ยังไม่มีใครจองโต๊ะ', 'ระบบ');
    } else {
        WA.chat.sendChatMessage('📋 สถานะโต๊ะ:\n' + lines.join('\n'), 'ระบบ');
    }
}

// ── INIT ──────────────────────────────────────────────────
WA.onInit().then(async () => {
    // Cache local player name for nameplate saving
    try { myPlayerName = WA.player.name || ''; } catch(e) {}

    WA.chat.sendChatMessage('🏢 เดินไปที่โต๊ะ — กด SPACE เพื่อนั่งและจองเป็นของคุณ!', 'ระบบ');

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

    // Register menu commands
    WA.ui.registerMenuCommand('🏠 ไปที่โต๊ะของฉัน',    { callback: () => goToMyDesk() });
    WA.ui.registerMenuCommand('🔓 ยกเลิกการจองโต๊ะ',   { callback: () => unbookDesk() });
    WA.ui.registerMenuCommand('📋 ดูสถานะโต๊ะทั้งหมด', { callback: () => showDeskDirectory() });

    // FIX 2 ── Start tracking other players for nameplates
    try {
        for (const player of WA.players.list()) trackPlayer(player);
        WA.players.onPlayerEnters.subscribe(player => trackPlayer(player));
        WA.players.onPlayerLeaves.subscribe(player => {
            for (const [d, o] of deskOwners.entries()) {
                if (o.playerId === player.id) { deskOwners.delete(d); break; }
            }
            if (nearestDesk && !isSitting) showDeskActions(nearestDesk);
        });
    } catch(e) {}

    // Proximity polling loop
    setInterval(async () => {
        if (isSitting) return;
        try {
            const pos  = await WA.player.getPosition();
            const desk = findNearestDesk(pos.x, pos.y);
            if (desk !== nearestDesk) {
                if (nearestDesk) onLeaveDesk();
                if (desk)        onApproachDesk(desk);
                nearestDesk = desk;
            }
        } catch(e) {}
    }, 200);
});
