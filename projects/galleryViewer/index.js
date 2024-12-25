// const mainContainer = document.getElementById("main-container");
const mainContainer = document.querySelector("#main-container");

function seeListView() {
  mainContainer.classList.replace("main-container", "main-container-list");
}

function seeGridView() {
  mainContainer.classList.replace("main-container-list", "main-container");
}
