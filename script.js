
function openForm() {
    document.getElementById('addForm').style.display = 'block'
}

function closeForm() {
    document.getElementsByClassName('cancel').style.display = 'none'
}

// Library
let myLibrary = []

// Book 
function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}