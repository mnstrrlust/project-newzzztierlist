const agents = [
    // 2.4 Phase 1 agent
    {
        "name": "Dialyn",
        "tags": "Art by @Kn1ghtNightAlt (X), Buff",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Dialyn.png"
    },
    // 2.4 Phase 2 agent
    {
        "name": "Banyue",
        "tags": "Sheer, EXPERT",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Banyue.png"
    },
    {
        "name": "Alice",
        "tags": "Watchlist, Anomaly, Quickswap",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Alice.png"
    },
    {
        "name": "Yixuan",
        "tags": "Sheer, Quickswap",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Yixuan.png"
    },
    {
        "name": "Miyabi",
        "tags": "Anomaly, Quickswap",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Miyabi.png"
    },
    {
        "name": "Vivian",
        "tags": "Anomaly",
        "role": "Secondary DPS",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Vivian.png"
    },
    {
        "name": "Orphie-And-Magus",
        "tags": "Aftershock",
        "role": "Secondary DPS",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Orphie.png"
    },
    {
        "name": "Astra-Yao",
        "tags": "Heal",
        "role": "Support",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Astra.png"
    },
    {
        "name": "Yuzuha",
        "tags": "Anomaly, Aftershock",
        "role": "Support",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Yuzuha.png"
    },
    {
        "name": "Lucia",
        "tags": "Sheer, Aftershock",
        "role": "Support",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Lucia.png"
    },
    {
        "name": "Ju-Fufu",
        "tags": "Aftershock, Buff",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/JuFufu.png"
    },
    {
        "name": "Trigger",
        "tags": "Aftershock",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "SS+",
        "image": "assets/agent-images/Trigger.png"
    },
    {
        "name": "Lighter",
        "tags": "Buff",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Lighter.png"
    },
    {
        "name": "Evelyn",
        "tags": "EXPERT",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Evelyn.png"
    },
    {
        "name": "Yidhari",
        "tags": "Sheer",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Yidhari.png"
    },
    {
        "name": "Anby-Demara-Soldier-0",
        "tags": "Aftershock, EXPERT",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/SoldierAnby.png"
    },
    {
        "name": "Yanagi",
        "tags": "Anomaly",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Yanagi.png"
    },
    {
        "name": "Seed",
        "tags": "",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Seed.png"
    },
    {
        "name": "Yanagi",
        "tags": "Anomaly",
        "role": "Secondary DPS",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Yanagi.png"
    },
    {
        "name": "Nicole",
        "tags": "Quickswap, EXPERT",
        "role": "Support",
        "rank": "A (M6)",
        "tier": "SS",
        "image": "assets/agent-images/Nicole.png"
    },
    {
        "name": "Pan-Yinhu",
        "tags": "Sheer, Heal",
        "role": "Support",
        "rank": "A (M6)",
        "tier": "SS",
        "image": "assets/agent-images/PanYinhu.png"
    },
    {
        "name": "Soukaku",
        "tags": "Partner (Miyabi)",
        "role": "Support",
        "rank": "A (M6)",
        "tier": "S+",
        "image": "assets/agent-images/Soukaku.png"
    },
    {
        "name": "Pulchra",
        "tags": "Aftershock",
        "role": "Stun",
        "rank": "A (M6)",
        "tier": "S+",
        "image": "assets/agent-images/Pulchra.png"
    },
    {
        "name": "Lycaon",
        "tags": "",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "SS",
        "image": "assets/agent-images/Lycaon.png"
    },
    {
        "name": "Hugo",
        "tags": "Partner",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Hugo.png"
    },
    {
        "name": "Jane-Doe",
        "tags": "Anomaly",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Jane.png"
    },
    {
        "name": "Ellen",
        "tags": "",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Ellen.png"
    },
    {
        "name": "Zhu-Yuan",
        "tags": "",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/ZhuYuan.png"
    },
    {
        "name": "Manato",
        "tags": "Sheer",
        "role": "Primary DPS",
        "rank": "A (M6)",
        "tier": "S+",
        "image": "assets/agent-images/Manato.png"
    },
    {
        "name": "Piper",
        "tags": "Anomaly",
        "role": "Primary DPS",
        "rank": "A (M6)",
        "tier": "S+",
        "image": "assets/agent-images/Piper.png"
    },
    {
        "name": "Burnice",
        "tags": "Anomaly",
        "role": "Secondary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Burnice.png"
    },
    {
        "name": "Jane",
        "tags": "Anomaly, Partner (Alice)",
        "role": "Secondary DPS",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Jane.png"
    },
    {
        "name": "Piper",
        "tags": "Anomaly, Partner (Alice)",
        "role": "Secondary DPS",
        "rank": "A (M6)",
        "tier": "S+",
        "image": "assets/agent-images/Piper.png"
    },
    {
        "name": "Qingyi",
        "tags": "",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "S+",
        "image": "assets/agent-images/Qingyi.png"
    },
    {
        "name": "Harumasa",
        "tags": "EXPERT",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "S",
        "image": "assets/agent-images/Harumasa.png"
    },
    {
        "name": "Rina",
        "tags": "",
        "role": "Support",
        "rank": "S (M0)",
        "tier": "S",
        "image": "assets/agent-images/Rina.png"
    },
    {
        "name": "Lucy",
        "tags": "",
        "role": "Support",
        "rank": "A (M6)",
        "tier": "S",
        "image": "assets/agent-images/Lucy.png"
    },
    {
        "name": "Caesar",
        "tags": "Shield",
        "role": "Support",
        "rank": "S (M0)",
        "tier": "S",
        "image": "assets/agent-images/Caesar.png"
    },
    {
        "name": "Soldier-11",
        "tags": "",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "A",
        "image": "assets/agent-images/Soldier11.png"
    },
    {
        "name": "Corin",
        "tags": "Partner",
        "role": "Primary DPS",
        "rank": "A (M6)",
        "tier": "A",
        "image": "assets/agent-images/Corin.png"
    },
    {
        "name": "Koleda",
        "tags": "",
        "role": "Stun",
        "rank": "S (M0)",
        "tier": "A",
        "image": "assets/agent-images/Koleda.png"
    },
    {
        "name": "Anton",
        "tags": "Partner (Astra)",
        "role": "Primary DPS",
        "rank": "A (M6)",
        "tier": "B",
        "image": "assets/agent-images/Anton.png"
    },
    {
        "name": "Billy",
        "tags": "",
        "role": "Primary DPS",
        "rank": "A (M6)",
        "tier": "B",
        "image": "assets/agent-images/Billy.png"
    },
    {
        "name": "Nekomata",
        "tags": "",
        "role": "Primary DPS",
        "rank": "S (M0)",
        "tier": "B",
        "image": "assets/agent-images/Nekomata.png"
    },
    {
        "name": "Grace",
        "tags": "Anomaly",
        "role": "Secondary DPS",
        "rank": "S (M0)",
        "tier": "B",
        "image": "assets/agent-images/Grace.png"
    },
    {
        "name": "Seth",
        "tags": "Shield, Anomaly",
        "role": "Support",
        "rank": "A (M6)",
        "tier": "B",
        "image": "assets/agent-images/Seth.png"
    },
    {
        "name": "Ben",
        "tags": "",
        "role": "Primary DPS",
        "rank": "A (M6)",
        "tier": "C",
        "image": "assets/agent-images/Ben.png"
    },
    {
        "name": "Anby",
        "tags": "",
        "role": "Stun",
        "rank": "A (M6)",
        "tier": "C",
        "image": "assets/agent-images/Anby.png"
    }
]