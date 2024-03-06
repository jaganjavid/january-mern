
// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {

    // Add Book to list 
    UI.prototype.addBookToList = function (book) {

        {/* <tbody> */}
        const list = document.querySelector("#book-list");

        //    Create a tr element

        const row = document.createElement("tr");

        row.innerHTML = `
            <th>${book.title}</th>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="btn btn-danger bg-danger delete">X</td>
        `;

        list.appendChild(row);

    }

    UI.prototype.deleteBook = function(target){

        console.log(target);
        if(target.className === "btn btn-danger bg-danger delete"){
            target.parentElement.remove();
        }
    }

    UI.prototype.clearField = function(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#ISBN").value = "";
    }


}

// Event Listen for submit
const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", addBook);


function addBook(e) {
    e.preventDefault();

    // Get all all the input value
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#ISBN").value;

    // CREATE A BOOK OBJECT

    const book = new Book(title, author, isbn);

    const ui = new UI();

    // Validation
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all the field");
    } else {
        ui.addBookToList(book);
        ui.clearField();
    }

}

// Delete Event Listener

document.querySelector("#book-list").addEventListener("click", function(e){
    e.preventDefault();

    // instantiate UI

    const ui = new UI;

    ui.deleteBook(e.target);


})
