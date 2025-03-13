let scoreNum = -12;
let scoreStr = "12";
let scoreNull = null;
let scoreUndef;
let scoreObj = {val: 12};
let score = "asd";

// scoreNum = Number(scoreNum);
// scoreStr = Number(scoreStr);
// scoreNull = Number(scoreNull);
// scoreUndef = Number(scoreUndef);
// score = Number(score);

scoreNum = Boolean(scoreNum);
scoreStr = Boolean(scoreStr);
scoreNull = Boolean(scoreNull);
scoreUndef = Boolean(scoreUndef);
scoreObj = Boolean(scoreObj);
score = Boolean(score);

console.log('scoreNum', scoreNum, typeof scoreNum);
console.log('scoreStr', scoreStr, typeof scoreStr);
console.log('scoreNull', scoreNull, typeof scoreNull);
console.log('scoreUndef', scoreUndef, typeof scoreUndef);
console.log('scoreObj', scoreObj, typeof scoreObj);
console.log('score', score, typeof score);

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