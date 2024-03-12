/**
 * for-of loop
 * works on arrays and maps
 * does NOT works on objects - TypeError: myObj is not iterable
 */
const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
    console.log(item);
}

console.log('-----------------------------');

const greeting = 'Hello world';
for (const char of greeting) {
    console.log(`Each char is ${char}`);
}

console.log('-----------------------------');

const myMapObj = new Map();
myMapObj.set('IN', 'India');
myMapObj.set('US', 'United states');
myMapObj.set('FR', 'France');
myMapObj.set('IN', 'India');

console.log(myMapObj);
for (const [key, val] of myMapObj) {
    console.log(`Key: ${key}, Value: ${val}`);
}

console.log('-----------------------------');

// const myObj = { name: 'Abhilash', age: 29 };
// for (const item of myObj) {
//     console.log(item);
// }
// TypeError: myObj is not iterable
