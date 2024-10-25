// Named Export
// export const outputPara = document.getElementById("output");
// export const num1Input = document.getElementById("num1");
// export const num2Input = document.getElementById("num2");
// export const addBtn = document.getElementById("add");
// export const subtractBtn = document.getElementById("subtract");
// export const multiplyBtn = document.getElementById("multiply");
// export const divideBtn = document.getElementById("divide");

// OR

const outputPara = document.getElementById("output");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

export {
  outputPara,
  num1Input,
  num2Input,
  addBtn,
  subtractBtn,
  multiplyBtn,
  divideBtn
};

// Default Export

// export default function modulus(a, b) {
//   return a % b;
// }

// OR

function modulus(a, b) {
  return a % b;
}
export default modulus;
