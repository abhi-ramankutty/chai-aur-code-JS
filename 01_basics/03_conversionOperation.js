// let score = true;
// console.log(typeof score);

// let valueInNum = Number(score);
// console.log(`valueInNum: ${valueInNum}, score: ${score}`);
// console.log(typeof valueInNum);

/**
 * Number(LHS) => ____
 * 
 * "33" => 33
 * "33a" => NaN
 * true => 1
 * false => 0
 * null => 0
 * undefined => NaN
 */

// let isLoggedIn={};
// let isLoggedInBoolean = Boolean(isLoggedIn);
// console.log(`isLoggedIn: ${isLoggedIn} => isLoggedInBoolean: ${isLoggedInBoolean}`);

/**
 * Boolean() => ____
 * 
 * 1,-1, -1.1, "asd", {}/object => true
 * 0, "", null, undefined => false
 */

// let inputVal = {a: 1}
// let stringVal = String(inputVal)

// console.log(`inputVal: ${inputVal} => stringVal: ${stringVal}`);

/**
 * String(LHS) => ____
 * 
 * Almost everything get converted to string except obj, where the output is [object Object]
 */

// **************** Operations ****************


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/**
 * Prefix and postfix increment
 * 
 * let a = 1;
 * 
 * let b= ++a, this is an example of prefix increment.
 *      here the assignment is done after increment, i.e, the value of b = 2
 * 
 * let b= a++, this is an example of postfix increment.
 *      here the assignment is done before increment, i.e, the value of b = 1
 */