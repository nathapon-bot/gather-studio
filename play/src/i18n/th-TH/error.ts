import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const error: DeepPartial<Translation["error"]> = {
    accessLink: {
        title: "ลิงก์เข้าถึงไม่ถูกต้อง",
        subTitle: "ไม่พบแผนที่ กรุณาตรวจสอบลิงก์เข้าถึงของคุณ",
        details: "หากต้องการข้อมูลเพิ่มเติม คุณสามารถติดต่อผู้ดูแลระบบหรือติดต่อเราที่: hello@workadventu.re",
    },
    connectionRejected: {
        title: "การเชื่อมต่อถูกปฏิเสธ",
        subTitle: "คุณไม่สามารถเข้าร่วมโลกนี้ได้ ลองอีกครั้งในภายหลัง {error}",
        details: "หากต้องการข้อมูลเพิ่มเติม คุณสามารถติดต่อผู้ดูแลระบบหรือติดต่อเราที่: hello@workadventu.re",
    },
    connectionRetry: {
        unableConnect: "สูญเสียการเชื่อมต่อกับเซิร์ฟเวอร์ คุณจะไม่สามารถพูดคุยกับผู้อื่นได้",
    },
    errorDialog: {
        title: "ข้อผิดพลาด 😱",
        hasReportIssuesUrl: "หากต้องการข้อมูลเพิ่มเติม คุณสามารถติดต่อผู้ดูแลระบบหรือรายงานปัญหาที่:",
        noReportIssuesUrl: "หากต้องการข้อมูลเพิ่มเติม คุณสามารถติดต่อผู้ดูแลระบบของโลก",
        messageFAQ: "คุณยังสามารถตรวจสอบ:",
        reload: "โหลดใหม่",
        close: "ปิด",
    },
};

export default error;
