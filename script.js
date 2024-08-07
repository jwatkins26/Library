let newBook = document.querySelector('#newBook');
let cancel = document.querySelector('.cancel');
let form = document.querySelector('.popup');

newBook.addEventListener('click', function() {
    document.getElementById('addForm').style.display = 'block';
})

 cancel.addEventListener('click', function(event) {
     document.getElementById('addForm').style.display = 'none';
     document.querySelector('#title').value = '';
     document.querySelector('#author').value = '';
     document.querySelector('#pages').value = '';
    
     event.preventDefault();
 })


// Library
let myLibrary = []

// Book 
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Add Book
function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let addedBook = new Book(title, author, pages, read);
    myLibrary.push(addedBook);
    console.log(addedBook);
}

document.querySelector('#bookForm').addEventListener('submit', function(event){
    event.preventDefault();
    addBook();
})