console.log("hello world");
console.log("------------------------------------------------------------");
//learn var,let and const
//its called commend

console.log("------string------");

myVeriable = "Mathematics";

console.log(myVeriable.length);

// string methods
// charAt its start from 0
console.log(myVeriable.charAt(3));
//indexof means 1st string position
console.log(myVeriable.indexOf("at"));
// lastIndexOf means last string position
console.log(myVeriable.lastIndexOf("at"));
//slice means use to starting value to ending value
console.log(myVeriable.slice(4,7));
// uppercase/lowercase
console.log(myVeriable.toUpperCase());
// includes ita boolean sysntex true or false
console.log(myVeriable.includes("ty"));
// split means spliting string
console.log(myVeriable.split("e"));
//join means includes any string
console.log(myVeriable.split("").join(" "));


// if need more string clarifications find from MDN(https://developer.mozilla.org/)

console.log("-------------------------------------------------------")
console.log("-----Number-----");
let myStrigNumber = "76";
let myNumber = 76;
let myFlote = 76.019288982;

console.log(myNumber===myFlote);
//string to number convert
// true =1 , false = 0;
console.log(typeof(myStrigNumber));
console.log(myStrigNumber);
console.log(Number(myStrigNumber));

// Number Methods
// isinteger 
// example .integer(); inside bracat value is call for passing the value
console.log(Number.isInteger(myFlote));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myFlote));
// parseint means ignore the flote value
console.log(Number.parseInt(myFlote));

// if need to control floting value use to toFixed
// after used toFixed method number convert to autometicaly string
console.log(myFlote.toFixed(2));

//isNaN and Number.isNan

console.log(Number.isNaN(76));
console.log(isNaN(45));
console.log(Number.isNaN("jhdbwyb"));
console.log(isNaN("kjchdwbc"));

console.log("--------------------------------------------------");
console.log("math method")
//Math Properties

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.round(6.56));
console.log(Math.ceil(6.76));
console.log(Math.floor(6.76));
// math.pow its call power

console.log(Math.pow(7,3));

//min max
console.log(Math.min(1,2,3,4,6,9,16,27,44,22,11,222));
console.log(Math.max(1,2,3,4,6,9,16,27,44,22,11,222));

//random its giving 0 to 1 only
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10+1));
// if need 10
console.log(myVeriable.charAt(Math.random()*myVeriable.length));