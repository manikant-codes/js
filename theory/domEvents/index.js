// const mybtn = document.getElementById("mybtn");

// mybtn.onclick = doSomething;

// function doSomething() {
//   console.log("Button clicked.");
// }

// window.onload = function () {
//   alert("Window loaded.");
// };

// const outputPara = document.getElementById("output");

// function handleInput(event) {
//   console.log("event", event.target.value);
//   outputPara.innerHTML = event.target.value.toUpperCase().replaceAll(" ", "-");
// }

// function handleMouseOver(event) {
//   event.target.style.left = "350px";
// }

// function handleMouseOut(event) {
//   event.target.style.left = "0px";
// }

// function handleMouseDown(event) {
//   event.target.style.width = "200px";
//   event.target.style.height = "200px";
// }

// function handleMouseUp(event) {
//   event.target.style.width = "50px";
//   event.target.style.height = "50px";
// }

// window.onkeydown = function (event) {
//   console.log("Key pressed:", event);
// };

let num1;
let num2;
let sign;

function handleKeyDown(event) {
  if (
    event.key === "/" ||
    event.key === "*" ||
    event.key === "+" ||
    event.key === "-"
  ) {
    num1 = Number(event.target.value);
    sign = event.key;

    console.log("event.key", event.key);

    event.target.value = "";
  } else if (event.key === "Enter") {
    num2 = Number(event.target.value);
    console.log(sign);
    if (sign === "+") {
      event.target.value = num1 + num2;
    } else if (sign === "-") {
      event.target.value = num1 - num2;
    } else if (sign === "*") {
      event.target.value = num1 * num2;
    } else {
      event.target.value = num1 / num2;
    }
  }
}
