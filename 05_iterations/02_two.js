console.log("*************** while-loop ***************");
let index = 0;
while (index <= 10) {
	console.log(`Value of index is ${index}`);
	index = index + 2;
}

console.log("*************** while-loop on array ***************");
const heroes = ["Batman", "Superman", "Minnal Murali"];
let arrIndex = 0;
while (arrIndex < heroes.length) {
	console.log(`Hero is ${heroes[arrIndex]}`);
	arrIndex = arrIndex + 1;
}

console.log("*************** do-while-loop ***************");
let score = 21;
do {
	console.log(`My score is ${score}`);
	score = score + 1;
} while (score <= 10);


console.log("*************** while-loop with break ***************");
let temp = 0;
while (temp <= 22) {
	if (temp == 10) {
        console.log(`loop brake @ temp = ${temp}`);
		break;
	}
	console.log(`Value of temp is ${temp}`);
	temp = temp + 2;
}

console.log("*************** while-loop with continue ***************");
let tempVal = 0;
while (tempVal <= 12) {
    tempVal = tempVal + 2;
	if (tempVal == 4 || tempVal == 6) {
        console.log(`loop continue(skip) @ tempVal = ${tempVal}`);
		continue;
	}
	console.log(`Value of tempVal is ${tempVal}`);
}