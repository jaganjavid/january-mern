

// Define UI vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection"); // UL
const clearBtn = document.querySelector(".clear-tasks");


// Load all event listeners

function loadEventsListerners() {

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Add a clear Event
    clearBtn.addEventListener("click", clearTask);

    // Add Event to UL
    taskList.addEventListener("click", removeItem);

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
        link.className = "delete-item  secondary-content";

        // Add icon
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        taskInput.value = "";


    }

}

function removeItem(event){


   if(event.target.parentElement.className === "delete-item secondary-content"){
     event.target.parentElement.parentElement.remove();
   } 

   
   
}


function clearTask(){
    taskList.innerHTML = "";
}

loadEventsListerners();


// <li class="collection-item">
//                 List Item 1
//                 <a href="#" class="delete-item  secondary-content" id="test" title="im Link">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>