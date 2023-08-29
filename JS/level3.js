// loops
// while loop // do while loop // for loop
console.log("--------loops-------");
// while loop
console.log("--------while loops-------");
let i = 1;
while( i <= 5){
    console.log(i);
    i++;
}

console.log("--------do while loops-------");

let j = 5;
do{
    console.log(j);
    j++;
}
while( j <= 5);


console.log("--------for loops-------");
for (let k = 5; k >0; k--){
    console.log(k);
}

let name = "Natrayan";
for (let a = 0; a <= name.length; a++){
    console.log(name.charAt(a));
}

console.log("-----nested loop-----");

for(let q= 0; q < 3; q++){
    for(let w= 0; w < 3; w++){
        console.log(q,w);
    }
}

console.log("-----break loop-----");
 
 for (let e = 0; e<10;e++){
    if (e === 3){
        break;
    }
    console.log(e);
 }
 

 console.log("-----continue loop-----");
 let content = ' ';
 for (let f = 0; f<10;f++){
    if (f === 3){
        continue;
    }
    content = content+f;
 }
 console.log(content);
