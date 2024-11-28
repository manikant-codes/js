// Object Literal
const student1 = {
  name: "Ram",
  rollNo: 10,
  math: 50,
  sci: 50,
  eng: 50,
  getAvg: function () {
    // method
    return (this.math + this.sci + this.eng) / 3;
  }
};
student1.age = 10;

// new Keyword
const student2 = new Object({ name: "Shyam", rollNo: 11 });
student2.age = 12;

console.log("student1", student1.getAvg());
console.log("student2", student2);

// Dot Notation
// console.log(student1.name);
// console.log(student2.name);

// Suare-barcket Notation
// console.log(student1["name"]);
// console.log(student2["name"]);
