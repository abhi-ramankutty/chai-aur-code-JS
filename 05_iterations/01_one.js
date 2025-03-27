for (let index = 0; index < 10; index++) {
	let element = index;
	console.log(element);
}
// console.log(element) // throws error ReferenceError: element is not defined
// console.log(index) // throws error ReferenceError: index is not defined

console.log("****************** nested loop ******************");
for (let i = 0; i <= 5; i++) {
	console.log(`Outer loop value ${i}`);
	for (let j = 0; j < 5; j++) {
		console.log(`Inner loop value ${j} for parent loop ${i}`);
	}
}

console.log("****************** loop on array ******************");
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
	const element = myArray[index];
	console.log(element);
}

console.log("****************** loop with break ******************");

for (let i = 0; i <= 5; i++) {
	if (i == 3) {
		console.log(`loop brake @ ${i}`);
		break;
	}
	console.log(`Value of i is ${i}`);
}

console.log("****************** loop with continue ******************");
for (let i = 0; i <= 5; i++) {
	if (i == 3) {
		console.log(`loop continue @ ${i}`);
		continue;
	}
	console.log(`Value of i is ${i}`);
}
