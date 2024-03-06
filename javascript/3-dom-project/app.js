

// Define UI vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection"); // UL
const clearBtn = document.querySelector(".clear-tasks");




// Load all event listeners

function loadEventsListerners() {

    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks);

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Add a clear Event
    clearBtn.addEventListener("click", clearTask);

    // Add Event to UL
    taskList.addEventListener("click", removeItem);

}

function getTasks(){
   let tasks;

   if(localStorage.getItem("tasks") === null){
     tasks = [];
   } else{
     tasks = JSON.parse(localStorage.getItem("tasks"));
   }

   tasks.forEach(function(task){
      
        // Create a li element
        const li = document.createElement("li");

        // Add className
        li.className = "collection-item";

        // Create text node
        li.appendChild(document.createTextNode(task));

        // Create a link
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add icon
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

   })
}

function addTask(event) {

    event.preventDefault();

    if (taskInput.value === "") {
        alert("fill the filed");

    } else {

        // Create a li element
        const li = document.createElement("li");

        // Add className
        li.className = "collection-item";

        // Create text node
        li.appendChild(document.createTextNode(taskInput.value));

        // Create a link
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add icon
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
        

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = "";


    }

}


function storeTaskInLocalStorage(task){

   
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
        console.log(1);
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(2);
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));


}


function removeItem(event){
   if(event.target.parentElement.className === "delete-item secondary-content"){
     event.target.parentElement.parentElement.remove();

     removeTaskFromLocalStorage(event.target.parentElement.parentElement);
   }
   
}

function removeTaskFromLocalStorage(taskElement){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task , index){
        if(taskElement.innerText === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function clearTask(){
    taskList.innerHTML = "";

    localStorage.clear("tasks");
}

loadEventsListerners();



// console.log(localStorage);

// localStorage.setItem("ourClass", "Web Dev");
// console.log(localStorage.getItem("ourClass"));
// localStorage.removeItem("ourClass");

// <li class="collection-item">
//                 List Item 1
//                 <a href="#" class="delete-item  secondary-content" id="test" title="im Link">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>



// const arr = [1,2,3,4,5];

// const convertArrtoString = JSON.stringify(arr);

// const convertStringToarray = JSON.parse(convertArrtoString);

// console.log(arr);

// console.log(convertArrtoString);
// console.log(convertStringToarray);



// const fruits = ['Apple', "Orange", "Lemon"];

// fruits.splice(1,2);

// console.log(fruits);


// const arr = [1,2,3,4,5];


// console.log(arr);

// const arrToString = JSON.stringify(arr);

// const stringToArr = JSON.parse(arrToString);


// console.log(arrToString);
// console.log(stringToArr);



// function test(){
//     console.log("a");
//     console.log("c");
//     console.log("b");
// }

// test();