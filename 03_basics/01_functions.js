sayMyName();

function sayMyName() {
  console.log("Shinigami");
}

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

const result = addTwoNum(2,4);
console.log(`Result: ${result}`)

function loginUserMsg(userName = "Kira") {
	if(!userName) {
		console.log("Please enter a valid user name");
		return;
	}
	return `${userName} just logged in`
}

console.log(loginUserMsg())
