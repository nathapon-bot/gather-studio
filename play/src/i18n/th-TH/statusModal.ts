import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const statusModal: DeepPartial<Translation["statusModal"]> = {
    accept: "ยอมรับ",
    close: "ปิด",
    confirm: "ยืนยัน",
    goBackToOnlineStatusLabel: "คุณต้องการกลับมาออนไลน์ไหม?",
    allowNotification: "อนุญาตการแจ้งเตือนไหม?",
    allowNotificationExplanation: "รับการแจ้งเตือนบนเดสก์ท็อปเมื่อมีคนต้องการพูดคุยกับคุณ",
    soundBlockedBackInAMoment: "เบราว์เซอร์ของคุณบล็อกเสียงอยู่ ดังนั้นคุณอยู่ในโหมด 'กลับมาในไม่ช้า'",
    turnSoundOn: "เปิดเสียง",
};

export default statusModal;
