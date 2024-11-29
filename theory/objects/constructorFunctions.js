// const student1 = {
//   fname: "Akshay",
//   lname: "Rathore",
//   rollNo: 1,
//   math: 26
// };

// const student2 = {
//   fname: "Hitendra",
//   lname: "Rajput",
//   rollNo: 2,
//   math: 45
// };

// const student3 = {
//   fname: "Vivek",
//   lname: "Rajput",
//   rollNo: 3,
//   math: 35
// };

// Construct functions object banane ke blueprint/factroy hain.
// Prototype kisi bhi constructor fuction ki wo common jagah hai jaha pe aap kuch values/functions rakh sakte hoo.
// Prototype me rakhe values/functions us constructor function se bane har object ko milte hai.
// Prototype ke use se properties repeat nahi hooti.

function Student(fname, lname, rollNo, math) {
  this.fname = fname;
  this.lname = lname;
  this.rollNo = rollNo;
  this.math = math;
  // this.city = "Pune";
  // this.getFullName = function () {
  //   return this.fname + " " + this.lname;
  // };
}

Student.prototype.city = "Pune";
Student.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

const student1 = new Student("Akshay", "Rathore", 1, 25);
const student2 = new Student("Hitendra", "Goud", 2, 56);
const student3 = new Student("Vivek", "Rajput", 3, 12);

console.log(student1);
console.log(student2);
console.log(student3);
