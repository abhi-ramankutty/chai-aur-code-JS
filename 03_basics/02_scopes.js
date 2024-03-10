var c = 300;
// Cannot use let/const c = 300,
// Becasue in that case "cannot redeclaration" error will be thrown at line 6 for var c = 30

if (true) {
	let a = 10;
	const b = 20;
	var c = 30;
}

// console.log(`A: ${a}`);
// console.log(`B: ${b}`);
console.log(`C: ${c}`);

function one() {
	let name = "Light";
	function two() {
		let webiste = "youtube";
		console.log(name, webiste);
	}
	// console.log(website);
	two();
}

one();

console.log("--------------------------------------");

if (true) {
	let name = "Abhilash";
	if (true) {
		let age = 29;
		console.log(name, age);
	}
	// console.log(name, age);
}
console.log("--------------------------------------");

// ****************** Interesting ******************

/**
 * functions that are declared like function abc() can be accessed even before they are declared
 * i.e. w.r.t position and line number due to hoisting of such functions
 */
addOne(5)
function addOne(num) {
    console.log(num +1);
}


// addTwo(5)
const addTwo = function(num) {
    console.log(num+2)
}
addTwo(5)