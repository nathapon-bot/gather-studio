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
    { name: 'desk_pm_corner', cx: 208, cy: 144, label: '📦 มุม PM' },
    { name: 'desk_pm_corner_2', cx: 208, cy: 176, label: '📦 มุม PM' },
    { name: 'desk_EL_1', cx: 336, cy: 144, label: '🏢 โต๊ะตะวันออก-ซ้าย 1' },
    { name: 'desk_EL_2', cx: 432, cy: 144, label: '🏢 โต๊ะตะวันออก-ซ้าย 2' },
    { name: 'desk_EL_3', cx: 336, cy: 208, label: '🏢 โต๊ะตะวันออก-ซ้าย 3' },
    { name: 'desk_EL_4', cx: 432, cy: 208, label: '🏢 โต๊ะตะวันออก-ซ้าย 4' },
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
    { name: 'desk_sw_1',      cx: 176, cy: 496, label: '💻 โต๊ะ SW 1' },
    { name: 'desk_sw_2',      cx: 176, cy: 560, label: '💻 โต๊ะ SW 2' },
    // desk_sw_corner ไม่มี chair tile ในแผนที่ — ถูก disable ไว้
    // { name: 'desk_sw_corner', cx:  48, cy: 432, label: '💻 มุม SW' },
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
    // ── ชั้น B (offset +640px จากชั้น A ยกเว้น PM corner และ QA ที่ใช้ +672) ──
    // Product area B
    { name: 'desk_product_B',   cx: 112, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_2_B', cx:  80, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_3_B', cx: 144, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_4_B', cx: 176, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_5_B', cx:  48, cy: 752, label: '📦B ทีม Product' },
    { name: 'desk_product_6_B', cx:  80, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_product_7_B', cx: 112, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_product_8_B', cx: 144, cy: 720, label: '📦B ทีม Product' },
    { name: 'desk_product_9_B', cx: 176, cy: 720, label: '📦B ทีม Product' },
    // PM corner B (+672)
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
    // QA zone B (+672)
    { name: 'desk_qa_B',   cx: 816, cy:  976, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_2_B', cx: 912, cy:  976, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_3_B', cx: 816, cy:  944, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_4_B', cx: 912, cy:  944, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_5_B', cx: 816, cy: 1008, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_6_B', cx: 912, cy: 1008, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_7_B', cx: 816, cy: 1040, label: '🧪B QA / ทดสอบ' },
    { name: 'desk_qa_8_B', cx: 912, cy: 1040, label: '🧪B QA / ทดสอบ' },
    // Dev Center upper B (+640)
    { name: 'desk_center_1_B',  cx: 400, cy: 944, label: '💻B Dev Center ซ้าย' },
    { name: 'desk_center_2_B',  cx: 464, cy: 944, label: '💻B Dev Center กลาง' },
    { name: 'desk_center_3_B',  cx: 528, cy: 944, label: '💻B Dev Center ขวา' },
    { name: 'desk_center_6_B',  cx: 432, cy: 944, label: '💻B Dev Center กลาง-ซ้าย' },
    { name: 'desk_center_7_B',  cx: 496, cy: 944, label: '💻B Dev Center กลาง' },
    { name: 'desk_center_8_B',  cx: 560, cy: 944, label: '💻B Dev Center ขวาสุด' },
    // Dev Center lower B (+640)
    { name: 'desk_center_4_B',  cx: 400, cy: 1072, label: '💻B Dev Center ล่าง-ซ้าย' },
    { name: 'desk_center_5_B',  cx: 528, cy: 1072, label: '💻B Dev Center ล่าง-ขวา' },
    { name: 'desk_center_9_B',  cx: 432, cy: 1072, label: '💻B Dev Center ล่าง' },
    { name: 'desk_center_10_B', cx: 464, cy: 1072, label: '💻B Dev Center ล่าง' },
    { name: 'desk_center_11_B', cx: 496, cy: 1072, label: '💻B Dev Center ล่าง' },
    { name: 'desk_center_12_B', cx: 560, cy: 1072, label: '💻B Dev Center ล่าง-ขวาสุด' },
    // SW B (+640)
    { name: 'desk_sw_1_B', cx: 176, cy: 1136, label: '💻B โต๊ะ SW 1' },
    { name: 'desk_sw_2_B', cx: 176, cy: 1200, label: '💻B โต๊ะ SW 2' },
    // South desks B (+640)
    { name: 'desk_south_1_B', cx: 400, cy: 1232, label: '💻B โต๊ะใต้ 1' },
    { name: 'desk_south_2_B', cx: 560, cy: 1232, label: '💻B โต๊ะใต้ 2' },
    { name: 'desk_south_3_B', cx: 400, cy: 1264, label: '💻B โต๊ะใต้ 3' },
    { name: 'desk_south_4_B', cx: 560, cy: 1264, label: '💻B โต๊ะใต้ 4' },
    // SE desks B (+640)
    { name: 'desk_se_1_B', cx: 688, cy: 1200, label: '🏢B โต๊ะ SE คู่ 1' },
    { name: 'desk_se_2_B', cx: 784, cy: 1200, label: '🏢B โต๊ะ SE คู่ 2' },
    { name: 'desk_se_3_B', cx: 848, cy: 1232, label: '🏢B โต๊ะ SE 3' },
    { name: 'desk_se_4_B', cx: 720, cy: 1200, label: '🏢B โต๊ะ SE คู่ 4' },
    { name: 'desk_se_5_B', cx: 816, cy: 1200, label: '🏢B โต๊ะ SE คู่ 5' },
];

const PROXIMITY_RADIUS = 40;

// ── STATE ─────────────────────────────────────────────────
let isSitting = false;
let currentDesk = undefined;
let nearestDesk = null;
let myBookedDesk = undefined;
let myDeskPosition = null;
let sitActionMsg = undefined;
let standActionMsg = undefined;
let bookActionMsg = undefined;
let unbookActionMsg = undefined;
let goHomeActionMsg = undefined;

// ── HELPERS ───────────────────────────────────────────────
function findNearestDesk(px, py) {
    let best = null;
    let bestDist = Infinity;
    for (const d of desks) {
        const dx = px - d.cx;
        const dy = py - d.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < PROXIMITY_RADIUS && dist < bestDist) {
            best = d.name;
            bestDist = dist;
        }
    }
    return best;
}

function getDeskLabel(name) {
    const d = desks.find(d => d.name === name);
    return d ? d.label : name;
}

function clearActions() {
    if (sitActionMsg) { sitActionMsg.remove(); sitActionMsg = undefined; }
    if (bookActionMsg) { bookActionMsg.remove(); bookActionMsg = undefined; }
    if (unbookActionMsg) { unbookActionMsg.remove(); unbookActionMsg = undefined; }
}

// ── ปุ่มกลับโต๊ะ ────────────────────────────────────────
function showGoHomeButton() {
    if (goHomeActionMsg) { goHomeActionMsg.remove(); goHomeActionMsg = undefined; }
    if (!myBookedDesk || !myDeskPosition) return;
    goHomeActionMsg = WA.ui.displayActionMessage({
        message: `🏠 กด SPACE — ไปที่ ${getDeskLabel(myBookedDesk)}`,
        type: "message",
        callback: () => goToMyDesk()
    });
}

function hideGoHomeButton() {
    if (goHomeActionMsg) { goHomeActionMsg.remove(); goHomeActionMsg = undefined; }
}

async function goToMyDesk() {
    try {
        if (!myDeskPosition) {
            WA.chat.sendChatMessage("❌ ยังไม่ได้จองโต๊ะ", "ระบบ");
            return;
        }
        hideGoHomeButton();
        WA.chat.sendChatMessage(`🏠 กำลังไปที่ ${getDeskLabel(myBookedDesk)}...`, "ระบบ");
        await WA.player.moveTo(myDeskPosition.x, myDeskPosition.y, 10);
    } catch(e) {}
}

// ── นั่ง / ลุก ────────────────────────────────────────────
async function sitDown(desk) {
    try {
        if (isSitting) return;
        // Snap player to exact desk center before sitting
        const deskData = desks.find(d => d.name === desk);
        if (deskData) {
            try { await WA.player.moveTo(deskData.cx, deskData.cy, 200); } catch(e) {}
        }
        isSitting = true;
        currentDesk = desk;
        clearActions();
        hideGoHomeButton();
        await WA.player.setOutlineColor(255, 140, 0);
        WA.player.setStatus("BUSY");
        WA.controls.disablePlayerControls();
        try { await WA.player.setSitting(true); } catch(e) {}

        if (myBookedDesk !== desk) {
            if (myBookedDesk) {
                WA.chat.sendChatMessage(`🔄 เปลี่ยนจาก ${getDeskLabel(myBookedDesk)}`, "ระบบ");
            }
            myBookedDesk = desk;
            myDeskPosition = await WA.player.getPosition();
            await WA.player.state.saveVariable('bookedDesk', desk, { public: true, persist: true });
            await WA.player.state.saveVariable('bookedDeskPos', myDeskPosition, { public: false, persist: true });
        }

        WA.chat.sendChatMessage(`💺 นั่งที่ ${getDeskLabel(desk)} — นี่คือโต๊ะของคุณแล้ว!`, "ระบบ");

        standActionMsg = WA.ui.displayActionMessage({
            message: "กด SPACE เพื่อลุกขึ้น",
            type: "message",
            callback: () => standUp()
        });
    } catch(e) {}
}

async function standUp() {
    try {
        if (!isSitting) return;
        isSitting = false;
        currentDesk = undefined;
        nearestDesk = null;
        if (standActionMsg) { standActionMsg.remove(); standActionMsg = undefined; }
        WA.controls.restorePlayerControls();
        try { await WA.player.setSitting(false); } catch(e) {}
        await WA.player.removeOutlineColor();
        WA.player.setStatus("ONLINE");
        WA.chat.sendChatMessage(`🚶 ลุกขึ้นแล้ว โต๊ะ ${getDeskLabel(myBookedDesk)} ยังถูกจองอยู่`, "ระบบ");
        showGoHomeButton();
    } catch(e) {}
}

// ── การจองโต๊ะ ────────────────────────────────────────────
async function unbookDesk() {
    try {
        if (!myBookedDesk) {
            WA.chat.sendChatMessage("❌ ยังไม่ได้จองโต๊ะ", "ระบบ");
            return;
        }
        const old = myBookedDesk;
        myBookedDesk = undefined;
        myDeskPosition = null;
        await WA.player.state.saveVariable('bookedDesk', null, { public: true, persist: true });
        await WA.player.state.saveVariable('bookedDeskPos', null, { public: false, persist: true });
        hideGoHomeButton();
        WA.chat.sendChatMessage(`🔓 ยกเลิกการจอง: ${getDeskLabel(old)} ตอนนี้คุณไม่มีโต๊ะแล้ว`, "ระบบ");
        if (nearestDesk) showDeskActions(nearestDesk);
    } catch(e) {}
}

// ── แสดงปุ่มใกล้โต๊ะ ─────────────────────────────────────
function showDeskActions(desk) {
    clearActions();
    if (isSitting) return;
    const label = getDeskLabel(desk);
    const isMyDesk = myBookedDesk === desk;

    if (isMyDesk) {
        sitActionMsg = WA.ui.displayActionMessage({
            message: `กด SPACE — นั่งที่โต๊ะของคุณ`,
            type: "message",
            callback: () => sitDown(desk)
        });
        unbookActionMsg = WA.ui.displayActionMessage({
            message: `🔓 กด SPACE — ยกเลิกการจองโต๊ะ`,
            type: "warning",
            callback: () => unbookDesk()
        });
    } else {
        sitActionMsg = WA.ui.displayActionMessage({
            message: `กด SPACE — นั่ง & จอง ${label}`,
            type: "message",
            callback: () => sitDown(desk)
        });
    }
}

// ── เข้า / ออก ───────────────────────────────────────────
function onApproachDesk(desk) {
    if (isSitting) return;
    const label = getDeskLabel(desk);
    const isMyDesk = myBookedDesk === desk;
    if (isMyDesk) {
        WA.chat.sendChatMessage(`📍 ${label} ✅ โต๊ะของคุณ`, "ระบบ");
    } else {
        WA.chat.sendChatMessage(`📍 ${label} 🟢 ว่าง`, "ระบบ");
    }
    hideGoHomeButton();
    showDeskActions(desk);
}

function onLeaveDesk() {
    clearActions();
    if (myBookedDesk && myDeskPosition) showGoHomeButton();
}

// ── เริ่มต้น ───────────────────────────────────────────────
WA.onInit().then(async () => {
    WA.chat.sendChatMessage("🏢 เดินไปที่โต๊ะ — นั่งเพื่อจองเป็นของคุณ!", "ระบบ");

    try {
        const saved = WA.player.state.bookedDesk;
        const savedPos = WA.player.state.bookedDeskPos;
        if (saved) {
            myBookedDesk = saved;
            if (savedPos) myDeskPosition = savedPos;
            WA.chat.sendChatMessage(`📋 โต๊ะของคุณ: ${getDeskLabel(saved)}`, "ระบบ");
            showGoHomeButton();
        }
    } catch(e) {}

    WA.ui.registerMenuCommand("🏠 ไปที่โต๊ะของฉัน", { callback: () => goToMyDesk() });
    WA.ui.registerMenuCommand("🔓 ยกเลิกการจองโต๊ะ", { callback: () => unbookDesk() });

    setInterval(async () => {
        if (isSitting) return;
        try {
            const pos = await WA.player.getPosition();
            const desk = findNearestDesk(pos.x, pos.y);
            if (desk !== nearestDesk) {
                if (nearestDesk) onLeaveDesk();
                if (desk) onApproachDesk(desk);
                nearestDesk = desk;
            }
        } catch(e) {}
    }, 200);
});
