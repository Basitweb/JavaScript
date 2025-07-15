// There are 2 Types of Memory

// stack (Premative types)
// Heap (Non Premative)


let name = "Basit";
let anotherName = name 
anotherName = "Wajid" 

console.log(name);
console.log(anotherName);
// Basit
// Wajid

// in stack memory it provide you to the copy value of the another variable


let myData = {
name: "basit ",
age: 18 ,
lanuage : "urdu" ,
}
let anotherData = myData
anotherData.name = 'wajid'

console.log(myData);
console.log(anotherData);
// { name: 'wajid', age: 18, lanuage: 'urdu' }
// { name: 'wajid', age: 18, lanuage: 'urdu' }

// it change the original value because it provide the refrtence in the memory 

