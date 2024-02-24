
const firstName = "Jagan";
const lastName = "Javid";
const age = 26;
const str = "Hello im Jagan and im a web dev";
const tags = "Web Dev, UI/UX, Cooking";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " Doe";
val += " Doe";

val = "Hello, My name is " + firstName + " and I am " + age;

// Concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get a index of index
val = firstName[0];
val = firstName[firstName.length - 1];

// Get a length of string
val = firstName.length;

// CharAt();
val = firstName.charAt(2);

// Slice()
const fruit = "Apple";

val = fruit.slice(1,3);

// Spilt();
// val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("Jagan", "Javid");

// Include
val = str.includes("Javid");

console.log(val);