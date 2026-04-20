import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const notification: DeepPartial<Translation["notification"]> = {
    discussion: "{name} ต้องการพูดคุยกับคุณ",
    message: "{name} ส่งข้อความ",
    chatRoom: "ในห้องแชท",
    askToMuteMicrophone: "ฉันสามารถปิดเสียงไมโครโฟนของคุณได้ไหม?",
    askToMuteCamera: "ฉันสามารถปิดกล้องของคุณได้ไหม?",
    microphoneMuted: "ไมโครโฟนของคุณถูกปิดโดยผู้ดูแล",
    cameraMuted: "กล้องของคุณถูกปิดโดยผู้ดูแล",
    notificationSentToMuteMicrophone: "ส่งการแจ้งเตือนถึง {name} เพื่อปิดไมโครโฟน",
    notificationSentToMuteCamera: "ส่งการแจ้งเตือนถึง {name} เพื่อปิดกล้อง",
    announcement: "ประกาศ",
    open: "เปิด",
    help: {
        title: "ถูกปฏิเสธการเข้าถึงการแจ้งเตือน",
        permissionDenied: "ถูกปฏิเสธสิทธิ์",
        content:
            "ไม่พลาดการสนทนา เปิดใช้งานการแจ้งเตือนเพื่อรับแจ้งเมื่อมีคนต้องการพูดคุยกับคุณ แม้คุณจะไม่ได้อยู่ที่แท็บ WorkAdventure",
        firefoxContent:
            'กรุณาคลิกช่องทำเครื่องหมาย "จดจำการตัดสินใจนี้" หากคุณไม่ต้องการให้ Firefox ถามการอนุญาตซ้ำ',
        refresh: "รีเฟรช",
        continue: "ดำเนินการต่อโดยไม่มีการแจ้งเตือน",
        screen: {
            firefox: "/resources/help-setting-notification-permission/en-US-chrome.png",
            chrome: "/resources/help-setting-notification-permission/en-US-chrome.png",
        },
    },
    addNewTag: "เพิ่มแท็กใหม่: '{tag}'",
    screenSharingError: "ไม่สามารถเริ่มการแชร์หน้าจอได้",
    recordingStarted: "มีผู้เข้าร่วมการสนทนาเริ่มการบันทึก",
    urlCopiedToClipboard: "คัดลอก URL ไปยังคลิปบอร์ดแล้ว",
};

export default notification;
