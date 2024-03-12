/**
 * for-in loop
 * Used to run iteration on objects, and it gives the key of the object
 * Will also work on arrays, but instead of values, it iterates over the index(keys)
 * Will NOT work on Map(), will not give any error also.
 */

const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
};
for (const key in myObj) {
    console.log(`key: ${key}, value: ${myObj[key]}`);
}

console.log('--------------------------------');

const myArr = ['js', 'ruby', 'puthon', 'java'];
for (const key in myArr) {
    console.log(`key: ${key}, value: ${myArr[key]}`);
}

console.log('--------------------------------');

const myMapObj = new Map();
myMapObj.set('IN', 'India');
myMapObj.set('US', 'United states');
myMapObj.set('FR', 'France');
myMapObj.set('IN', 'India');

for (const key in myMapObj) {
    console.log(key);
}