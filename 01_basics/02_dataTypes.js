"use strict" /** Treat all JS code as newer version of JS */


// Primitive data types
let name = "Abhilash";
let age = 18;
let isLoggedIn = false;

let miles = BigInt("9898989898989899999898");
let kms = 9898989898989899999898n
let nullVal = null;

let undefinedVal;

let sym = Symbol(123);

console.log('name', name, typeof name);
console.log('age', age, typeof age);
console.log('isLoggedIn', isLoggedIn, typeof isLoggedIn);
console.log('miles', miles, typeof miles);
console.log('kms', kms, typeof kms);
console.log('nullVal', nullVal, typeof nullVal);
console.log('undefinedVal', undefinedVal, typeof undefinedVal);
console.log('sym', sym, typeof sym);

console.log('*******************************')
// Non Primitive (Reference) data types
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log('heros', typeof heros);
console.log('myObj', typeof myObj);
console.log('myFunction', typeof myFunction);