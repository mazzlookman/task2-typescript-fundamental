// tabib
// terluka (-5)
// health = 0 => die
// health now = 100

import {Hero} from "./hero-and-resources";

export function decreaseHealth( lossHealth: number, hero: Hero): object {
    const currentHealth: number = hero.health - lossHealth
    if (currentHealth === 0) {
        hero.status = false
    }

    const healthDetails: object = {
        health_details: {
            soldier: hero.name,
            health_before_loss: hero.health,
            loss_health: lossHealth,
            current_health: currentHealth,
            status: hero.status
        }
    }

    hero.health -= lossHealth;

    return healthDetails;
}