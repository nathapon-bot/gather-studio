import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const login: DeepPartial<Translation["login"]> = {
    input: {
        name: {
            placeholder: "ใส่ชื่อของคุณ",
            empty: "กรุณาใส่ชื่อ",
            tooLongError: "ชื่อยาวเกินไป",
            notValidError: "รูปแบบชื่อไม่ถูกต้อง",
        },
    },
    genericError: "เกิดข้อผิดพลาด",
    terms: "การดำเนินการต่อ หมายความว่าคุณยอมรับ{links}ของเรา",
    termsOfUse: "ข้อกำหนดการใช้งาน",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    cookiePolicy: "นโยบายคุกกี้",
    continue: "ดำเนินการต่อ",
};

export default login;
