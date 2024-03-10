// IF
const isUserLoggedIn = true;
const temp = 41;

if (isUserLoggedIn) {
	console.log("User is logged in");
}

if (temp < 40) {
	console.log("Temp is less than 40");
} else {
	console.log("Temp is greater than or equal to 40");
}
console.log("Executes everytime, cause im not bound by any score");

// <, >, <=, >=, ==, !=, ===, !==


const score = 200;
if (score > 100) {
    // NEVER use var, because var gives variables a global scope and you dont want that to happen
    let power = 'Fly';
    console.log(`Can ${power}`);
}
// console.log(`Can ${power}`);


const bal = 760;
// if (bal > 200) console.log("Test"), console.log("Test");
// Implicit scoped if-statement
// And this is not prefered when you write multiple lines of code in a single line by using comma to separate lines


if (bal < 500) {
	console.log("less than 500");
} else if (bal < 750) {
	console.log("less than 750");
} else if (bal < 900) {
	console.log("less than 900");
} else {
	console.log("more than 900");
}

console.log('---------------------------------------------');


const isLoggedIn = true;
const hasDebitCard = true;
const isLoggedInViaGoogle = true;
const isLoggedInViaEmail= true;

if (isLoggedIn && hasDebitCard) {
    console.log("User can do shopping");
}

if (isLoggedInViaGoogle || isLoggedInViaEmail) {
    console.log("User is logged..");
}