class User {
	constructor(userName) {
		this.userName = userName;
		this.id = User.createId();
	}

	static createId() {
		return `qwerty_123`;
	}
}

const user = new User("Sam");
console.log(user);

class Teacher extends User {
	constructor(userName, email, password) {
		super(userName);
		this.email = email;
		this.password = password;
	}
}

const ryuk = new Teacher("ryuk", `ryuk@deathnote.com`, "qwerty");
console.log(ryuk);
