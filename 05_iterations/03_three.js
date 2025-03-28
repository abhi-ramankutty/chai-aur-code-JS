console.log("************* for...of on array *************");
const numArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(numArr);

for (const item of numArr) {
	console.log(item);
}

console.log("************* for...of on string *************");
const greetings = "Hello world!";
console.log(greetings);

for (const char of greetings) {
	console.log(`Each char is ${char}`);
}
