// Karakter Utama
export type Hero = {
    name: string;
    age: number;
    status: boolean;
    experience: number;
    health: number
}

export const mainHero: Hero = {
    name: "Arion",
    age: 30,
    status: true,
    experience: 0,
    health: 100
}

// Sumber Daya Kerajaan
export type KingdomResources = {
    gold: number;
    foods: number;
    soldiers: number
}

export let kingdomResources: KingdomResources = {
    gold: 5000,
    foods: 120,
    soldiers: 200
}

// Gold Collection
export type GoldCollected = {
    extra_gold: number,
    collected_by: Hero
}

export let goldCollected: GoldCollected = {
    extra_gold: 1500,
    collected_by: mainHero
}

// Karakter Utama
// export const heroName: {
//     name: string;
//     age: number;
//     status: boolean;
// } = {
//     name: "Arion",
//     age: 30,
//     status: true
// }
//
// // Sumber Daya Kerajaan
//
// export let kingdomResources: {
//     gold: number;
//     foods: number;
//     soldiers: number;
// } = {
//     gold: 5000,
//     foods: 120,
//     soldiers: 200
// }


