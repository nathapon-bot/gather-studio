import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const messageScreen: DeepPartial<Translation["messageScreen"]> = {
    connecting: "กำลังเชื่อมต่อ...",
    pleaseWait: "กรุณารอในขณะที่เราเชื่อมต่อคุณกับห้อง",
};

export default messageScreen;
