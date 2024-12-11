const childDiv = document.getElementById("child");

function startAnimation() {
  const id = setInterval(animation, 10);

  function animation() {
    const newLeft =
      Number(window.getComputedStyle(childDiv).left.split("px")[0]) + 1;
    console.log("animation");
    if (newLeft < 350) {
      childDiv.style.left = newLeft + "px";
      childDiv.style.top = newLeft + "px";
    } else {
      clearInterval(id);
    }
  }
}
