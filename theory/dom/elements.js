// console.log(document.getElementById("title"));
// console.log(document.getElementsByClassName("mypara"));
// console.log(document.getElementsByTagName("p"));

// console.log(document.querySelector("#title"));
// console.log(document.querySelectorAll(".mypara"));
// console.log(document.querySelectorAll("p"));

// document.getElementById("title").style.color = "red";
// document.querySelector("#title").style.color = "red";

// const myParas = document.getElementsByClassName("mypara");
// const myParas = document.querySelectorAll(".mypara");
// myParas[0].style.color = "green";
// myParas[1].style.color = "green";
// for (const p of myParas) {
//   p.style.color = "green";
// }

// const paras = document.getElementsByTagName("p");
// paras[0].style.color = "red";
// paras[1].style.color = "red";
// paras[2].style.color = "red";
// paras[3].style.color = "red";

// for (const p of paras) {
//   p.style.color = "red";
// }

function turnRed() {
  const paras = document.getElementsByTagName("p");
  for (const p of paras) {
    p.style.color = "red";
  }
}
