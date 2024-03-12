/**
 * since array.map doesnt check for any condition, it will atleast return undefined
 */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers.map((num) => num + 10);

console.log(newNums);

console.log("--------------------------");

const newNums_2 = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(newNums_2);
