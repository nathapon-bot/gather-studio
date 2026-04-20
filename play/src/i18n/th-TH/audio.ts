import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const audio: DeepPartial<Translation["audio"]> = {
    volumeCtrl: "เปลี่ยนระดับเสียง",
    manager: {
        reduce: "ลดระดับเสียงเพลงขณะพูด",
        allow: "อนุญาตเสียง",
        error: "ไม่สามารถโหลดเสียงได้",
        notAllowed: "▶️ เสียงไม่ได้รับอนุญาต กด [SPACE] หรือคลิกที่นี่เพื่อเล่น!",
    },
    message: "ข้อความเสียง",
    disable: "ปิดไมโครโฟนของคุณ",
};

export default audio;
