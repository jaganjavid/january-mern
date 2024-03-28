

// https://jsonplaceholder.typicode.com/users

document.querySelector("#button-1").addEventListener("click", getText);


function getText(){
    fetch("text.txt").then(function(response){
        return response.text();
    }).then(function(data) {
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })
}


