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

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 900))

const user = {
	name: "Shinigami",
	price: 199
}

function handleObj(inputUser) {
	console.log(inputUser)
	console.log(`User name is ${inputUser.name} and price is ${inputUser.price}`)
}
handleObj(user);
handleObj({name: "Kira", price: 299})

const myNewArr = [200, 400, 100, 650];
function returnSecondVal(inputArray) {
	console.log(inputArray)
	return inputArray[1]
}
console.log(returnSecondVal(myNewArr))
console.log(returnSecondVal([1,2,3,4,5]))