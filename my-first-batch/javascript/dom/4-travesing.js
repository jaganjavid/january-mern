

let val;

const list = document.querySelector(".collection"); // UL
const listItem = document.querySelector("ul>li:first-child");
const listItemOfLast = document.querySelector("ul>li:last-child");


val = list;
val = list.childNodes;
val = list.childNodes[2].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 3 - Text Node
// 8 - Comment

// Get the children of element
val = list.children; //*** 
val = list.children[0];
val = list.children[1];
val = list.children[1].innerText;
val = list.children[1].children[0].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild; // ***

// LastChild
val = list.lastChild;
val = list.lastElementChild;

// Get a Parent Element
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

val = list.parentElement;

// Get a Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// Get a Previous Sibling
val = listItem.previousElementSibling;
val = listItemOfLast.previousElementSibling;

console.log(val); 