
const books = [];


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


const theGiver = new Book("The Giver","Lois Lowry",179, true);

function addBookToLibrary(bookObject){
    books.push(bookObject);
}


addBookToLibrary(theGiver);


