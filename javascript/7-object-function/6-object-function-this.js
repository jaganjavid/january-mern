
// var b = 5;

function a(){
    var b = "Hello";
    console.log("Statement", this);
    console.log(b);
    this.newVariable = "Vanakam";
}

// a();

// Function expression
var b = function(){
    console.log("EXP", this);
}

// b();




var c = {
    name: "The c object",
    log: function(){
        console.log(this); // its point to the c object

        var self = this;

        var setName = function(newName){
            self.name = newName;
        }

        setName("Updated c Object");
    }
}

c.log();
console.log(c.name);






