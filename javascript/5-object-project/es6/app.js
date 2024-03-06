

class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI{

    addBookToList(book) {

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

    deleteBook(target){
        if(target.className === "btn btn-danger bg-danger delete"){
            target.parentElement.remove();
        }
    }

    showAlert(message, className){

        // Create a div
        const div = document.createElement("div");

        // Adding class
        div.className = `alert ${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));


        const alertContainer = document.querySelector(".show-alert");

        alertContainer.appendChild(div);

    }


    

    clearField(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#ISBN").value = "";
    }

}

class Store{
    
    addBook(book){

        let books;

        if(localStorage.getItem("books") === null){
            books = [];
            // console.log(1)
        } else{
            books = JSON.parse(localStorage.getItem("books"));
            // console.log(2)
        }

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));


    }

    displayBooks(){
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
            // console.log(1)
        } else{
            books = JSON.parse(localStorage.getItem("books"));
        }

        books.forEach(function(book){
            const ui = new UI();

            ui.addBookToList(book);
        })
    }

    removeBook(isbn){

        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else{
            books = JSON.parse(localStorage.getItem("books"));
        }

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        })

        localStorage.setItem("books", JSON.stringify(books));
        

    }

}


// Event to domloaded

document.addEventListener("DOMContentLoaded", function(){
    const store = new Store();

    store.displayBooks();
})


// Event Listen for submit
const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", addBook);

function addBook(e) {
    e.preventDefault();

    // Get all the input value
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#ISBN").value;

    // CREATE A BOOK OBJECT

    const book = new Book(title, author, isbn);

    const ui = new UI();

    const store = new Store();

    // Validation
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill all the field", "alert-danger");
    } else {
        ui.addBookToList(book);
        ui.clearField();
        store.addBook(book);
        ui.showAlert("Book added successfully", "alert-success");
    }

}

// Delete Event Listener

document.querySelector("#book-list").addEventListener("click", function(e){
    e.preventDefault();

    // instantiate UI

    const ui = new UI;

    const store = new Store();


    if(e.target.classList.contains("delete")){
        ui.deleteBook(e.target);

        const isbn = e.target.previousElementSibling.innerText;

        store.removeBook(isbn);
        

        ui.showAlert("Book Removed successfully", "alert-success");
    }

   

})




// let test = document.querySelectorAll("tbody tr");

// if(test.length > 0){
//     console.log("Yes i have a book")
// } else {
//     console.log("Book not added yet")
// }
