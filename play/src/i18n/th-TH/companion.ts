import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const companion: DeepPartial<Translation["companion"]> = {
    select: {
        title: "เลือกผู้ติดตามของคุณ",
        any: "ไม่มีผู้ติดตาม",
        continue: "ดำเนินการต่อ",
    },
};

export default companion;
