const outputPara = document.getElementById("output");

// JSON String to JS Object
const studentJSON = `{
    "name": "Ram",
    "roll": 10,
    "city": "Surat"
}`;

const student = JSON.parse(studentJSON);

let html = "";

for (const key in student) {
  html += "<p>";
  html += "<span>" + key + "</span>";
  html += "<span>" + ":" + "</span>";
  html += "<span>" + student[key] + "</span>";
  html += "</p>";
}

outputPara.innerHTML = html;

// JS Object to JSON String
// const student = {
//   name: "Ram",
//   roll: 10,
//   city: "Surat",
//   hobbies: ["singing", "painting"]
// };

// const studentJSON = JSON.stringify(student);

// console.log(studentJSON);
