const date = new Date();

console.log(date);
console.log("typeof date", typeof date);
console.log("toString", date.toString());
console.log("toDateString", date.toDateString());
console.log("toISOString", date.toISOString());
console.log("toLocaleString", date.toLocaleString());
console.log("toLocaleDateString", date.toLocaleDateString());
console.log("toJSON", date.toJSON());
console.log("toUTCString", date.toUTCString());

// const newDate = new Date('2025-03-21'); //Months starts from 01
// const newDate = new Date(2025, 2, 21); //Months starts from 0
const newDate = new Date("03-21-2025"); // Months starts from 01 [mm/dd/yyyy]
console.log(newDate.toUTCString()) 

console.log("************* Time *************")

const timeStamp = Date.now();
console.log(timeStamp)
console.log(new Date().getTime())
console.log(Math.round(Date.now()/1000))

console.log(newDate.toLocaleString('default', {weekday: 'long'}))