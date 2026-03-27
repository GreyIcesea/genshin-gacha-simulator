// 原神角色数据
const characters = {
    fiveStar: [
        { name: "雷电将军", element: "雷", weapon: "长柄武器", rarity: 5 },
        { name: "温迪", element: "风", weapon: "弓", rarity: 5 },
        { name: "魈", element: "风", weapon: "长枪", rarity: 5 },
        { name: "刻晴", element: "雷", weapon: "单手剑", rarity: 5 },
        { name: "琴", element: "风", weapon: "单手剑", rarity: 5 },
        { name: "迪卢克", element: "火", weapon: "双手剑", rarity: 5 },
        { name: "可莉", element: "火", weapon: "法器", rarity: 5 },
        { name: "甘雨", element: "冰", weapon: "弓", rarity: 5 },
        { name: "钟离", element: "岩", weapon: "长柄武器", rarity: 5 },
        { name: "阿贝多", element: "岩", weapon: "单手剑", rarity: 5 },
        { name: "胡桃", element: "火", weapon: "长柄武器", rarity: 5 },
        { name: "优菈", element: "冰", weapon: "双手剑", rarity: 5 },
        { name: "宵宫", element: "火", weapon: "弓", rarity: 5 },
        { name: "神里绫华", element: "冰", weapon: "单手剑", rarity: 5 },
        { name: "荒泷一斗", element: "岩", weapon: "双手剑", rarity: 5 },
        { name: "八重神子", element: "雷", weapon: "法器", rarity: 5 },
        { name: "神里绫人", element: "水", weapon: "单手剑", rarity: 5 },
        { name: "夜兰", element: "水", weapon: "弓", rarity: 5 },
        { name: "艾尔海森", element: "草", weapon: "单手剑", rarity: 5 },
        { name: "纳西妲", element: "草", weapon: "法器", rarity: 5 }
    ],
    fourStar: [
        { name: "行秋", element: "水", weapon: "单手剑", rarity: 4 },
        { name: "班尼特", element: "火", weapon: "单手剑", rarity: 4 },
        { name: "香菱", element: "火", weapon: "长柄武器", rarity: 4 },
        { name: "重云", element: "冰", weapon: "双手剑", rarity: 4 },
        { name: "菲谢尔", element: "雷", weapon: "弓", rarity: 4 },
        { name: "砂糖", element: "风", weapon: "法器", rarity: 4 },
        { name: "北斗", element: "雷", weapon: "双手剑", rarity: 4 },
        { name: "诺艾尔", element: "岩", weapon: "双手剑", rarity: 4 },
        { name: "迪奥娜", element: "冰", weapon: "弓", rarity: 4 },
        { name: "早柚", element: "风", weapon: "双手剑", rarity: 4 },
        { name: "烟绯", element: "火", weapon: "法器", rarity: 4 },
        { name: "云堇", element: "岩", weapon: "长枪", rarity: 4 },
        { name: "久岐忍", element: "雷", weapon: "单手剑", rarity: 4 },
        { name: "鹿野院平藏", element: "风", weapon: "法器", rarity: 4 },
        { name: "珐露珊", element: "风", weapon: "弓", rarity: 4 },
        { name: "莱依拉", element: "冰", weapon: "法器", rarity: 4 },
        { name: "瑶瑶", element: "草", weapon: "长柄武器", rarity: 4 },
        { name: "卡维", element: "草", weapon: "双手剑", rarity: 4 },
        { name: "白术", element: "草", weapon: "法器", rarity: 4 },
        { name: "绮良良", element: "草", weapon: "单手剑", rarity: 4 }
    ]
};

// 原神武器数据
const weapons = {
    fiveStar: [
        { name: "天空之翼", type: "弓", rarity: 5 },
        { name: "阿莫斯之弓", type: "弓", rarity: 5 },
        { name: "四风原典", type: "法器", rarity: 5 },
        { name: "天空之卷", type: "法器", rarity: 5 },
        { name: "天空之脊", type: "长柄武器", rarity: 5 },
        { name: "护摩之杖", type: "长柄武器", rarity: 5 },
        { name: "天空之刃", type: "单手剑", rarity: 5 },
        { name: "雾切之回光", type: "单手剑", rarity: 5 },
        { name: "天空之傲", type: "双手剑", rarity: 5 },
        { name: "狼的末路", type: "双手剑", rarity: 5 }
    ],
    fourStar: [
        { name: "西风弓", type: "弓", rarity: 4 },
        { name: "绝弦", type: "弓", rarity: 4 },
        { name: "祭礼弓", type: "弓", rarity: 4 },
        { name: "西风秘典", type: "法器", rarity: 4 },
        { name: "祭礼残章", type: "法器", rarity: 4 },
        { name: "西风长枪", type: "长柄武器", rarity: 4 },
        { name: "祭礼大剑", type: "双手剑", rarity: 4 },
        { name: "西风剑", type: "单手剑", rarity: 4 },
        { name: "祭礼剑", type: "单手剑", rarity: 4 },
        { name: "钟剑", type: "双手剑", rarity: 4 }
    ],
    threeStar: [
        { name: "弹弓", type: "弓", rarity: 3 },
        { name: "鸦羽弓", type: "弓", rarity: 3 },
        { name: "翡玉法球", type: "法器", rarity: 3 },
        { name: "魔导绪论", type: "法器", rarity: 3 },
        { name: "白铁大剑", type: "双手剑", rarity: 3 },
        { name: "铁影阔剑", type: "双手剑", rarity: 3 },
        { name: "黎明神剑", type: "单手剑", rarity: 3 },
        { name: "吃虎鱼刀", type: "单手剑", rarity: 3 },
        { name: "白缨枪", type: "长柄武器", rarity: 3 },
        { name: "钺矛", type: "长柄武器", rarity: 3 }
    ]
};

// 抽卡概率配置
const gachaRates = {
    fiveStar: 0.006,      // 基础5星概率0.6%
    fourStar: 0.051,       // 基础4星概率5.1%
    pity: {
        fiveStar: 90,      // 90抽保底5星
        fourStar: 10       // 10抽保底4星
    },
    upRate: 0.5            // UP角色概率50%
};

// 游戏状态
let gameState = {
    pity: 0,
    fourStarPity: 0,
    totalPulls: 0,
    fiveStarCount: 0,
    history: []
};

// 保存游戏状态到本地存储
function saveGameState() {
    localStorage.setItem('gachaGameState', JSON.stringify(gameState));
}

// 从本地存储加载游戏状态
function loadGameState() {
    const savedState = localStorage.getItem('gachaGameState');
    if (savedState) {
        gameState = JSON.parse(savedState);
        updateStats();
    }
}

// 初始化时加载游戏状态
loadGameState();
