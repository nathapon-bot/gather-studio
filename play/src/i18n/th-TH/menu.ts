import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const menu: DeepPartial<Translation["menu"]> = {
    title: "เมนู",
    icon: {
        open: {
            menu: "เปิดเมนู",
            invite: "แสดงการเชิญ",
            register: "ลงทะเบียน",
            chat: "เปิดแชท",
            userlist: "รายชื่อผู้ใช้",
            openEmoji: "เปิดป๊อปอัปเลือกอีโมจิ",
            closeEmoji: "ปิดเมนูอีโมจิ",
            mobile: "เปิดเมนูมือถือ",
            calendar: "ปฏิทิน",
            todoList: "รายการสิ่งที่ต้องทำ",
        },
    },
    visitCard: {
        close: "ปิด",
        sendMessage: "ส่งข้อความ",
    },
    profile: {
        login: "เข้าสู่ระบบ",
        logout: "ออกจากระบบ",
        helpAndTips: "ช่วยเหลือและเคล็ดลับ",
    },
    settings: {
        videoBandwidth: {
            title: "คุณภาพวิดีโอ",
            low: "ต่ำ",
            recommended: "แนะนำ",
            high: "สูง",
        },
        shareScreenBandwidth: {
            title: "คุณภาพการแชร์หน้าจอ",
            low: "ต่ำ",
            recommended: "แนะนำ",
            high: "สูง",
        },
        bandwidthConstrainedPreference: {
            title: "เมื่อแบนด์วิดท์เครือข่ายจำกัด",
            maintainFramerateTitle: "คงความลื่นไหลของภาพเคลื่อนไหว",
            maintainFramerateDescription:
                "ให้ความสำคัญกับเฟรมเรตมากกว่าความละเอียด เหมาะสำหรับการสตรีมเกมที่ต้องการความลื่นไหล",
            maintainResolutionTitle: "คงความชัดของข้อความ",
            maintainResolutionDescription:
                "ให้ความสำคัญกับความละเอียดมากกว่าเฟรมเรต เหมาะสำหรับการนำเสนอหรือการแชร์โค้ด",
            balancedTitle: "สมดุลระหว่างเฟรมเรตและความละเอียด",
            balancedDescription: "พยายามรักษาความสมดุลระหว่างเฟรมเรตและความละเอียด",
        },
        language: {
            title: "ภาษา",
        },
        privacySettings: {
            title: "โหมดห่างชั่วคราว",
            explanation: 'ขณะที่แท็บ WorkAdventure ในเบราว์เซอร์ของคุณไม่ปรากฏ WorkAdventure จะเปลี่ยนเป็น "โหมดห่างชั่วคราว"',
            cameraToggle: 'คงกล้องไว้ใน "โหมดห่างชั่วคราว"',
            microphoneToggle: 'คงไมโครโฟนไว้ใน "โหมดห่างชั่วคราว"',
        },
        save: "บันทึก",
        otherSettings: "การตั้งค่าทั้งหมด",
        fullscreen: "เต็มหน้าจอ",
        notifications: "การแจ้งเตือน",
        enablePictureInPicture: "เปิดใช้งานภาพซ้อนภาพ",
        chatSounds: "เสียงแชท",
        cowebsiteTrigger: "ถามก่อนเปิดเว็บไซต์และห้อง Jitsi Meet เสมอ",
        ignoreFollowRequest: "ละเว้นคำขอติดตามผู้ใช้รายอื่น",
        proximityDiscussionVolume: "ระดับเสียงการสนทนาใกล้เคียง",
        blockAudio: "บล็อกเสียงบรรยากาศและดนตรี",
        disableAnimations: "ปิดใช้งานแอนิเมชันแผนที่",
        bubbleSound: "เสียงฟอง",
        bubbleSoundOptions: {
            ding: "ดิ้ง",
            wobble: "โยกเยก",
        },
        displayVideoQualityStats: "แสดงสถิติคุณภาพวิดีโอ",
    },
    invite: {
        description: "แชร์ลิงก์ห้องนี้!",
        copy: "คัดลอก",
        copied: "คัดลอกแล้ว",
        share: "แชร์",
        walkAutomaticallyToPosition: "เดินอัตโนมัติไปยังตำแหน่งของฉัน",
        selectEntryPoint: "ใช้จุดเข้าอื่น",
        selectEntryPointSelect: "เลือกจุดเข้าที่ผู้ใช้จะมาถึง",
    },
    globalMessage: {
        text: "ข้อความ",
        audio: "เสียง",
        warning: "กระจายไปยังทุกห้องในโลก",
        enter: "พิมพ์ข้อความของคุณที่นี่...",
        send: "ส่ง",
    },
    globalAudio: {
        uploadInfo: "อัปโหลดไฟล์",
        error: "ไม่ได้เลือกไฟล์ คุณต้องอัปโหลดไฟล์ก่อนส่ง",
        errorUpload: "เกิดข้อผิดพลาดในการอัปโหลดไฟล์ กรุณาตรวจสอบไฟล์และลองอีกครั้ง หากปัญหายังคงอยู่ โปรดติดต่อผู้ดูแลระบบ",
        dragAndDrop: "ลากและวางหรือคลิกที่นี่เพื่ออัปโหลดไฟล์ของคุณ 🎧",
    },
    contact: {
        gettingStarted: {
            title: "เริ่มต้นใช้งาน",
            description:
                "WorkAdventure ให้คุณสร้างพื้นที่ออนไลน์เพื่อสื่อสารกับผู้อื่นได้อย่างเป็นธรรมชาติ ทุกอย่างเริ่มต้นด้วยการสร้างพื้นที่ของคุณเอง เลือกจากแผนที่สำเร็จรูปมากมายจากทีมของเรา",
        },
        createMap: {
            title: "สร้างแผนที่ของคุณ",
            description: "คุณยังสามารถสร้างแผนที่ของตัวเองได้โดยทำตามขั้นตอนในเอกสาร",
        },
    },
    about: {
        mapInfo: "ข้อมูลแผนที่",
        mapLink: "ลิงก์แผนที่นี้",
        copyrights: {
            map: {
                title: "ลิขสิทธิ์แผนที่",
                empty: "ผู้สร้างแผนที่ไม่ได้ระบุลิขสิทธิ์ของแผนที่",
            },
            tileset: {
                title: "ลิขสิทธิ์ชุดกระเบื้อง",
                empty: "ผู้สร้างแผนที่ไม่ได้ระบุลิขสิทธิ์ของชุดกระเบื้อง ไม่ได้หมายความว่าชุดกระเบื้องเหล่านั้นไม่มีลิขสิทธิ์",
            },
            audio: {
                title: "ลิขสิทธิ์ไฟล์เสียง",
                empty: "ผู้สร้างแผนที่ไม่ได้ระบุลิขสิทธิ์ของไฟล์เสียง ไม่ได้หมายความว่าไฟล์เสียงเหล่านั้นไม่มีลิขสิทธิ์",
            },
        },
    },
    chat: {
        matrixIDLabel: "Matrix ID ของคุณ",
        settings: "ตั้งค่า",
        resetKeyStorageUpButtonLabel: "รีเซ็ตที่จัดเก็บคีย์ของคุณ",
        resetKeyStorageConfirmationModal: {
            title: "ยืนยันการรีเซ็ตที่จัดเก็บคีย์",
            content: "คุณกำลังจะรีเซ็ตที่จัดเก็บคีย์ คุณแน่ใจหรือไม่?",
            warning:
                "การรีเซ็ตที่จัดเก็บคีย์จะลบเซสชันปัจจุบันและผู้ใช้ที่เชื่อถือทั้งหมด คุณอาจสูญเสียการเข้าถึงข้อความเก่าบางส่วน และจะไม่ถูกจดจำในฐานะผู้ใช้ที่เชื่อถือได้อีกต่อไป กรุณาตรวจสอบให้แน่ใจว่าคุณเข้าใจผลที่ตามมาก่อนดำเนินการ",
            cancel: "ยกเลิก",
            continue: "ดำเนินการต่อ",
        },
    },
    sub: {
        profile: "โปรไฟล์",
        settings: "ตั้งค่า",
        credit: "เครดิต",
        globalMessages: "ข้อความระดับโลก",
        contact: "ติดต่อ",
        report: "รายงานปัญหา",
        chat: "แชท",
        help: "ช่วยเหลือและบทแนะนำ",
        contextualActions: "การดำเนินการตามบริบท",
        shortcuts: "ปุ่มลัด",
    },
    shortcuts: {
        title: "ปุ่มลัดแป้นพิมพ์",
        keys: "ปุ่มลัด",
        actions: "การดำเนินการ",
        moveUp: "เดินขึ้น",
        moveDown: "เดินลง",
        moveLeft: "เดินซ้าย",
        moveRight: "เดินขวา",
        speedUp: "วิ่ง",
        interact: "โต้ตอบ",
        follow: "ติดตาม",
        openChat: "เปิดแชท",
        openUserList: "เปิดรายชื่อผู้ใช้",
        toggleMapEditor: "แสดง/ซ่อนตัวแก้ไขแผนที่",
        rotatePlayer: "หมุนตัวละคร",
        emote1: "อีโมท 1",
        emote2: "อีโมท 2",
        emote3: "อีโมท 3",
        emote4: "อีโมท 4",
        emote5: "อีโมท 5",
        emote6: "อีโมท 6",
        openSayPopup: "เปิดป๊อปอัปพูด",
        openThinkPopup: "เปิดป๊อปอัปคิด",
        walkMyDesk: "เดินไปยังโต๊ะทำงานของฉัน",
    },
};

export default menu;
