import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const recording: DeepPartial<Translation["recording"]> = {
    refresh: "รีเฟรช",
    title: "รายการบันทึกของคุณ",
    noRecordings: "ไม่พบการบันทึก",
    errorFetchingRecordings: "เกิดข้อผิดพลาดขณะดึงข้อมูลการบันทึก",
    expireIn: "หมดอายุใน {days} วัน{s}",
    expiresOn: "หมดอายุเมื่อ {date}",
    download: "ดาวน์โหลด",
    close: "ปิด",
    recordingList: "การบันทึก",
    viewList: "มุมมองรายการ",
    viewCards: "มุมมองการ์ด",
    back: "กลับ",
    actions: "การดำเนินการ",
    contextMenu: {
        openInNewTab: "เปิดในแท็บใหม่",
        delete: "ลบ",
    },
    notification: {
        deleteNotification: "ลบการบันทึกสำเร็จ",
        deleteFailedNotification: "ไม่สามารถลบการบันทึกได้",
        recordingStarted: "{name} เริ่มการบันทึกแล้ว",
        downloadFailedNotification: "ไม่สามารถดาวน์โหลดการบันทึกได้",
        recordingComplete: "การบันทึกเสร็จสมบูรณ์",
        recordingIsInProgress: "การบันทึกกำลังดำเนินอยู่",
        recordingSaved: "บันทึกของคุณถูกบันทึกสำเร็จ",
        howToAccess: "วิธีเข้าถึงการบันทึกของคุณ:",
        viewRecordings: "ดูการบันทึก",
    },
    actionbar: {
        title: {
            start: "เริ่มการบันทึก",
            stop: "หยุดการบันทึก",
            inProgress: "การบันทึกกำลังดำเนินอยู่",
        },
        desc: {
            needLogin: "คุณต้องเข้าสู่ระบบเพื่อบันทึก",
            needPremium: "คุณต้องเป็นสมาชิกพรีเมียมเพื่อบันทึก",
            advert: "ผู้เข้าร่วมทั้งหมดจะได้รับแจ้งว่าคุณกำลังเริ่มการบันทึก",
            yourRecordInProgress: "กำลังบันทึก คลิกเพื่อหยุด",
            inProgress: "การบันทึกกำลังดำเนินอยู่",
            notEnabled: "การบันทึกถูกปิดใช้งานสำหรับโลกนี้",
        },
        spacePicker: {
            megaphone: "บันทึกเมกะโฟน",
            discussion: "บันทึกการสนทนา",
        },
    },
};

export default recording;
