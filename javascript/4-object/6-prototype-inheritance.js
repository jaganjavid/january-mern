

// ES5

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}


const javid = new Person("Jagan", "Javid");


// customer Object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype method to customer

Customer.prototype = Object.create(Person.prototype);

const javidCustomer = new Customer("Jagan", "Javid", "555-5555-555,", "standard");

console.log(javidCustomer.greeting());





