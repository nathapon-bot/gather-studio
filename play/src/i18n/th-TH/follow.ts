import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const follow: DeepPartial<Translation["follow"]> = {
    interactStatus: {
        following: "กำลังติดตาม {leader}",
        waitingFollowers: "รอการยืนยันจากผู้ติดตาม",
        followed: {
            one: "{follower} กำลังติดตามคุณ",
            two: "{firstFollower} และ {secondFollower} กำลังติดตามคุณ",
            many: "{followers} และ {lastFollower} กำลังติดตามคุณ",
        },
    },
    interactMenu: {
        title: {
            interact: "การโต้ตอบ",
            follow: "คุณต้องการติดตาม {leader} ไหม?",
        },
        stop: {
            leader: "คุณต้องการหยุดนำทางไหม?",
            follower: "คุณต้องการหยุดติดตาม {leader} ไหม?",
        },
        yes: "ใช่",
        no: "ไม่",
    },
    actionName: "ค้นหา",
};

export default follow;
