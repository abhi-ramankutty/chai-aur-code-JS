const user = {
	name: "Light yagami",
	alias: "Kira",
	killCount: 5838,
	isShinigami: false,

	greeting: function () {
		return `Hi, I am ${this.alias}`;
	},
};

console.log(user.greeting());

function User(name, killCount, isShinigami) {
	this.name = name;
	this.killCount = killCount;
	this.isShinigami = isShinigami;

	this.greeting = function () {
		return `Hi, I am ${this.name}`;
	};
}

const user1 = new User("LightYagami", 7932, false);
const user2 = new User("Ryuk", 347932, true);

console.log(user1);
console.log(user1.greeting());
console.log(user2);
console.log(user2.greeting());
