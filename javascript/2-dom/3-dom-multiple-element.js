

// document.getElementsByClassName();


const items = document.getElementsByClassName("collection-item"); // HTML COLLECTIONS
console.log(items); // HTMLCOLLECTION

// items[0].style.background = "Blue";
// Convert to array

// let lists = Array.from(items);

// lists.forEach(function(element) {
//     console.log(element);
// })

// document.querySelectorAll();

const listItems = document.querySelectorAll("li"); // NODELIST

listItems.forEach(function(element){
    console.log(element);
})

