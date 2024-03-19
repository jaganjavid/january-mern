

function greet(firstName, lastName, language){
    return `${firstName} ${lastName} ${language}`;
}


function tamilGreet(language){
   return greet("Jagan", "Javid", language);
}

function englishGreet(language){
    return greet("Jagan", "Javid", language);
}


console.log(tamilGreet("Vanakam"));
console.log(englishGreet("Hello"));




