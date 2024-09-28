// emas + 1500
// pengalaman + 75

import {Hero, KingdomResources} from "./hero-and-resources";

export function addGold(extraGold: number, hero: Hero, kingdomResources: KingdomResources): object {
    const currentGold: number = kingdomResources.gold + extraGold;
    const goldDetails: object = {
        gold_details: {
            extra_gold: extraGold,
            collected_by: hero.name,
            amount_gold_before: kingdomResources.gold,
            total_gold_current: currentGold
        }
    }

    kingdomResources.gold += extraGold;

    return goldDetails;
}

export function addExperience(newExperience: number, hero: Hero): object {
    const currentExp: number = hero.experience + newExperience;
    const expDetails: object = {
        experience_details: {
            hero_name: hero.name,
            experience_points_before: hero.experience,
            experience_points_new: newExperience,
            total_experience_points: currentExp
        }
    }

    hero.experience += newExperience;

    return expDetails;
}