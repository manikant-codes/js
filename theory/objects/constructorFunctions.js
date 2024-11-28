// const student1 = {
//   fname: "Akshay",
//   lname: "Rathore",
//   roll: 1,
//   mat: 26
// };

// const student2 = {
//   fname: "Hitendra",
//   lname: "Rajput",
//   roll: 2,
//   math: 45
// };

// const student3 = {
//   fname: "Vivek",
//   lname: "Rajput",
//   roll: 3,
//   math: 35
// };

function Student(fname, lname, roll, math) {
  this.fname = fname;
  this.lname = lname;
  this.rollNo = roll;
  this.math = math;
  this.city = "Pune";
  this.getFullName = function () {
    return this.fname + " " + this.lname;
  };
}

const student1 = new Student("Akshay", "Rathore", 1, 25);
const student2 = new Student("Hitendra", "Goud", 2, 56);
const student3 = new Student("Vivek", "Rajput", 3, 12);

console.log(student1);
console.log(student2);
console.log(student3);
