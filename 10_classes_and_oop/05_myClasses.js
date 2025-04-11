class User {
	constructor(userName, email, password) {
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	encryptPassword() {
		return `${this.password}_abc`;
	}

	changeUserName() {
		return `${this.userName.toUpperCase()}`;
	}
}

const kira = new User("Kira", "kira@deathnote.com", "asdf_asdf");
console.log(kira.encryptPassword());
console.log(kira.changeUserName());
console.log("**********************************************************")

function UserFn(userName, email, password) {
	this.userName = userName;
	this.email = email;
	this.password = password;

	this.encryptPassword = function () {
		return `${this.password}_abc`;
	};
}
UserFn.prototype.changeUserName = function () {
	return `${this.userName.toUpperCase()}`;
};

const ryuk = new UserFn('ryuk', `ryuk@deathnote.com`, 'qwerty');
console.log(ryuk.encryptPassword());
console.log(ryuk.changeUserName());