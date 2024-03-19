
var greeting = "Hola";


function greet(whattosay){

    var greeting = "Vanakam";

    console.log(greeting);

    return function(name){
        console.log(whattosay + " " + name);
    }

}

var sayHi = greet("Hi");

sayHi("Javid");


console.log(greeting);



// function test(){
//     return function(){
//         console.log("Hello");
//     };
// }

// var myTest = test();

// myTest();
