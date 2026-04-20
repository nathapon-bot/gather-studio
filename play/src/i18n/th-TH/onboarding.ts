import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const onboarding: DeepPartial<Translation["onboarding"]> = {
    welcome: {
        title: "ยินดีต้อนรับสู่ {worldName}! 🚀",
        description:
            "เตรียมตัวสำรวจโลกเสมือนที่คุณสามารถเดินไปรอบๆ แชทกับผู้อื่น และทำงานร่วมกันแบบเรียลไทม์ มาทัวร์สั้นๆ เพื่อช่วยให้คุณเริ่มต้นได้!",
        start: "ไปเลย!",
        skip: "ข้ามบทแนะนำ",
    },
    movement: {
        title: "เดินไปรอบๆ",
        descriptionDesktop:
            "ใช้ปุ่มลูกศรบนแป้นพิมพ์หรือ WASD เพื่อเคลื่อนที่ตัวละครของคุณบนแผนที่ คุณยังสามารถคลิกขวาเพื่อเคลื่อนที่ได้ ลองเคลื่อนที่ตอนนี้!",
        descriptionMobile: "ใช้จอยสติ๊กหรือแตะบนแผนที่เพื่อเคลื่อนที่ตัวละครของคุณ ลองเคลื่อนที่ตอนนี้!",
        next: "ถัดไป",
    },
    communication: {
        title: "ฟองสนทนา",
        description:
            "เมื่อคุณเข้าใกล้ผู้เล่นคนอื่น คุณจะเข้าสู่ฟองสนทนาโดยอัตโนมัติ คุณสามารถแชทกับผู้อื่นในฟองเดียวกันได้!",
        video: "./static/Videos/Meet.mp4",
        next: "เข้าใจแล้ว!",
    },
    lockBubble: {
        title: "ล็อกการสนทนาของคุณ",
        description:
            "คลิกปุ่มล็อกเพื่อป้องกันไม่ให้ผู้อื่นเข้าร่วมฟองสนทนาของคุณ เหมาะสำหรับการสนทนาส่วนตัว!",
        video: "./static/Videos/LockBubble.mp4",
        hint: "คลิกปุ่มล็อกที่ไฮไลท์เพื่อลองดู!",
        next: "ถัดไป",
    },
    screenSharing: {
        title: "แชร์หน้าจอของคุณ",
        description:
            "แชร์หน้าจอกับผู้อื่นในฟองสนทนาของคุณ เหมาะสำหรับการนำเสนอและการทำงานร่วมกัน!",
        video: "./static/images/screensharing.mp4",
        hint: "คลิกปุ่มแชร์หน้าจอที่ไฮไลท์เพื่อเริ่มแชร์!",
        next: "ถัดไป",
    },
    pictureInPicture: {
        title: "ภาพซ้อนภาพ",
        description:
            "ใช้โหมดภาพซ้อนภาพเพื่อให้การโทรวิดีโอมองเห็นได้ขณะที่คุณนำทางในแผนที่ เหมาะสำหรับการทำหลายอย่างพร้อมกัน!",
        video: "./static/Videos/PictureInPicture.mp4",
        hint: "คลิกปุ่ม PiP ที่ไฮไลท์เพื่อเปิดใช้งาน!",
        next: "ถัดไป",
    },
    complete: {
        title: "พร้อมแล้ว! 🎉",
        description:
            "คุณได้เรียนรู้พื้นฐานของ {worldName} แล้ว! สำรวจ พบปะผู้คนใหม่ และสนุกได้เลย คุณสามารถเข้าถึงความช่วยเหลือจากเมนูเมื่อต้องการ",
        finish: "เริ่มสำรวจ!",
    },
};

export default onboarding;
