


const ul = document.querySelector("ul");
const input = document.querySelector("#category-input");


const buttonArr = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];


document.addEventListener("DOMContentLoaded", function () {


    buttonArr.forEach(function (item) {
        const btnWrapper = document.querySelector(".all-btn");

        const btn = document.createElement("button");
        btn.className = "btn btn-dark category-btn";

        btnWrapper.style.display = "flex";
        btnWrapper.style.gap = "10px";

        btn.innerText = item;

        btnWrapper.appendChild(btn);

    });

    const allbtn = document.querySelectorAll(".category-btn");


    allbtn.forEach(function (btn) {
      
        btn.addEventListener("click", function (e) {
            input.value = e.target.innerText;
        })
    })

});


function xhrFunction(url){

    const xhr = new XMLHttpRequest();

    console.log("Hai");

    xhr.open("GET", url, true);

    xhr.onload = function(){
        if(this.status === 200){
            const result = JSON.parse(this.responseText);

            // console.log(result.value);

            const {value} = result;

            const li = document.createElement("li");

            li.appendChild(document.createTextNode(value));

            ul.appendChild(li);

            input.value = "";
        }
    }

    xhr.send();

}

document.getElementById("joke-form").addEventListener("submit", getJokes);



function getJokes(e){
    e.preventDefault();


    const getInput = input.value;

    if(getInput === ""){
        alert("Please select category");
    } else {    
    
        const getCategories = `https://api.chucknorris.io/jokes/random?category=${getInput}`;

        xhrFunction(getCategories);

    }

}