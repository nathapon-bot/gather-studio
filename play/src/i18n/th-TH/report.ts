import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const report: DeepPartial<Translation["report"]> = {
    block: {
        title: "บล็อก",
        content: "บล็อกการสื่อสารทั้งหมดจากและไปยัง {userName} สามารถยกเลิกได้",
        unblock: "ยกเลิกการบล็อกผู้ใช้นี้",
        block: "บล็อกผู้ใช้นี้",
    },
    title: "รายงาน",
    content: "ส่งข้อความรายงานไปยังผู้ดูแลระบบของห้องนี้ พวกเขาอาจแบนผู้ใช้รายนี้ในภายหลัง",
    message: {
        title: "ข้อความของคุณ: ",
        empty: "ข้อความรายงานไม่สามารถว่างได้",
        error: "เกิดข้อผิดพลาดในการส่งรายงาน คุณสามารถติดต่อผู้ดูแลระบบได้",
    },
    submit: "รายงานผู้ใช้นี้",
    moderate: {
        title: "กลั่นกรอง {userName}",
        block: "บล็อก",
        report: "รายงาน",
        noSelect: "ข้อผิดพลาด: ไม่ได้เลือกการดำเนินการ",
    },
};

export default report;
