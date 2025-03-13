"use strict" /** Treat all JS code as newer version of JS */

let name = "Abhilash";
let age = 18;
let isLoggedIn = false;

let miles = BigInt("9898989898989899999898");
let nullVal = null;

let unefinedVal;

let sym = Symbol(123);

console.table([name, age, isLoggedIn, miles, nullVal, unefinedVal, sym])
console.table([typeof name, typeof age, typeof isLoggedIn, typeof miles, typeof nullVal, typeof unefinedVal, typeof sym])