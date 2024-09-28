import {addExperience, addGold} from "./hero-journey";
import {decreaseHealth} from "./healing-mission";
import {goldCollected, kingdomResources, mainHero} from "./hero-and-resources";
import {missionSummary} from "./mission-summary";

// Deskripsi Soal 2 - Fantasia Kingdom

const goldDetails: object = addGold(1500, mainHero, kingdomResources);
console.info("Gold Details");
console.log(goldDetails);

const expDetails: object = addExperience(75, mainHero);
console.info("Experience Details");
console.log(expDetails);

const healthDetails: object = decreaseHealth(5, mainHero);
console.info("Health Details");
console.log(healthDetails);

const missionSummaryOfHero: object = missionSummary(mainHero, goldCollected);
console.info("Mission Summary");
console.log(missionSummaryOfHero);

