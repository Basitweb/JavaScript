const score = 400

console.log(score);
// 400

const balance = new Number(300)

console.log(balance);
// [Number: 300]


console.log(typeof (balance.toString()));

console.log(balance.toFixed(2));
// deciamla precesion 

// const otherNumber = 1123.8999

// console.log(otherNumber.toPrecision(3));


const thirdNumber = 1000000;
console.log(thirdNumber.toLocaleString());



// now maths +++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);


console.log(Math.abs(-4));
// Convert Negative to Positive 
console.log(Math.round(4.6))
// convert to 5


console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(((Math.random()*10)) + 1 );

const min = 10 
const max = 20 
console.log(Math.floor(Math.random() *(max-min +1)))