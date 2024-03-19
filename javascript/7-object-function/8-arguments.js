

function greet(firstName, lastName, language){


    if(arguments.length === 0){
      
        console.log("Missing parameters");
        console.log("-----------------");
        return;
    }

    if(arguments[0] === "Jagan"){
        console.log("Yes");
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);

   

}

greet("Jagan", "Javid", "Tamil");



