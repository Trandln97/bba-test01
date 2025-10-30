let playerName = "Mario";
let currentLives = 3;
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

let averageCoins = (coinsLevel1 + coinsLevel2 + coinsLevel3) / 3;

console.log("Average coins:", averageCoins);

let remainder = (coinsLevel1 + coinsLevel2 + coinsLevel3) % 3;

console.log("Remainder when total coins divided by 3:", remainder);
