// const ertiga = {
//   name: "Ertiga",
//   company: "Maruti Suzuki",
//   fuelCapcity: 15,
//   topSpeed: 120
// };

// const ertigaEntries = [
//   ["name", "Ertiga"],
//   ["company", "Maruti Suzuki"],
//   ["fuelCapcity", 15],
//   ["topSpeed", 120]
// ];

// object ----> array of array
// const entriesErtiga = Object.entries(ertiga);
// console.log("entriesErtiga", entriesErtiga);

// array of array ----> object
// const obj = Object.fromEntries(ertigaEntries);
// console.log("obj", obj);

// const car2 = {
//   name: "Swift Desire"
// };
// Object.assign(car2, car1);
// console.log("car2", car2);

// const car1 = Object.create(ertiga);
// car1.model = "lxi";

// console.log("car1", car1);

const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 100 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 120 },
  { name: "papaya", quantity: 150 }
];

const obj = Object.groupBy(fruits, (fruit) => {
  if (fruit.quantity < 150) {
    return "low";
  } else if (fruit.quantity === 150) {
    return "just-enough";
  }
  return "enough";
});

console.log("obj", obj);

// const obj = {
//   low: [
//     { name: "kiwi", quantity: 120 },
//     { name: "bananas", quantity: 100 }
//   ],
//   enough: [
//     { name: "apples", quantity: 300 },
//     { name: "oranges", quantity: 200 }
//   ]
// };
