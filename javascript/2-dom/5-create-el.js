// Create Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add Id
// li.id = "test";

// Add Attribute
// li.setAttribute("id", "test")

// Create a text node 
li.appendChild(document.createTextNode("Hello world"));

// Create a new link element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

document.querySelector(".collection").appendChild(li);