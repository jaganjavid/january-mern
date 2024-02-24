
const name = "Javid";
const age = 26;
const job = "Web Dev";
const city = "Chennai";


let val;

// Without Template Strings

val = "My name is " + name + " " + "im" + " " + age + " " + "my job is" + " " + job + " " + "Im from" + " " + city ;

// With Template Strings  // (ES6)

val = `My name is ${name} im ${age} my job is ${job} im from ${city},`;

console.log(val);