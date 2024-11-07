
// create a constructor to that contain books
function Books(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info =  function(){
        return `${this.title} by ${author}, ${pages} pages, ${read}`;
    };

};

