const pi = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(pi);
// Object.defineProperty(Math, "PI", {
//   writable: true,
//   configurable: true,
//   value: 5,
//   enumerable: true,
// });
// Cannot redefine property: PI

console.log(Math.PI);

const user = {
	name: "Ryuk",
	killCount: 3456,
	isShinigami: true,
};

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "killCount"));
console.log("**********************************");

Object.defineProperty(user, "killCount", {
	writable: false,
	enumerable: false,
});
user.killCount = 10;
console.log(user.killCount);
console.log("**********************************");

Object.defineProperty(user, "killCount", { writable: true });
user.killCount = 20;
console.log(user.killCount);
console.log("**********************************");

Object.defineProperty(user, "isShinigami", {
	writable: false,
	enumerable: false,
	configurable: false,
});
user.isShinigami = false;
Object.defineProperty(user, "isShinigami", { configurable: true });
console.log(user.isShinigami);
