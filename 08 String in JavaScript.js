let name = "Basit"
let lastName = "Rajput"

// console.log(name + lastName );

// String InterPolation

console.log(`Hello My First Name is ${name} and my last name is ${lastName} `);


const gameName = new String('Basi-t')

console.log(gameName[0]);
// B
console.log(gameName.length);
// 5
console.log(gameName.toUpperCase());
// BASIT
console.log(gameName.charAt(2));
// s
console.log(gameName.toLowerCase());
// basit
console.log(gameName.indexOf('t'));
// 4
let newGame = gameName.substring(0,4)
console.log(newGame);
// Basi

let anotherNewGame = gameName.slice(0,3)
console.log(anotherNewGame);


// Bas

let newString = 'Basit    bnsdiohp'
console.log(newString.trim());
