let score = "40"

console.log(typeof score);
console.log(typeof(score));   // call as method

// change string to number using Number
let valueInNumber = Number(score);
console.log( " After Conversion : " + typeof(valueInNumber) );

// "44" convert 44
//  "44ab" convert  nan

let isLoggedIn =1 // convert true
let isLoggedIn1 ="" // convert false
let isLoggedIn2 ="dalip" // convert true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber =44
let stringNumber = String(someNumber)
console.log( typeof stringNumber);