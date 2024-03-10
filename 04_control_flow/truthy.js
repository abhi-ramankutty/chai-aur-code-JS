/**
 * Falsy-values
 * false, 0, -0, BigInt 0n, "", null, undefined, NaN
 *
 * Truthy-values
 * true, number other than (+ve or -ve), [], {}, function() {}
 * string of "0", "null", "undefined", "NaN"
 */

const arr = []; // arr.length
const obj = {}; // Object.keys(obj).length

if (Object.keys(obj).length) {
	console.log("Truthy");
} else {
	console.log("Falsy");
}

/**
 * false == 0 -> true
 * false == "" -> true
 * 0 == '"" -> true
 */


console.log('--------------------');

/**
 * Nullish coalescing operator (??)
 * This has to deal with only null and undefined
 * 
 * This is more like || operator, but works only for null and undefined.
 * The || checks for falsy and moves to the right, where as ?? checks for null and undefined only and then moves to the right
 */
 
let num;

num = 5 ?? 10;
console.log(`5 ?? 101 ->`, num);

num = null ?? 10
console.log("null ?? 10 ->", num);

num = null ?? undefined ?? 10
console.log("null ?? undefined ?? 10 ->", num);

num = null || 0 || 20
console.log("null || 0 || 20 ->", num);

console.log('--------------------');

/**
 * Ternary operator
 * 
 * condition ? true : false;
 * If the condition is true, the then code/value in true section is returned else the one in false section is returned
 */

const val = 5;
var res = val > 0 ? 'val is > 0' : 'not > 0'
console.log(res)