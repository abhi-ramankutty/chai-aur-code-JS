const arr = [0, 1, 2, 3, 4, 5];
const arr2 = ["Shaktiman", "Krrish", "MinnalMurali"];
const arr3 = new Array(0, 1, 2, 3, 4, 5);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr2[1]);

// Array methods

arr2.push("Batman");
arr2.push("Iron man");
const popVal = arr2.pop();

arr2.unshift("Bla", "Junior-G");
const shiftVal = arr2.shift();

console.log(arr2);
console.log(popVal);
console.log(shiftVal);

console.log('---------------------')
// Slice n Splice

const newArr = [1, 2, 3, 4, 5, 6];
console.log("A", newArr);

const sliceArr = newArr.slice(1,4);
console.log(sliceArr);
console.log("B", newArr);

const spliceArr = newArr.splice(1,4);
console.log(spliceArr);
console.log("C", newArr);

/**
 * Major difference between Slice and Splice
 * 
 * 1. In Slice, the end index is excluded and in Splice, end end index is included
 * 2. Slice does not modifiy the original array, but Splice modifies the original array.
 */
