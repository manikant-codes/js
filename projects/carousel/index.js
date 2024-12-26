const slider = document.getElementById("slider");

let id = setInterval(next, 2000);

const totalWidth =
  slider.getBoundingClientRect().width * slider.children.length -
  slider.getBoundingClientRect().width;

function next() {
  const right = Number(slider.style.right.replace("px", ""));
  if (right < totalWidth) {
    slider.style.right = right + slider.getBoundingClientRect().width + "px";
    console.log("next", right);
  } else {
    slider.style.right = 0 + "px";
  }
}

function handleMouseEnter() {
  clearInterval(id);
}

function handleMouseLeave() {
  console.log("handleMouseLeave");
  id = setInterval(next, 1);
}
