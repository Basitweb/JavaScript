let score = 23 ;

console.log(typeof(score)); // number 

let age  = "33";
console.log(typeof(age));
// string 

let ConvertString = Number(age)
console.log(typeof ConvertString);
// Number 
console.log(ConvertString);

let temp = null ;
let converttemp = Number(temp)
console.log(temp);
// Null 

console.log(typeof (temp));
// object 
console.log(typeof (converttemp));
// number 
console.log(converttemp);
//  zero 


// "33" >> 33
// "33abc" >> NaN
// true >> 1  false >> 0


// 1>> true 
// 0 >> false 
// "" >> false
// basit >> true

let someNumber = 33 
let someNumberConvert = String(someNumber)
console.log(someNumberConvert);
console.log(typeof someNumberConvert);

// number >> string 
