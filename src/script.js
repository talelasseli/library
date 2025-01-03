const container = document.querySelector("container");
const dialog = document.querySelector("dialog");
const showbtn = document.querySelector("#addButton");
const closebtn = document.querySelector("#closebtn");
const confirmBtn = document.querySelector("#confirmbtn");
const form = dialog.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

form.addEventListener("submit", (e) => {
  e.preventDefault;
  if (title != "" || author != "" || pages != "") {
    form.submit();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookToLibrary(new book(title, author, pages, read), myLibrary);
    render();
  }
});

showbtn.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

closebtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

const myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook(book, index) {
  let card = document.createElement("card");
  card.classList.add("card");
  let title = document.createElement("div");
  title.classList.add("title");
  let contentContainer = document.createElement("div");
  contentContainer.classList.add("content");
  let content = document.createElement("div");
  content.classList.add("uh")
  let author = document.createElement("div");
  author.classList.add("author");
  let pages = document.createElement("div");
  let read = document.createElement("button");
  read.classList.add("readbtn")
 
  read.addEventListener("click",() => {
    if (read.innerHTML === "Read") {
      read.innerHTML = "Not read";
      read.style.backgroundColor = "#9ca3af";
    } else if (read.innerHTML === "Not read") {
      read.innerHTML = "Reading it";
      read.style.backgroundColor = "#0ea5e9";
    } else if (read.innerHTML === "Reading it") {
      read.innerHTML = "Read";
      read.style.backgroundColor = "#22c55e";
    }

  })
  if (book.read === true) {
    read.checked = true;
    read.innerHTML = "Read";
    read.style.backgroundColor = "#22c55e";
  } else {
    read.innerHTML = "Not read";
    read.style.backgroundColor = "#9ca3af";
  }

  pages.style.marginTop = "5px"
  pages.style.marginBottom = "5px";
  title.innerHTML = book.title;
  
  author.innerHTML = "By " ;
  author.append(book.author)
  pages.innerHTML = book.pages + " Pages ";

  const removebtn = document.createElement("button");
  removebtn.classList.add("removebtn");
  removebtn.addEventListener("click", () => {
    deleteBook(index);
  });

  let text = document.createTextNode("X");
  removebtn.appendChild(text);
  
  content.append(author,pages, read);
  contentContainer.append(content);
  card.append(removebtn, title, contentContainer);
  container.append(card);
}

// [ a,b,c]
// book = a
// index 0

const render = () => {
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    displayBook(book, index);
  });
  container.append(showbtn);
  dialog.close();
};

console.log(myLibrary);

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  render(); // Removes 1 element at the given index
};




addBookToLibrary(
  new book("To Kill a Mockingbird", "Harper Lee", "281", true),
  myLibrary
);
addBookToLibrary(new book("1984", "George Orwell", "328", false), myLibrary);
addBookToLibrary(
  new book("The Great Gatsbyr", " F. Scott Fitzgerald ", "180", true),
  myLibrary
);

render();

