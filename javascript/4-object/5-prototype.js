

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
}


const javid = new Person("Jagan", "Javid");
const akash = new Person("Akash", "Kumar");


Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
}

console.log(javid);

Person.prototype.__proto__.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.log(javid.getFullName());




// console.log(javid, akash);

// console.log(javid.getFullName());
// console.log(akash.getFullName());
// console.log(javid.getFullName());
// console.log(akash.getFullName());


// const arr = [1,2,3,4,5];

// console.log(arr);