
const myLibrary = [];


// create a constructor to that create books
function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === true || read === "true";

    this.id = crypto.randomUUID();
    
};

// function to create a book 
function addBookToLibrary(title,author,pages,read){
    let book = new Book(`${title}`,`${author}`,`${pages}`,`${read}`);

    // add the book into an array
    myLibrary.push(book);
}

// manually adding books to display 
addBookToLibrary("The Giver","Lois Lowry",179,true);
addBookToLibrary("of Mice And Men","Jhon Steinbeck",144,true);
addBookToLibrary("born a Crime","Trevor Noah",304,true);
addBookToLibrary("brothers Karamazov","Fyodor Dostoevsky",1056,false);



function displayBooks(array) {
    const container = document.getElementById("container");
    container.textContent = "";
    
    array.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        let readStatus;
        if (book.read) {
           readStatus = "Yes";

        } else {
            readStatus = "No";
        }
        
       const cardText = "Title: " + book.title + "\n" +
                        "Author: " + book.author + "\n" +
                        "Pages: " + book.pages + "\n" + 
                        "Read it? " + readStatus;

    
        card.textContent = cardText;
        
        container.appendChild(card); 
        
        
    });
};

displayBooks(myLibrary);


// create a dialog to add book
const dialog = document.querySelector("dialog");
const openDialog = document.getElementById("openBtn");
const closeDialog = document.getElementById("closeBtn");

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () =>{
    dialog.close();
});


const form = document.getElementById("form");
form.addEventListener("submit",(event)=> {
        event.preventDefault();
        const titleValue = document.getElementById("title").value;
        const authorValue = document.getElementById("author").value;
        const pagesValue = document.getElementById("pages").value;
        const readValue = document.getElementById("read-or-not").checked;
        
        addBookToLibrary(`${titleValue}`,`${authorValue}`,pagesValue,readValue);        
        displayBooks(myLibrary);
        dialog.close();
});


