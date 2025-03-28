console.log("************* for...in on js object *************");
const obj = {
	js: "javaScript",
	cpp: `C++`,
	rb: "ruby",
	swift: "swift",
};
console.log(obj);

for (const key in obj) {
	console.log(`${key} is shortcut for ${obj[key]}`);
}

console.log("************* for...in on array *************");
const programming = ["javaScript", `C++`, "ruby", "swift"];
console.log(programming);

for (const itemKey in programming) {
	console.log(itemKey, programming[itemKey]);
}
