

// Callback - a function that is passed as an argument to another function

// used to handle a asynchronous operations:
    // 1. Reading a file
    // console.log("i read file");
    // 2. Network request
    // 3. Intrating with database

    // Hey when you're done , call this next



// function sayHiLater(){

//     var greeting = "HI";

//     setTimeout(function(){
//       console.log(greeting);
//     }, 3000);

// }    


// sayHiLater();

function tellMeWhenDone(callback){

    var a = 1000;
    var b = 2000;

    callback();

    console.log(a);
    console.log(b);

}

tellMeWhenDone(function(){

    // console.log("Hello")
   setTimeout(function(){
    console.log("Im Done");
   }, 0)
})




// document.addEventListener("click", function(){
//     console.log("Hello");
// })