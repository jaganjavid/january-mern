

// var person = {};

var person = new Object();

// Property

person["firstName"] = "Jagan";
person["lastName"] = "Javid";
person.age = 26; // ***
person.address = new Object();
person.address.street = "111 main st";
person.address.city = "Chennai";
person.address.state = "TN";

// Method

person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

console.log(person);
console.log(person.address.state);
console.log(person.getFullName())




