document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", addNewGame);

  const deleteAll = document.querySelector("#delete-all");
  deleteAll.addEventListener("click", handleDeleteAll);
})

const addEntryElement = function(text, element){
  entry = document.createElement(element);
  entry.textContent = text;
  return entry
}

const addNewGame = function(event){
  event.preventDefault();
  console.log(this);
  const title = "Title: " + this.title.value;
  const developer = this.developer.value;
  const genre = this.genre.value;

  const gamingList = document.querySelector("#gaming-list");

  titleEntry = addEntryElement(title, "h2");
  developerEntry = addEntryElement(developer, "h3");
  genreEntry = addEntryElement(genre, "h4");


  const gameEntry = document.createElement("div")
  gameEntry.textContent = ""
  gameEntry.appendChild(titleEntry);
  gameEntry.appendChild(developerEntry);
  gameEntry.appendChild(genreEntry);
  gamingList.appendChild(gameEntry);
  // gameEntry.classList.add("entry");

  event.target.reset()
}

const handleDeleteAll = function(event){
  const gamingList = document.querySelector("#gaming-list");
  gamingList.innerHTML = "";
}
