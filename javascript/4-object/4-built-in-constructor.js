
// String

const name1 = "Jagan";
let name2 = new String("Jagan");


// if(name1 === name2){
//     console.log("Yes Im macthing")
// } else {
//     console.log("Im Not macthing")
// }


// Number

const num1 = 0;
const num2 = new Number(1);

// console.log(num1);
// console.log(typeof num1);
// console.log(num2);
// console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(false);

// console.log(bool1);
// console.log(typeof bool1);
// console.log(bool2);
// console.log(typeof bool2);

// Function

const getSum1 = function(x, y){
    return x + y;
}

// console.log(getSum1(5,5));

const getSum2 = new Function("x","y", "{return x + y}");

// console.log(getSum2(10, 10));

// Object
const obj1 = {name:"jagan"};
const obj2 = new Object({name:"javid"});


// console.log(obj1)
// console.log(obj2)

// Array
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

console.log(arr1)
console.log(arr2)