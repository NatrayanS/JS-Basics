// if Statment
console.log("----------if statement----------")
// example

let student = "Kindly give more updates and topic";
let bannedStudent = false;
let advanceSyllbus = false;
let reply;
if (bannedStudent){
    reply = "your banned";
}
else if (student && advanceSyllbus){
    reply = `qustion is ${student}. answar is : after basic complete only, sure.. runing on way`
}
else if (student){
    reply = `qustion is ${student}. answar is : sure.. runing on way`
}
else{
    reply = `qustion is ${student}. answar is : sorry.. will update soon`
}
console.log(reply);
console.log("---------------------------------------------")
console.log("-------Example--------")
let testScore = 98;
let gread;
let attandenceIsAbesnt = false;
if (attandenceIsAbesnt){
    gread = "RA"
}
else{
    if (testScore>=90){
        gread = "Supper.....!"
    }
    else if (testScore>=75){
        gread = "Good...!"
    }
    else if (testScore>=50){
        gread = "Average.!"
    }
    else if (testScore>=35){
        gread = "Pass"
    }
    else{
        gread = "fail"
    }
}
console.log(gread);


console.log("-------------------------------------------");

console.log("----------Switch Statement---------");

// switch statement
// switch(expressions or values){
  //  case choice1:
        // run code;
        //break;
    //case choice1:
    // run different code;
      //  break;
      //  default:
            // run this code
//} */

const day = 6;
switch (day) {
    case 0:
        console.log("sunday");
        break; 
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuseday");
        break;
    case 3:
        console.log("wendnesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("you have not entered a date");
}

console.log("--------------------------------------------------------");
console.log("------small game-------");
console.log("--- switch statement with if statement");
//rock, paper and scissors

let player1 = "Paper";
let computer = "Rock";

switch(player1){
    case computer:
        console.log("Tie..!");
        break;
    case "Rock":
        if (computer === paper){
        console.log("Computer Wins....!");
        }else {
            console.log("Player Wins...!");
        } 
        break;
    case "Paper":
        if (computer === "Scissior"){
        console.log("Computer Wins....!");
        }else {
            console.log("Player Wins...!");
        }
        break;
    case "Scissior":
        if (computer === "Rock"){
        console.log("Computer Wins....!");
        }else {
            console.log("Player Wins...!");
        }
}


console.log("----------------------------------------------------------");
console.log("------ternary operator------");

let subscriber;
let response = subscriber ? "Welcome" : "Kindly Subscribe";
console.log(response);

let Mark = 9;
let Medel = Mark >= 95 ? "gold" : Mark >= 90 ? "Silver" : Mark >= 85 ? "Bronze" : "Not Elegible" ;
console.log(Medel);


// rock, paper and scissors in ternary operator 

let ramesh = "Scisior";
let suresh = "papr";
let rslt = ramesh === suresh ? "tie...!" :
    ramesh === "rok" && suresh === "papr" ? "suresh win...!" :
    ramesh === "papr" && suresh === "Scisior" ? "suresh win...!" :
    ramesh === "Scisior" && suresh === "rok" ? "suresh win...!" :
    "ramesh win....!" ;
console.log(rslt);