const student = { name: "Ram" };

// student.rollNo = 1;
Object.defineProperty(student, "rollNo", {
  value: 1
});

// console.log("student", student);

// delete student.rollNo;
// console.log("student", student);

// console.log("entries", Object.entries(student));

// student.rollNo = 2;
// console.log("student", student);

// Object.defineProperties(student, {
//   rollNo: { value: 1, writable: true, enumerable: true, configurable: true },
//   age: { value: 10, writable: true, enumerable: true, configurable: true }
// });

// console.log(student);

// console.log(Object.getOwnPropertyDescriptors(student));

// console.log(Object.getOwnPropertyNames(student));
// console.log(Object.keys(student));

console.log(Object.getPrototypeOf(student));
