const btn = document.getElementById("btn");
const divB = document.getElementById("div-b");
const divA = document.getElementById("div-a");

// mybtn.onclick = function () {
//   alert("Button Clicked");
// };

// const clickHandler = function () {
//   console.log("Button Clicked");
// };

// mybtn.addEventListener("click", clickHandler);

// mybtn.removeEventListener("click", clickHandler);

btn.addEventListener(
  "click",
  function () {
    console.log("Clicked Button");
  },
  true
);

divB.addEventListener(
  "click",
  function () {
    console.log("Clicked Div B");
  },
  true
);

divA.addEventListener(
  "click",
  function () {
    console.log("Clicked Div A");
  },
  true
);
