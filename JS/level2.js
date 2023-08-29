 console.log("----USER INPUT-----");
/*
// alart is not collected any data(undefined)

let myCustomers = alert("Welcome To Special Exprience...!");
console.log(myCustomers);

// confirm is collecting data for true or false
let myExpriencedCustomer = confirm("Welcome Again...!");
console.log(myExpriencedCustomer);

// prompt is collicting commends
// ?? is null coalescing operator
let custFdbk = prompt("about your exprinces");
if(custFdbk){
console.log(custFdbk ?? "not given");
}
else {
    console.log("not given")
};
 */

// basic of user input

let playGame = confirm("shall we play rock, paper or scissors..?");
    if (playGame){
        let playerChoice = prompt("kindly enter rock, paper or scissors..");
        if(playerChoice){
            let player1 = playerChoice.trim().toLowerCase();
            if (
                player1 === "rock" || player1 === "paper" || player1 === "scissors"
            ){
                let computerChoice = Math.floor(Math.random()*3 + 1);
                let computer = 
                computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper" :
                "scissors";

                let result =
                player1 === computer ? "tie game....!" :
                player1 === "rock" && computer === "paper" ? "computer win..." :
                player1 === "paper" && computer === "scissors" ? "computer win..." :
                player1 === "scissors" && computer === "rock" ? "computer win..." :
                "player1 win..!"
                alert(result);
                let playAgain = confirm("Play Again...?");
                playAgain ? location.reload() : alert("thaks for playing");
            }
            else{
                let ok = confirm("You didn't Enter rock, paper or sciessors");
                ok ? location.reload() : alert("thaks for played");
            }
        }
        else{
            alert("i guess you changed your mind, may be next time")
        }
    }
    else{
        alert("ok, maybe next time");
    }