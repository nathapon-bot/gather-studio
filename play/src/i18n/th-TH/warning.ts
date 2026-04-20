import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const warning: DeepPartial<Translation["warning"]> = {
    title: "คำเตือน!",
    content: `โลกนี้ใกล้ถึงขีดจำกัดแล้ว! คุณสามารถอัปเกรดความจุได้ <a href="{upgradeLink}" target="_blank">ที่นี่</a>`,
    limit: "โลกนี้ใกล้ถึงขีดจำกัดแล้ว!",
    accessDenied: {
        camera: "ถูกปฏิเสธการเข้าถึงกล้อง คลิกที่นี่และตรวจสอบสิทธิ์เบราว์เซอร์ของคุณ",
        screenSharing: "ถูกปฏิเสธการแชร์หน้าจอ คลิกที่นี่และตรวจสอบสิทธิ์เบราว์เซอร์ของคุณ",
        teleport: "คุณไม่มีสิทธิ์เทเลพอร์ตไปยังผู้ใช้รายนี้",
        room: "ถูกปฏิเสธการเข้าถึงห้อง คุณไม่ได้รับอนุญาตให้เข้าห้องนี้",
    },
    importantMessage: "ข้อความสำคัญ",
    connectionLost: "สูญเสียการเชื่อมต่อ กำลังเชื่อมต่อใหม่...",
    connectionLostTitle: "สูญเสียการเชื่อมต่อ",
    connectionLostSubtitle: "กำลังเชื่อมต่อใหม่",
    waitingConnectionTitle: "รอการเชื่อมต่อ",
    waitingConnectionSubtitle: "กำลังเชื่อมต่อ",
    megaphoneNeeds: "ในการใช้เมกะโฟน คุณต้องเปิดกล้องหรือไมโครโฟน หรือแชร์หน้าจอของคุณ",
    mapEditorShortCut: "เกิดข้อผิดพลาดขณะพยายามเปิดตัวแก้ไขแผนที่",
    mapEditorNotEnabled: "ตัวแก้ไขแผนที่ไม่ได้เปิดใช้งานในโลกนี้",
    popupBlocked: {
        title: "ป๊อปอัปถูกบล็อก",
        content: "กรุณาอนุญาตป๊อปอัปสำหรับเว็บไซต์นี้ในการตั้งค่าเบราว์เซอร์ของคุณ",
        done: "ตกลง",
    },
    backgroundProcessing: {
        failedToApply: "ไม่สามารถใช้เอฟเฟกต์พื้นหลังได้",
    },
    duplicateUserConnected: {
        title: "เชื่อมต่ออยู่แล้ว",
        message:
            "คุณเชื่อมต่อกับห้องนี้จากแท็บหรืออุปกรณ์อื่นอยู่แล้ว เพื่อหลีกเลี่ยงความขัดแย้ง กรุณาปิดแท็บหรือหน้าต่างอื่น",
        confirmContinue: "เข้าใจแล้ว ดำเนินการต่อ",
        dontRemindAgain: "ไม่ต้องแสดงข้อความนี้อีก",
    },
    browserNotSupported: {
        title: "😢 เบราว์เซอร์ไม่รองรับ",
        message: "เบราว์เซอร์ของคุณ ({browserName}) ไม่รองรับโดย WorkAdventure อีกต่อไป",
        description: "เบราว์เซอร์ของคุณเก่าเกินไปสำหรับการใช้งาน WorkAdventure กรุณาอัปเดตเป็นเวอร์ชันล่าสุด",
        whatToDo: "คุณทำอะไรได้บ้าง?",
        option1: "อัปเดต {browserName} เป็นเวอร์ชันล่าสุด",
        option2: "ออกจาก WorkAdventure และใช้เบราว์เซอร์อื่น",
        updateBrowser: "อัปเดตเบราว์เซอร์",
        leave: "ออก",
    },
    pwaInstall: {
        title: "ติดตั้ง WorkAdventure",
        description:
            "ติดตั้งแอปเพื่อประสบการณ์ที่ดีขึ้น: เข้าถึงได้รวดเร็ว โหลดเมื่อเปิดเครื่อง และประสบการณ์เหมือนแอป",
        descriptionIos: "เพิ่ม WorkAdventure ไปยังหน้าหลักของคุณเพื่อประสบการณ์ที่ดีขึ้น",
        feature1Title: "เข้าถึงได้รวดเร็ว",
        feature1Description: "เปิด WorkAdventure จากเมนูเริ่ม, Dock หรือเดสก์ท็อป",
        feature2Title: "หน้าต่างแอปแยกต่างหาก",
        feature2Description: "แยก WorkAdventure จากแท็บเบราว์เซอร์และพบได้ง่ายในแถบงาน",
        feature3Title: "เริ่มต้นพร้อมคอมพิวเตอร์",
        feature3Description: "เปิด WorkAdventure เมื่ออุปกรณ์ของคุณเริ่มต้น",
        iosStepsTitle: "วิธีการติดตั้ง",
        iosStep1: "แตะปุ่มแชร์ (สี่เหลี่ยมที่มีลูกศร) ที่ด้านล่างของ Safari",
        iosStep2: 'เลื่อนลงและแตะ "เพิ่มไปยังหน้าหลัก"',
        iosStep3: 'แตะ "เพิ่ม" เพื่อยืนยัน',
        install: "ติดตั้งแอป WorkAdventure",
        installing: "กำลังติดตั้ง…",
        skip: "ดำเนินการต่อในเบราว์เซอร์",
        continue: "ดำเนินการต่อในเบราว์เซอร์",
        neverShowPage: "ไม่ต้องถามอีก",
    },
};

export default warning;
