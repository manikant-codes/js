// *
// * *
// * * *
// * * * *
// * * * * *

//            *
//          * *
//        * * *
//      * * * *
//    * * * * *

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
