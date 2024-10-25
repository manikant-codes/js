// function getThis() {
//   console.log(this);
// }

// window.getThis();
// getThis();

// const student = {
//   fname: "Akshay",
//   lname: "Rathore",
//   getThis: function () {
//     console.log(this);
//   }
// };

// student.getThis();
// console.log(this);

const student = {
  fname: "Akshay",
  lname: "Rathore",
  getThis: () => {
    console.log(this);
  }
};

// const student = {
//   fname: "Akshay",
//   lname: "Rathore",
//   getThis: function () {
//     const temp = () => {
//       console.log(this);
//     };

//     temp();
//   }
// };

// student.getThis();
