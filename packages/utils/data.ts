export interface Character {
    name: string;
    realm: string;
    region: string;
    thumbnail: string;
    class: WowClass;
    role: WowRole;
}
export type WowRole = "dps" | "healer" | "tank";
export type WowClass =
    | "druid"
    | "dh"
    | "monk"
    | "rogue"
    | "dk"
    | "mage"
    | "warrior"
    | "warlock"
    | "shaman"
    | "priest"
    | "hunter"
    | "paladin"
    | "evoker";

export const wowClassMap = {
    dh: {
        displayName: "Demon Hunter",
        color: "#A330C9",
    },
    druid: {
        displayName: "Druid",
        color: "#FF7C0A",
    },
    dk: {
        displayName: "Death Knight",
        color: "#C41E3A",
    },
    evoker: {
        displayName: "Evoker",
        color: "#33937F",
    },
    hunter: {
        displayName: "Hunter",
        color: "#AAD372",
    },
    mage: {
        displayName: "Mage",
        color: "#3FC7EB",
    },
    monk: {
        displayName: "Monk",
        color: "#00FF98",
    },
    paladin: {
        displayName: "Paladin",
        color: "#F48CBA",
    },
    priest: {
        displayName: "Priest",
        color: "#FFFFFF",
    },
    rogue: {
        displayName: "Rogue",
        color: "#FFF468",
    },
    shaman: {
        displayName: "Shaman",
        color: "#0070DD",
    },
    warlock: {
        displayName: "Warlock",
        color: "#8788EE",
    },
    warrior: {
        displayName: "Warrior",
        color: "#C69B6D",
    },
};
