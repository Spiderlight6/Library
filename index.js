
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
const ofMiceAndMen = new Book("of Mice and Men","John Steinbeck",144, true);
const bornACrime = new Book("Born a Crime","Trevor Noah",304, true);
const brothersKaramazov = new Book("brothers karamazov","Fyodor Dostoevsky",1056, false);

function addBookToLibrary(bookObject){
    books.push(bookObject);
}


addBookToLibrary(theGiver);
addBookToLibrary(ofMiceAndMen);
addBookToLibrary(bornACrime);
addBookToLibrary(brothersKaramazov);

books.forEach((book) =>{
   console.log(book.info());
});