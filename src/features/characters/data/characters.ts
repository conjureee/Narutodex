export type Character = {
    id: number;
    name: string;
    japaneseName?: string;
    image: string;
    village: string;
    clan?: string;
    rank: string;
    status: 'alive' | 'deceased' | 'missing';
    kekkeiGenkai?: string[];
    description: string;
};

export const characters: Character[] = [
    {
        id: 1,
        name: "Naruto Uzumaki",
        japaneseName: "うずまき ナルト",
        image: "https://naruto.fandom.com/wiki/Special:Redirect/file/Naruto_Part_III.png",
        village: "Konohagakure",
        clan: "Uzumaki",
        rank: "Hokage",
        status: "alive",
        kekkeiGenkai: ["Nine-Tails Chakra Mode"],
        description: "Siódmy Hokage, jinchūriki Kuramy, marzyciel i nieustępliwy shinobi."
    },
    {
        id: 2,
        name: "Sasuke Uchicha",
        japaneseName: "うちはサスケ",
        image: "",
        village: "Konohagakure",
        clan: "Uchicha",
        rank: "Shinobi",
        status: "alive",
        kekkeiGenkai: ["Sharingan", "Eternal Mangekyō Sharingan", "Rinnegan"],
        description: ""
    },
    {
        id: 3,
        name: "Sakura Haruno",
        japaneseName: "うちはサクラ",
        image: "",
        village: "Konohagakure",
        clan: "Uchicha",
        rank: "Shinobi",
        status: "alive",
        kekkeiGenkai: [],
        description: ""
    },
    {
        id: 4,
        name: "Hinata Hyūga",
        japaneseName: "うずまきヒナタ",
        image: "",
        village: "Konohagakure",
        clan: "Hyūga",
        rank: "Shinobi",
        status: "alive",
        kekkeiGenkai: ["Byakugan"],
        description: ""
    },
    {
        id: 5,
        name: "Kakashi Hatake",
        japaneseName: "はたけカカシ",
        image: "",
        village: "Konohagakure",
        clan: "Hatake",
        rank: "Shinobi",
        status: "alive",
        kekkeiGenkai: ["Sharingan", "Mangekyō Sharingan"],
        description: ""
    },
];