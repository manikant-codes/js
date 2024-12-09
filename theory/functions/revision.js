// DRY Don't Repeat Yourself

// console.log(2 - 2);
// console.log(4 - 8);
// console.log(6 - 3);

// function declaration
// function calc(num1, num2) {
//   console.log(num1 / num2);
// }

// function assignment
// const calc = function (num1, num2) {
//   console.log(num1 / num2);
// };

// arrow function
// const calc = (num1, num2) => {
//   return num1 / num2;
// };

// console.log(num2); // Error

// function call/invocation
// calc(2, 4);
// calc(4, 8);
// calc(6, 2);

const student1 = {
  fname: "Hitendra",
  lname: "Rajput",
  getFullName: function (like1, like2, like3) {
    console.log(
      `My name is ${this.fname} ${this.lname}. I like ${like1}, ${like2} and ${like3}.`
    );
  }
};

const student2 = {
  fname: "Akshay",
  lname: "Rathore"
};

student1.getFullName("travelling", "cars", "bikes");

// student1.getFullName.call(student2, "eating", "pizza", "pasta");
// student1.getFullName.apply(student2, ["eating", "pizza", "pasta"]);

const newGetFullName = student1.getFullName.bind(student2);
newGetFullName("eating", "pizza", "pasta");
