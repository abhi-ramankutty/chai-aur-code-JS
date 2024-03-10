const user = {
	name: "Abhilash",
	price: 999,

	welcomeMsg: function () {
		console.log(`Hi ${this.name}, welcome`);
		console.log(this);
	},
};

// user.welcomeMsg();
// user.name = "Shinigami";
// user.welcomeMsg();

/**
 * console.log(this) returns an empty obj {}
 * But the same when done inside a browser, it will return the window object
 * This is because, "this" in global scope referes to environment it is being called/used
 */
console.log(this);
console.log("----------------------------------------");

/**
 * In function chai() {}, this refers to the function object and this.name is undefined
 */
function chai() {
	let name = "Abhilash";
	console.log(this);
	console.log(this.name);
}

/**
 * In const chai_1 = () => {}, this refers to the global node object and this.name is undefined
 */
const chai_1 = () => {
	let name = "Abhilash";
	console.log(this);
	console.log(this.name);
};

chai();

console.log("----------------------------------------");

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));
