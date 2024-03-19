

// By value (Primitive types)

var a = 5;
var b;

b = a;

a = 3;

console.log(a);
console.log(b);


// By reference Type 

var c = {
    greeting:"HI"
}

var d;

d = c;

d.greeting = "Hello";

c = {
    greeting:"Hola"
}

console.log(c);
console.log(d);