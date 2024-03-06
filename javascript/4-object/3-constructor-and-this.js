

function Person(firstName,lastName){

  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function(){
      return this.firstName + " " + this.lastName;
  }

}


const person1 = new Person("Jagan", "Javid");
const person2 = new Person("Arun", "Kumar");


console.log(person1.getFullName());
console.log(person2.getFullName());


// console.log(this);


// function test(){
//     console.log(this);
// }

// test();

// const x = new test();

// console.log(x);

// const obj = {
//     test:"test from obj",
//     objTest: function(){
//         console.log(this);
//     }
// }

// obj.objTest();









