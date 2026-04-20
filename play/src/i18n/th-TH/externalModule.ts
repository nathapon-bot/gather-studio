import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const externalModule: DeepPartial<Translation["externalModule"]> = {
    status: {
        onLine: "สถานะปกติ ✅",
        offLine: "สถานะออฟไลน์ ❌",
        warning: "สถานะเตือน ⚠️",
        sync: "กำลังซิงค์ 🔄",
    },
    teams: {
        openingMeeting: "กำลังเปิดการประชุม Teams...",
        unableJoinMeeting: "ไม่สามารถเข้าร่วมการประชุม Teams ได้!",
        userNotConnected: "คุณยังไม่ได้ซิงค์กับบัญชี Outlook หรือ Google ของคุณ!",
        connectToYourTeams: "เชื่อมต่อกับบัญชี Outlook หรือ Google ของคุณ 🙏",
        temasAppInfo:
            "Teams เป็นแอป Microsoft 365 ที่ช่วยให้ทีมของคุณเชื่อมต่อและจัดระเบียบ คุณสามารถแชท ประชุม โทร และทำงานร่วมกันได้ในที่เดียว 😍",
        buttonSync: "ซิงค์ Teams ของฉัน 🚀",
        buttonConnect: "เชื่อมต่อ Teams ของฉัน 🚀",
    },
    discord: {
        integration: "การรวมระบบ",
        explainText:
            "การเชื่อมต่อบัญชี Discord ของคุณที่นี่ จะช่วยให้คุณรับข้อความโดยตรงในแชท WorkAdventure หลังจากซิงค์เซิร์ฟเวอร์ เราจะสร้างห้องที่มีอยู่ในนั้น คุณเพียงแค่เข้าร่วมในแชท WorkAdventure",
        login: "เชื่อมต่อกับ Discord",
        fetchingServer: "กำลังดึงเซิร์ฟเวอร์ Discord... 👀",
        qrCodeTitle: "สแกน QR โค้ดด้วยแอป Discord เพื่อเข้าสู่ระบบ",
        qrCodeExplainText:
            "สแกน QR โค้ดด้วยแอป Discord เพื่อเข้าสู่ระบบ QR โค้ดมีเวลาจำกัด บางครั้งคุณต้องสร้างใหม่",
        qrCodeRegenerate: "รับ QR โค้ดใหม่",
        tokenInputLabel: "โทเค็น Discord",
        loginToken: "เข้าสู่ระบบด้วยโทเค็น",
        loginTokenExplainText: "คุณต้องใส่โทเค็น Discord ของคุณ เพื่อดำเนินการรวม Discord โปรดดู",
        sendDiscordToken: "ส่ง",
        tokenNeeded: "คุณต้องใส่โทเค็น Discord ของคุณ เพื่อดำเนินการรวม Discord โปรดดู",
        howToGetTokenButton: "วิธีรับโทเค็นเข้าสู่ระบบ Discord ของฉัน",
        loggedIn: "เชื่อมต่อด้วย:",
        saveSync: "บันทึกและซิงค์",
        logout: "ออกจากระบบ",
        back: "กลับ",
        tokenPlaceholder: "โทเค็น Discord ของคุณ",
        loginWithQrCode: "เข้าสู่ระบบด้วย QR โค้ด",
        guilds: "เซิร์ฟเวอร์ Discord",
        guildExplain: "เลือกช่องที่คุณต้องการเพิ่มในอินเทอร์เฟซแชท Workadventure\n",
    },
    outlook: {
        signIn: "เข้าสู่ระบบด้วย Outlook",
        popupScopeToSync: "เชื่อมต่อบัญชี Outlook ของฉัน",
        popupScopeToSyncExplainText:
            "เราต้องเชื่อมต่อกับบัญชี Outlook ของคุณเพื่อซิงค์ปฏิทินและ/หรืองาน ซึ่งจะช่วยให้คุณดูการประชุมและงานใน WorkAdventure",
        popupScopeToSyncCalendar: "ซิงค์ปฏิทินของฉัน",
        popupScopeToSyncTask: "ซิงค์งานของฉัน",
        popupCancel: "ยกเลิก",
        isSyncronized: "ซิงค์กับ Outlook แล้ว",
        popupScopeIsConnectedExplainText:
            "คุณเชื่อมต่ออยู่แล้ว กรุณาคลิกปุ่มเพื่อออกจากระบบและเชื่อมต่อใหม่",
        popupScopeIsConnectedButton: "ออกจากระบบ",
        popupErrorTitle: "⚠️ การซิงค์โมดูล Outlook หรือ Teams ล้มเหลว",
        popupErrorDescription:
            "การซิงค์การเริ่มต้นโมดูล Outlook หรือ Teams ล้มเหลว เพื่อเชื่อมต่อ กรุณาลองเชื่อมต่อใหม่",
        popupErrorContactAdmin: "หากปัญหายังคงอยู่ กรุณาติดต่อผู้ดูแลระบบของคุณ",
        popupErrorShowMore: "แสดงข้อมูลเพิ่มเติม",
        popupErrorMoreInfo1:
            "อาจมีปัญหากับกระบวนการลงชื่อเข้าใช้ กรุณาตรวจสอบว่าผู้ให้บริการ SSO Azure ได้รับการตั้งค่าอย่างถูกต้อง",
        popupErrorMoreInfo2:
            'กรุณาตรวจสอบว่าสโคป "offline_access" เปิดใช้งานสำหรับผู้ให้บริการ SSO Azure สโคปนี้จำเป็นสำหรับการรับโทเค็นรีเฟรช',
    },
    google: {
        signIn: "เข้าสู่ระบบด้วย Google",
        popupScopeToSync: "เชื่อมต่อบัญชี Google ของฉัน",
        popupScopeToSyncExplainText:
            "เราต้องเชื่อมต่อกับบัญชี Google ของคุณเพื่อซิงค์ปฏิทินและ/หรืองาน",
        popupScopeToSyncCalendar: "ซิงค์ปฏิทินของฉัน",
        popupScopeToSyncTask: "ซิงค์งานของฉัน",
        popupCancel: "ยกเลิก",
        isSyncronized: "ซิงค์กับ Google แล้ว",
        popupScopeToSyncMeet: "สร้างการประชุมออนไลน์",
        openingMeet: "กำลังเปิด Google Meet... 🙏",
        unableJoinMeet: "ไม่สามารถเข้าร่วม Google Meet ได้ 😭",
        googleMeetPopupWaiting: {
            title: "Google Meet 🎉",
            subtitle: "กำลังสร้าง Google Space ของคุณ... จะใช้เวลาเพียงไม่กี่วินาที 💪",
            guestError: "คุณยังไม่ได้เชื่อมต่อ จึงไม่สามารถสร้าง Google Meet ได้ 😭",
            guestExplain:
                "กรุณาเข้าสู่ระบบแพลตฟอร์มเพื่อสร้าง Google Meet หรือขอให้เจ้าของสร้างให้คุณ 🚀",
            error: "การตั้งค่า Google Workspace ของคุณไม่อนุญาตให้สร้าง Meet",
            errorExplain: "ไม่ต้องกังวล คุณยังสามารถเข้าร่วมการประชุมเมื่อมีคนแชร์ลิงก์ 🙏",
        },
        popupScopeIsConnectedButton: "ออกจากระบบ",
        popupScopeIsConnectedExplainText:
            "คุณเชื่อมต่ออยู่แล้ว กรุณาคลิกปุ่มเพื่อออกจากระบบและเชื่อมต่อใหม่",
    },
    calendar: {
        title: "การประชุมของคุณวันนี้",
        joinMeeting: "คลิกที่นี่เพื่อเข้าร่วมการประชุม",
    },
    todoList: {
        title: "สิ่งที่ต้องทำ",
        sentence: "พักสักหน่อย 🙏 บางทีอาจดื่มกาแฟหรือชา? ☕",
    },
};

export default externalModule;
