const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

console.log('----------------');

// const myNewDate = new Date(2024, 2, 8, 13,2);
const myNewDate = new Date('01-14-2023');
console.log(myNewDate.toLocaleString());

console.log('----------------');

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myNewDate.getSeconds());

let newDate = new Date(2024, 2, 5)
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))