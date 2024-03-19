

var arr = [
    1,
    true,
    "Javid",
    ["sports", "music"],
    {
        street:"Main road"
    },
    function(name){
        var greeting = "Hello";
        console.log(greeting + " " + name); 
    },
    undefined,
    null
]


console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3][1]);
console.log(arr[4].street);
arr[5]("Jagan");
console.log(arr[6], arr[7]);


const sayHi = function(){
    console.log("Hello");
}

sayHi();


var arr = [1,2,3];

var str = "hello";


console.log(arr.length)
console.log(str.length)


