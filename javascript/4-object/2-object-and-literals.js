
var person = {
    firstName: "Jagan",
    lastName: "Javid",
    age:26,
    address:{
        street: "222 main st",
        city: "Chennai",
        state: "TN"
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}


console.log(person.getFullName());
