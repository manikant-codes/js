// Named Import
import {
  outputPara,
  num1Input,
  num2Input,
  addBtn,
  subtractBtn,
  multiplyBtn,
  divideBtn
} from "./elements.mjs";

// Default Import
import modulus from "./elements.mjs";

import { add, subtract, multiply, divide } from "./calc.mjs";

addBtn.onclick = function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  outputPara.innerText = add(num1, num2);
};

subtractBtn.onclick = function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  outputPara.innerText = subtract(num1, num2);
};

multiplyBtn.onclick = function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  outputPara.innerText = multiply(num1, num2);
};

divideBtn.onclick = function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  outputPara.innerText = divide(num1, num2);
};
