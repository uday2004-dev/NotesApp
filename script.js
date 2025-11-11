let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", createNote);

function createNote() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/images/delete.png";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  updateStorage();
}

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("keyup", function (e) {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

document.addEventListener("keydown",event=>{
   if(event.key==="Enter"){
      document.execCommand("insertLineBreak")
      event.preventDefault()
   }
})









