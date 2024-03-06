
let val;

// Number to String
val = String(555);
val = String(5 + 5);

// Bool to String
val = String(true);

// Arr to array
val = String([1,2,3,4,5,"Hello"]);

// String to Number
val = Number("5 + 5"); // Not a Number


// Bool to Number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello"); // NaN
val = Number([1,2,3,4,5,"Hello"]); // NaN

val = parseInt("100.35");
val = parseFloat("100.35");


console.log(val);
console.log(typeof val);