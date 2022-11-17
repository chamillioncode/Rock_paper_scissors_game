 /**let player_1 = "Charles";
var player_choice = prompt("What is your pick?  Rock  Paper or Scissors");
console.log("hello");
while (player_choice != ("Rock"|| "Paper"||"Scissors")){
    player_choice=prompt("Invalid selection , please chose again ");
}


console.log("We are out of The loop now !");

*/
const choices = ["rock", "paper", "scissors"];
 
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
 
let playerScore = 0;
let computerScore = 0;
 
function play_round() {
  while (playerScore < 3 && computerScore < 3) {
    const playerInput = prompt("What is your pick? Rock Paper or Scissors");
    const player = playerInput?.toLowerCase();
    const computer = computerChoice().toLowerCase();
    if (player !== 'rock' && player !== 'scissors' && player !== 'paper') {
      console.log('Player input must be either rock, paper, or scissors');
      continue;
    }
    if (
      (player === "scissors" && computer === "paper") ||
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock")
    ) {
      console.log(`${player} vs ${computer} Player wins!`);
      playerScore++;
    }
    if (
      (computer === "scissors" && player === "paper") ||
      (computer === "rock" && player === "scissors") ||
      (computer === "paper" && player === "rock")
    ) {
      console.log(`${player} vs ${computer} Computer wins`);
      computerScore++;
    }
    console.log(`player score:${playerScore} computer score:${computerScore}`);
  }
}
play_round();
console.log(playerScore === 3 ? 'Player Wins!' : 'Computer wins!');
console.log("Game is over");
 /**let comp = "Computer";

const choices = ["Rock","Paper","Scissors"];
console.log(choices[Math.floor(Math.random() * choices.length)]);
function Computer_Choice(){
    return choices[Math.floor(Math.random() * choices.length)];

}
let answer1 = prompt(player_choice);
let answer2 = Computer_Choice();


if (answer1 === answer2 ) {
    // alert for A
    console.log("Tie!");
}
 */