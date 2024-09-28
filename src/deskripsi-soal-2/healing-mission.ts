// tabib
// terluka (-5)
// health = 0 => die
// health now = 100

import {Hero} from "./hero-and-resources";

export function decreaseHealth( lossHealth: number, hero: Hero): object {
    const currentHealth: number = hero.health - lossHealth
    const healthDetails: object = {
        health_details: {
            soldier: hero.name,
            health_before_loss: hero.health,
            loss_health: lossHealth,
            current_health: currentHealth
        }
    }

    hero.health -= lossHealth;

    return healthDetails;
}