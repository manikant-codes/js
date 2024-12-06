// const student1 = {
//   fname: "Hitendra",
//   lname: "Goud",
//   rollNo: 1,
//   age: 10,
//   school: "Jivan Jyot",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   }
// };

// const student2 = {
//   fname: "Vivek",
//   lname: "Rajput",
//   rollNo: 2,
//   age: 9,
//   school: "Jivan Jyot",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   }
// };

// const student3 = {
//   fname: "Akshay",
//   lname: "Rathore",
//   rollNo: 3,
//   age: 11,
//   school: "Jivan Jyot",
//   getFullName: function () {
//     return this.fname + " " + this.lname;
//   }
// };

// Factory for making objects.
// function Student(fname, lname, rollNo, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.rollNo = rollNo;
//   this.age = age;
//   // this.school = "Jivan Jyot";
//   // this.getFullName = function () {
//   //   return this.fname + "-" + this.lname;
//   // };
// }

// Student.prototype.school = "Jivan Jyot";
// Student.prototype.getFullName = function () {
//   return this.fname + " " + this.lname;
// };

// const student1 = new Student("Hitendra", "Goud", 1, 10);
// const student2 = new Student("Vivek", "Rajput", 2, 9);

// console.log("student1", student1);
// console.log("student2", student2);

// function Student(fname, lname, rollNo, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.rollNo = rollNo;
//   this.age = age;
//   // this.school = "Jivan Jyot";
//   // this.getFullName = function () {
//   //   return this.fname + "-" + this.lname;
//   // };
// }

// class Student {
//   constructor(fname, lname, rollNo, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.rollNo = rollNo;
//     this.age = age;
//     // this.school = "Jivan Jyot";
//     // this.getFullName = function () {
//     //   return this.fname + " " + this.lname;
//     // };
//   }

//   getFullName() {
//     return this.fname + " " + this.lname;
//   }
// }

// Student.prototype.school = "Jivan Jyot";

// const student1 = new Student("Hitendra", "Goud", 1, 10);
// const student2 = new Student("Vivek", "Rajput", 2, 9);

// console.log("student1", student1);
// console.log("student2", student2);

class Animal {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  move() {
    console.log("Is moving.");
  }

  eat() {
    console.log("Is eating.");
  }
}

class Deer extends Animal {
  constructor(name, age, weight, color) {
    super(name, age, weight);
    this.color = color;
  }

  fight() {
    console.log("Is fighting.");
  }
}

class Tiger extends Animal {
  constructor(name, age, weight, stripes) {
    this.stripes = stripes;
  }

  swim() {
    console.log("Is swimming.");
  }
}

const deer1 = new Deer("Vivek", 4, 10, "Brown");
const deer2 = new Deer("Akshay", 2, 8, "Beige");

console.log("deer1", deer1);
console.log("deer2", deer2);
