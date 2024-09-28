import {GoldCollected, Hero} from "./hero-and-resources";

export function missionSummary(hero: Hero, goldCollected: GoldCollected): object {
   return {
      mission_summary: {
         hero_name: hero.name,
         gold_collected: goldCollected.extra_gold,
         experience_points: hero.experience,
         current_health: hero.health,
         status: hero.status
      }
   }
}