 /**let player_1 = "Charles";
var player_choice = prompt("What is your pick?  Rock  Paper or Scissors");
console.log("hello");
while (player_choice != ("Rock"|| "Paper"||"Scissors")){
    player_choice=prompt("Invalid selection , please chose again ");
}


console.log("We are out of The loop now !");

*/
const choices = ["Rock","Paper","Scissors"];



function Computer_Choice(){
    return choices[Math.floor(Math.random() * choices.length)];

}
let player_choice = prompt("What is your pick?  Rock  Paper or Scissors");


function play_round(player_choice , computer){
    game_over = false;
    Player_score = 0;
    Computer_score = 0;
    if (player_choice?.toLowerCase() === computer?.toLowerCase()){
        console.log("This round is a Tie!");
    }
    else if (player_choice?.toLowerCase() === "Rock" && computer?.toLowerCase() === "Paper"){
        console.log("Paper beats Rock computer wins! ");
        Computer_score++;
        console.log("The computer's score is " + Computer_score);
    }
    else if (player_choice?.toLowerCase() === "Paper" && computer?.toLowerCase() === "Rock"){
        console.log("Paper beats Rock Player wins! ");
        Player_score++;
        console.log(Player_score);
    }
    else if (player_choice?.toLowerCase() === "Rock" && computer?.toLowerCase() === "Scissors"){
        console.log("Rock beats Scissors Player wins! ");
        Player_score++;
        console.log(Player_score);
    }
    else if (player_choice?.toLowerCase() === "Scissors" && computer?.toLowerCase() === "Rock"){
        console.log("Rock beats Scissors computer wins! ");
        Computer_score++;
        console.log(Computer_score);
    }
    else if (player_choice?.toLowerCase() === "Paper" && computer?.toLowerCase() === "Scissors"){
        console.log("Scissors beats Paper computer wins! ");
        Computer_score++;
        console.log(Computer_score);
    }
    else if (player_choice?.toLowerCase() === "Scissors" && computer?.toLowerCase() === "Paper"){
        console.log("Scissors beats Paper Player wins! ");
        Player_score++;
        console.log(Player_score);
    }
}
play_round(player_choice,Computer_Choice())

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