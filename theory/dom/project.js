const mainContainer = document.getElementById("main-container");

function seeListView() {
  mainContainer.classList.replace("main-container", "main-container-list-view");
  const placeContainers = document.getElementsByClassName("place-container");

  for (const div of placeContainers) {
    div.classList.replace("place-container", "place-container-list-view");
    div.children[0].classList.replace("place-img", "place-img-list-view");
  }
}

function seeGridView() {
  mainContainer.classList.replace("main-container-list-view", "main-container");
  const placeContainers = document.getElementsByClassName(
    "place-container-list-view"
  );

  for (const div of placeContainers) {
    div.classList.replace("place-container-list-view", "place-container");
    div.children[0].classList.replace("place-img-list-view", "place-img");
  }
}
