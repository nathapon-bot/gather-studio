import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const camera: DeepPartial<Translation["camera"]> = {
    editCam: "แก้ไขกล้อง",
    editMic: "แก้ไขไมโครโฟน",
    editSpeaker: "แก้ไขลำโพง",
    active: "เปิดใช้งาน",
    disabled: "ปิดใช้งาน",
    notRecommended: "ไม่แนะนำ",
    enable: {
        title: "เปิดกล้องและไมโครโฟนของคุณ",
        start: "ยินดีต้อนรับสู่หน้าการตั้งค่าอุปกรณ์เสียงและวิดีโอ! ค้นหาเครื่องมือที่นี่เพื่อปรับปรุงประสบการณ์ออนไลน์ของคุณ ปรับการตั้งค่าตามความต้องการของคุณ ตรวจสอบว่าฮาร์ดแวร์ของคุณเชื่อมต่อและอัปเดตอย่างถูกต้อง",
    },
    help: {
        title: "ต้องการเข้าถึงกล้อง / ไมโครโฟน",
        permissionDenied: "ถูกปฏิเสธสิทธิ์",
        content: "คุณต้องอนุญาตการเข้าถึงกล้องและไมโครโฟนในเบราว์เซอร์ของคุณ",
        firefoxContent:
            'กรุณาคลิกช่องทำเครื่องหมาย "จดจำการตัดสินใจนี้" หากคุณไม่ต้องการให้ Firefox ถามการอนุญาตซ้ำ',
        allow: "อนุญาตเว็บแคม",
        continue: "ดำเนินการต่อโดยไม่มีเว็บแคม",
        screen: {
            firefox: "/resources/help-setting-camera-permission/en-US-firefox.png",
            chrome: "/resources/help-setting-camera-permission/en-US-firefox.png",
        },
        tooltip: {
            permissionDeniedTitle: "การเข้าถึงกล้องถูกบล็อก",
            permissionDeniedDesc:
                "เบราว์เซอร์ของคุณปฏิเสธการเข้าถึงกล้องสำหรับไซต์นี้ อนุญาตจากแถบที่อยู่ (ไอคอนแม่กุญแจหรือกล้อง) หรือในการตั้งค่าไซต์",
            noDeviceTitle: "ไม่พบกล้อง",
            noDeviceDesc:
                "เบราว์เซอร์ของคุณไม่พบกล้องที่ใช้ได้ ลองเบราว์เซอร์อื่น ตรวจสอบว่าเชื่อมต่อกล้องแล้ว หรือรีสตาร์ทคอมพิวเตอร์",
            permissionMedia: {
                firefox: "/resources/help-setting-camera-permission/en-US-firefox.png",
                chrome: "/resources/help-setting-camera-permission/en-US-firefox.png",
                safari: "/resources/help-setting-camera-permission/en-US-firefox.png",
                android: "/resources/help-setting-camera-permission/en-US-firefox.png",
                default: "/resources/help-setting-camera-permission/en-US-firefox.png",
            },
        },
        microphoneTooltip: {
            permissionDeniedTitle: "การเข้าถึงไมโครโฟนถูกบล็อก",
            permissionDeniedDesc:
                "เบราว์เซอร์ของคุณปฏิเสธการเข้าถึงไมโครโฟนสำหรับไซต์นี้ อนุญาตจากแถบที่อยู่ (ไอคอนแม่กุญแจหรือไมโครโฟน) หรือในการตั้งค่าไซต์",
            noDeviceTitle: "ไม่พบไมโครโฟน",
            noDeviceDesc:
                "เบราว์เซอร์ของคุณไม่พบไมโครโฟนที่ใช้ได้ ลองเบราว์เซอร์อื่น ตรวจสอบว่าเชื่อมต่อไมโครโฟนแล้ว หรือรีสตาร์ทคอมพิวเตอร์",
            permissionMedia: {
                firefox: "/resources/help-setting-camera-permission/en-US-firefox.png",
                chrome: "/resources/help-setting-camera-permission/en-US-firefox.png",
                safari: "/resources/help-setting-camera-permission/en-US-firefox.png",
                android: "/resources/help-setting-camera-permission/en-US-firefox.png",
                default: "/resources/help-setting-camera-permission/en-US-firefox.png",
            },
        },
    },
    webrtc: {
        title: "ข้อผิดพลาดการเชื่อมต่อเซิร์ฟเวอร์ถ่ายทอดวิดีโอ",
        titlePending: "กำลังเชื่อมต่อเซิร์ฟเวอร์ถ่ายทอดวิดีโอ",
        error: "ไม่สามารถเข้าถึงเซิร์ฟเวอร์ TURN ได้",
        content: "ไม่สามารถเข้าถึงเซิร์ฟเวอร์ถ่ายทอดวิดีโอ คุณอาจไม่สามารถสื่อสารกับผู้ใช้รายอื่นได้",
        solutionVpn:
            "หากคุณ <strong>เชื่อมต่อผ่าน VPN</strong> กรุณาตัดการเชื่อมต่อ VPN และรีเฟรชหน้าเว็บ",
        solutionVpnNotAskAgain: "เข้าใจแล้ว ไม่ต้องแจ้งอีก 🫡",
        solutionHotspot:
            "หากคุณอยู่ในเครือข่ายที่จำกัด (เครือข่ายบริษัท...) ลองเปลี่ยนเครือข่าย เช่น สร้าง <strong>Wifi hotspot</strong> ด้วยโทรศัพท์ของคุณ",
        solutionNetworkAdmin: "หากคุณเป็น <strong>ผู้ดูแลเครือข่าย</strong> โปรดอ่าน ",
        preparingYouNetworkGuide: '"คู่มือการเตรียมเครือข่าย"',
        refresh: "รีเฟรช",
        continue: "ดำเนินการต่อ",
        newDeviceDetected: "พบอุปกรณ์ใหม่ {device} 🎉 เปลี่ยนไหม? [SPACE] ละเว้น [ESCAPE]",
    },
    my: {
        silentZone: "โซนเงียบ",
        silentZoneDesc:
            "คุณอยู่ในโซนเงียบ คุณสามารถมองเห็นและได้ยินเฉพาะคนที่อยู่ด้วยกันเท่านั้น",
        nameTag: "คุณ",
        loading: "กำลังโหลดกล้องของคุณ...",
    },
    disable: "ปิดกล้องของคุณ",
    menu: {
        moreAction: "การดำเนินการเพิ่มเติม",
        closeMenu: "ปิดเมนู",
        senPrivateMessage: "ส่งข้อความส่วนตัว (เร็วๆ นี้)",
        kickoffUser: "เตะผู้ใช้ออก",
        muteAudioUser: "ปิดเสียง",
        askToMuteAudioUser: "ขอให้ปิดเสียง",
        muteAudioEveryBody: "ปิดเสียงทุกคน",
        muteVideoUser: "ปิดวิดีโอ",
        askToMuteVideoUser: "ขอให้ปิดวิดีโอ",
        muteVideoEveryBody: "ปิดวิดีโอทุกคน",
        blockOrReportUser: "การกลั่นกรอง",
    },
    backgroundEffects: {
        imageTitle: "รูปพื้นหลัง",
        videoTitle: "วิดีโอพื้นหลัง",
        blurTitle: "พื้นหลังเบลอ",
        resetTitle: "ปิดใช้งานเอฟเฟกต์พื้นหลัง",
        title: "เอฟเฟกต์พื้นหลัง",
        close: "ปิด",
        blurAmount: "ระดับการเบลอ",
    },
};

export default camera;
