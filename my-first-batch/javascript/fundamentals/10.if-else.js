
// if(something){
//     do something
// } else {
//     do something else
// }

// const id = 100;


// Equal to value

if(100 == "100"){
    console.log("CORRECT")
}else {
    console.log("INCORRECT");
}

// Not Equal to value

if(100 != "100"){
    console.log("CORRECT")
}else {
    console.log("INCORRECT");
}

// Equal to value && type // ***

if(100 === 100){
    console.log("CORRECT")
}else {
    console.log("INCORRECT");
}

if(100 !== 101){
    console.log("CORRECT")
}else {
    console.log("CORRECT")
}

// Test if undefined

let greet;

greet = "Vanakam";

if(typeof greet === "undefined"){
    console.log(`False ${greet}`)
} else {
    console.log(`True ${greet}`)
}

// Greater or less than

if(100 <= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}


// if else

const color = "red";

if(color === "red"){
    console.log("Color is red");
} else if(color === "blue"){
    console.log("Color is blue");
} else {
    console.log("No matched color");
}


// Logical Operator
const name = "Javid";
const age = 65;

// And - && check the both value

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teen`);
} else {
    console.log(`${name} is a adult`);
}

// OR - || check only one true or false

if(age < 16 || age > 60){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} can not run the race`);
}

// Ternary Operator

console.log(100 === 101 ? "CORRECT" : "INCORRECT");