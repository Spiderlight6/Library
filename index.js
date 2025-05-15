
const myLibrary = [];


// create a constructor to that create books
function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    

    this.info =  function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };

};

/*
const theGiver = new Book("The Giver","Lois Lowry",179, true);
const ofMiceAndMen = new Book("of Mice and Men","John Steinbeck",144, true);
const bornACrime = new Book("Born a Crime","Trevor Noah",304, true);
const brothersKaramazov = new Book("brothers karamazov","Fyodor Dostoevsky",1056, false);
*/


function addBookToLibrary(title,author,pages,read){
    let bookName = new Book(`${title}`,`${author}`,`${pages}`,`${read}`);
    
    myLibrary.push(bookName);
}


addBookToLibrary("The Giver","Lois Lowry",179,true);
addBookToLibrary("of Mice And Men","Jhon Steinbeck",144,true);
addBookToLibrary("born a Crime","Trevor Noah",304,true);
addBookToLibrary("brothers Karamazov","Fyodor Dostoevsky",1056,false);


// wirte a function that does below 
const bookTitle = document.getElementById("title")
bookTitle.textContent = `${myLibrary[0].title}`

const bookAuthor = document.getElementById("author")
bookAuthor.textContent = `${myLibrary[0].author}`

const bookPages = document.getElementById("pages")
bookPages.textContent = `${myLibrary[0].pages}`

// create a functio to add a book 

function addBook(){
    
}