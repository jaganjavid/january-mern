

// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();

// Arrow Function

// const sayHello = () => {
//     console.log("Hello");
// }

// sayHello();

// One line function does not need a braces

// const sayHello = () => console.log("Hello");

// one live return

// const sayHello = () => "Hello";

// Return a object
// const sayHello = () => ({msg:"Hello"});

// Single param doest not need a parenthesis

// const sayHello = name => console.log(`Hello ${name}`);

const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

// sayHello("Jagan", "Javid");


const users = ["Javid", "Jagan", "Akash"];


users.forEach(function(user){
    console.log(user);
})

users.forEach((user) => {
    console.log(user);
})

users.forEach(user => console.log(user));

users.forEach((user, index) => {
    console.log(`${index} - ${user}`);
});