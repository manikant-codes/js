const innerBox = document.getElementById("inner-box");

function startAnimation() {
  const id = setInterval(move, 1);

  function move() {
    const left = Number(innerBox.style.left.replace("px", ""));
    if (left < 350) {
      innerBox.style.left = left + 1 + "px";
      innerBox.style.top = left + 1 + "px";
    } else {
      clearInterval(id);
    }
  }
}
