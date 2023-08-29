console.log("------Function-------");
// function

function add(num1,num2){
    console.log(num1+num2);
}
function sub(num1,num2){
    console.log(num1-num2);
}
function mul(num1,num2){
    console.log(num1*num2);
}
function dive(num1,num2){
    console.log(num1/num2);
}
add(8,3);
sub(8,3);
mul(8,3);
dive(8,3);

console.log("--------------------------------------------");

// if giveing one num only
function add(num1,num2){
    if (num2===undefined){
        return num1;
    }
    return num1+num2;
}

console.log(add(8));
console.log("-------------------------------------------------");

// user name taken from email

//without function option
let email = "s.natrayan06ayan96@gmail.com";
console.log(email.slice(0,email.indexOf("@")));

//with function 

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"))
}
console.log(getUserNameFromEmail(email));

console.log("-----------------------------------------------------");
// toPropreCase
// option1

function toPropreCase(nam){
    return nam.charAt(0).toUpperCase()+ nam.slice(1).toLowerCase()
}
let nam = "naTRayan";
console.log(toPropreCase(nam));

/* const toPropreCase = (nam) => {
    return nam.charAt(0).toUpperCase()+ nam.slice(1).toLowerCase()
}
let nam = "naTRayan";
console.log(toPropreCase(nam)); */