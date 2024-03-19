
// Function Statment

function greet(name){
    console.log("Hello " + name);
}

greet("Jagan");

// Function Expression

var greetFunc = function(name){
    console.log("Hello " + name);
}

greetFunc("Javid");

// hi();

// Using an immediately invoked function expression




(function(name) {
    var greeting = "Insied IIFE : Hello";

    // greeting = "Test";

    console.log(greeting + " " + name);
})("Jagan");

var greeting = "Vanakam";

console.log(greeting);