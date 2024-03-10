function addTwoNum(num1, num2) {
	//   const res = num1 + num2;
	//   return res;
	return num1 + num2;
}

const sum = addTwoNum(1, 2);
console.log(`Result: ${sum}`);

function loginUserMsg(username = "unknown user") {
	if (!username) {
		console.log("Please enter a username");
		return;
	}
	return `${username} just logged in`;
}
console.log(loginUserMsg("Abhilash"));

console.log("-------------------------");

function calcCartPrice(val1, val2, ...num) {
	return num;
}
console.log(calcCartPrice(100, 200, 300, 400));

const user = {
	name: "Abhi",
	prices: 100,
};
function handleObj(inputObj) {
	console.log(`User is ${inputObj.name} and price is ${inputObj.price}`);
}

// handleObj(user)
handleObj({ name: "Shinigami", price: 999 });

console.log("-------------------------");

const myArr = [100, 200, 300, 400, 500];

function getSecondVal(inputArr) {
	return inputArr[1];
}
// console.log(getSecondVal(myArr));
console.log(getSecondVal([1, 2, 3, 4, 5, 6]));
