// scope var, let and const

// global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);


// local scope 26th line also
{
    var x = 6;
    let y =7;
    const z = 8;

    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
}

// local scope // function scope

function myFunc() {
    const z = 9;
    var x = 77;
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    if(true){
        let y= 13;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
}
myFunc()
console.log(x);
console.log(y);
console.log(z);
