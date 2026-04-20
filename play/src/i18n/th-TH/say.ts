import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const say: DeepPartial<Translation["say"]> = {
    type: {
        say: "พูด",
        think: "คิด",
    },
    placeholder: "พิมพ์ข้อความของคุณที่นี่...",
    button: "สร้างฟอง",
    tooltip: {
        description: {
            say: "แสดงฟองสนทนาเหนือตัวละครของคุณ มองเห็นได้โดยทุกคนบนแผนที่ จะแสดงนาน 5 วินาที",
            think: "แสดงฟองความคิดเหนือตัวละครของคุณ มองเห็นได้โดยผู้เล่นทุกคนบนแผนที่ จะแสดงตราบใดที่คุณไม่เคลื่อนที่",
        },
    },
};

export default say;
