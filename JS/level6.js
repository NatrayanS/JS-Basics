// arryas

const myArrys = [];

// adding elements
myArrys[0] ="one";
myArrys[1] =34;
myArrys[2] = true;
myArrys[3] = "hi";

console.log(myArrys);
console.log(myArrys[2]);
console.log(myArrys.length);


// push adding element at last position
// unshift adding element al first position
myArrys.push("click");
console.log(myArrys);
myArrys.unshift("button");
console.log(myArrys);

// pop deleting last elements
// shift deleting first elements
myArrys.pop();
console.log(myArrys);
myArrys.shift();
console.log(myArrys);

//// adding first and last elements
const lastItem = myArrys.push("hh");
console.log(lastItem);
const firstItem = myArrys.unshift("jj");
console.log(firstItem);


//// deleting first and last elements
/* const deLastItem = myArrys.pop();
console.log(deLastItem);
const deFirstItem = myArrys.shift();
console.log(deFirstItem); */

console.log(myArrys);

// deleting and replace elaments from meddle of the arrys 
// splice

myArrys.splice(1,2,"replace");
console.log(myArrys.reverse())
const newArry = myArrys.slice(1,3,"replace");
console.log(newArry)


//// split and join
const joinArr = myArrys.join();
console.log(joinArr);

console.log(joinArr.split(","));

/// merge arrays
// option 1
/* const newArmrg = myArrys.concat(newArry);
console.log(newArmrg) */

// option 2

const narrMarg = myArrys.concat(newArry);
console.log(narrMarg);

console.log("--------------------------------------------------------------");

const earnMoneyA = ["FrontEnd","BackEnd","FullStock"];
const earnMoneyB = ["AI","BlockChain","DataAnalytics"];
const growMoneyA = ["Stocks","RealEstate","FixedIncome"];
const growMoneyB = ["Options","Futures"];
const giveMoney = ["QualityEducation"];

//single dimention
console.log(earnMoneyA[1],growMoneyA[0]);

//two dimention

const earnMoney =[earnMoneyA,earnMoneyB];
const growMoney =[growMoneyA,growMoneyB];
console.log(earnMoney[0] [1],growMoney[1][1]);

//three dimention

const Dhuddu = [earnMoney,growMoney,giveMoney];

console.log(Dhuddu[0][0][1], Dhuddu[1][1][1]);