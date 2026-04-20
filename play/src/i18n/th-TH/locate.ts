import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const locate: DeepPartial<Translation["locate"]> = {
    userSearching: "กำลังค้นหาผู้ใช้...",
    progressMessages: {
        scanning: "🔍 กำลังสแกนแผนที่...",
        lookingAround: "👀 กำลังมองรอบๆ...",
        checkingCorners: "🚶 กำลังตรวจสอบทุกมุม...",
        stillSearching: "🔎 ยังคงค้นหา...",
        maybeHiding: "💭 บางทีพวกเขาซ่อนอยู่?",
        searchingWorld: "🌍 กำลังค้นหาทั่วโลก...",
        almostThere: "⏳ เกือบถึงแล้ว...",
        gettingCloser: "🎯 ใกล้เข้ามาแล้ว...",
        justMomentMore: "✨ รอสักครู่...",
        finalCheck: "🎪 การตรวจสอบสุดท้าย...",
    },
    errorMessage: "😢 ดูเหมือนว่าพวกเขาออกจากห้องหรืออยู่ในพื้นที่อื่น!",
};

export default locate;
