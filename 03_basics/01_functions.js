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

console.log(loginUserMsg('Abhilash'))
