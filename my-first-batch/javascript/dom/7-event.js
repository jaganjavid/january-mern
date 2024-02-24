

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     // alert("Hello got a click");
//     console.log("Hello got a click");
// })


let count = 0;
const clearBtn = document.querySelector(".clear-tasks");
document.querySelector("#task-title").innerText = count;



clearBtn.addEventListener("click", onClick);

function onClick(event){

    // count = count + 1;
    // count++;
    count += 1;

    document.querySelector("#task-title").innerText = count;

    const card = document.querySelector(".card-action");

    const cardClass = card.classList;

    if(count % 2 === 0){
        cardClass.remove("rest-2");
        cardClass.add("rest")
    } else {
        cardClass.remove("rest");
        cardClass.add("rest-2")
    }

}




