// createCharacters()
function createCharacters() {

    const characters = [
        { name: "Mario", level: 4, health: 400 },
        { name: "Luigi", level: 3, health: 300 },
        { name: "Peach", level: 5, health: 450 },
        { name: "Bowser", level: 9, health: 800 },
    ];
    const charactersPowerUp = characters.map((char) => {
        return {
            name: char.name.toUpperCase(),
            level: char.level * 2,
            health: char.health * 3,
        };
    });

    const possibleWinners = charactersPowerUp.filter((char) => char.health > 1000);
    // Test
    console.log("Characters:", characters);
    console.log("Characters Power-Up:", charactersPowerUp);
    console.log("Possible Winners:", possibleWinners);
    return { characters, charactersPowerUp, possibleWinners };
}
// Test function
createCharacters();

//----------------
// printLeaderboard()
function printLeaderboard(players) {
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  const medals = ["Gold", "Silver", "Bronze"];

  console.log("LEADER BOARD");
  sortedPlayers.forEach((player, index) => {
    const rank = index + 1;
    const medal = medals[index] || ""; 
    console.log(`${rank}. ${medal} ${player.name} - ${player.score} score`);
  });
}

// Test
const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 850 },
  { name: "Peach", score: 1200 },
  { name: "Bowser", score: 700 },
  { name: "Yoshi", score: 950 },
];
// Test function
printLeaderboard(players);
