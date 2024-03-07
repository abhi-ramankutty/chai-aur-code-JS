/**
 * #Primitive
 * 
 * These datatypes come under the category of call-By-Value
 * i.e. when assigning or calling a variable, the value is what stored/retrived
 * 
 * 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
 * 
 */
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNum = 8068770979560780780659706570568705850349850345803458034958034580358043n;
// Use n at the very end to represent / declare bigInt number

console.log(id === anotherId);
console.log(id);
console.log(anotherId);
console.log(bigNum);
console.log("-----------------");

/**
 * #Reference / Non-Primitive 
 * 
 * These datatypes come under the category of call-By-Value
 * i.e. here the reference of the memory location is what gets stored/retrived and moved around
 * 
 * Array, Objects, Functions
 */

const heros = ["Shinigami", "LightYagami", "Ryuk"];
let myObj = {
    name: "abhilash",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// Return type of all reference datatypes is object exceot for function, 
// Return type of null is also an object
// return type of typeof function is a function, called as function object

// https://262.ecma-international.org/5.1/#sec-11.4.3