// Getter function aapko aapke object me computed properties add karne dete hai.
// Computed properties yane wo properties jo object ban ne ke samay usme compute/calculate/process hoke add hote hai. Computed property ka naam getter function ke naam ka hi hooga.
// Computed properties ko directly change nahi kar sakte hoo. Uske liye setter function banane padte hai.
// Setter function ko compulsory ek argument dena hoota hai aur wo ek hi argument leta hai.

const student = {
  fname: "Akshay",
  lname: "Rathore",
  rollNo: 1,
  //   getFullName: function () {
  //     return this.fname + " " + this.lname;
  //   }
  get fullName() {
    return this.fname + " " + this.lname;
  },
  set fullName(name) {
    this.fname = name.fname;
    this.lname = name.lname;
  }
};

console.log("student", student.fullName);

student.fullName = { fname: "Hemant", lname: "Goud" };

console.log("student", student.fullName);
