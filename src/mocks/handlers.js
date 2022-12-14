import { rest } from 'msw'


export const handlers = [
    rest.get('/categories', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 0,
                    name: 'Все'
                },
                {
                    id: 1,
                    name: 'Холодное оружие'
                },
                {
                    id: 2,
                    name: 'Пистолеты/ПП'
                },
                {
                    id: 3,
                    name: 'Винтовки'
                },
                {
                    id: 4,
                    name: 'Дробовики'
                },
                {
                    id: 5,
                    name: 'Боеприпасы'
                },
                {
                    id: 6,
                    name: 'Модификации'
                },
                {
                    id: 7,
                    name: 'Ремонт'
                },
            ])
        )
    }),

    rest.get('/profile', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                money: 8000,
                card: 150000,
           
            })
        )
    }),

    rest.get('/weapon', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                    "1": {
                        "dagger": {
                            id: 0,
                            category: 1,
                            name: "армейский нож",
                            price: 800,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 80,
                        },
                        "bat": {
                            id: 1,
                            category: 1,
                            name: "бейсбольная бита",
                            price: 350,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 40,
                        },
                        "bottle": {
                            id: 2,
                            category: 1,
                            name: "разбитая бутылка",
                            price: 200,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 30,
                        },
                        "crowbar": {
                            id: 3,
                            category: 1,
                            name: "лом",
                            price: 400,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 60,
                        },
                        "flashlight": {
                            id: 4,
                            category: 1,
                            name: "фонарик",
                            price: 200,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 10,
                        },
                        "golfclub": {
                            id: 5,
                            category: 1,
                            name: "клюшка для гольфа",
                            price: 560,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 70,
                        },
                        "hammer": {
                            id: 6,
                            category: 1,
                            name: "молоток",
                            price: 750,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 80,
                        },
                        "hatchet": {
                            id: 7,
                            category: 1,
                            name: "топор",
                            price: 800,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 40,
                        },
                        "knuckle": {
                            id: 8,
                            category: 1,
                            name: "кастет",
                            price: 350,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 50,
                        },
                        "machete": {
                            id: 9,
                            category: 1,
                            name: "мачете",
                            price: 1000,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 90,
                        },
                        "switchblade": {
                            id: 10,
                            category: 1,
                            name: "складной нож",
                            price: 800,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 80,
                        },
                        "nightstick": {
                            id: 11,
                            category: 1,
                            name: "резиновая дубинка",
                            price: 500,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 80,
                        },
                        "wrench": {
                            id: 12,
                            category: 1,
                            name: "разводной ключ",
                            price: 200,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 70,
                        },
                        "battleaxe": {
                            id: 13,
                            category: 1,
                            name: "боевой топор",
                            price: 700,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 90,
                        },
                        "poolcue": {
                            id: 14,
                            category: 1,
                            name: "бильярдный кий",
                            price: 300,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 40,
                        },
                        "stone_hatchet": {
                            id: 15,
                            category: 1,
                            name: "каменный топор",
                            price: 800,
                            type: "холодное оружие",
                            weight: 0.3,
                            damage: 50,
                        }                    
                    },
                    "2": {
                            "pistol": {
                                id: 16,
                                category: "2",
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 1.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "pistol50": {
                                id: 18,
                                category: "2",
                                name: "крупнокалиберный пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 12,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "snspistol": {
                                id: 19,
                                category: "2",
                                name: "SNS",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "vintagepistol": {
                                id: 20,
                                category: "2",
                                name: "винтажный пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "flaregun": {
                                id: 21,
                                category: "2",
                                name: "сигнальный пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            
                            "revolver": {
                                id: 22,
                                category: "2",
                                name: "револьвер",
                                price: 800,
                                type: "револьвер",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "microsmg": {
                                id: 23,
                                category: "2",
                                name: "MICRO SMG",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "smg": {
                                id: 24,
                                category: "2",
                                name: "SMG",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            
                            "assaultsmg": {
                                id: 26,
                                category: "2",
                                name: "штурмовой ПП",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "minismg": {
                                id: 29,
                                category: "2",
                                name: "скорпион",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            }
                        },
                    "4": {
                            "pumpshotgun": {
                                id:30,
                                category: 4,
                                name: "дробовик",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "sawnoffshotgun": {
                                id:32,
                                category: 4,
                                name: "обрез",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "assaultshotgun": {
                                id:33,
                                category: 4,
                                name: "штурмовой дробовик",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "bullpupshotgun": {
                                id:34,
                                category: 4,
                                name: "булл-пап",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            
                            "heavyshotgun": {
                                id:35,
                                category: 4,
                                name: "тяжелый дробовик",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "autoshotgun" :{
                                id:37,
                                category: 4,
                                name: "автоматический дробовик",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                        },
                    "3": {
                            "assaultrifle": {
                                id:38,
                                category: 3,
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "carbinerifle": {
                                id:39,
                                category: 3,
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "advancedrifle": {
                                id:40,
                                category: 3,
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "specialcarbine": {
                                id:41,
                                category: 3,
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "bullpuprifle": {
                                id:42,
                                category: 3,
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                            "compactrifle": {
                                id:43,
                                category: 3,
                                name: "пистолет",
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                            },
                        },
                    "5": {
                            "mg": {
                                id:44,
                                name: "пистолет",
                                price: 800,
                                category: 5,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                caliber: 12,
                            },
                            "combatmg": {
                                id:45,
                                name: "пистолет",
                                price: 800,
                                category: 5,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                caliber: 12,
                            },
                            "combatmg_mk2": {
                                id:46,
                                name: "пистолет",
                                price: 800,
                                category: 5,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                caliber: 12,
                            },
                            "gusenberg": {
                                id:47,
                                name: "пистолет",
                                category: 5,
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                caliber: 12,
                            }
                        },
                    "6": {
                            "sniperrifle": {
                                id:48,
                                name: "пистолет",
                                category: 6,
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60
                            },
                            "heavysniper": {
                                id:49,
                                name: "пистолет",
                                category: 6,
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60
                            },
                            "heavysniper_mk2": {
                                id:50,
                                name: "пистолет",
                                category: 6,
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60
                            },
                            "marksmanrifle": {
                                id:51,
                                name: "пистолет",
                                category: 6,
                                price: 800,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60
                            },
                            "marksmanrifle_mk2": {
                                id:52,
                                name: "пистолет",
                                price: 800,
                                category: 6,
                                type: "пистолет",
                                weight: 0.3,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60
                            }
                        },
                    "7": {
                        "pistol": {
                                id: 156,
                                category: "2",
                                name: "пистолет",
                                price: 2800,
                                type: "пистолет",
                                weight: 1.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                                wear: "15%"
                            },
                            "sawnoffshotgun": {
                                id:352,
                                category: 4,
                                name: "обрез",
                                price: 4800,
                                type: "пистолет",
                                weight: 0.3,
                                caliber: 9,
                                rateOfFire: 44,
                                accurasy: 50,
                                damage: 60,
                                clip: 10,
                                wear: "35%"
                            },
                        },
                })
        )
    })


]