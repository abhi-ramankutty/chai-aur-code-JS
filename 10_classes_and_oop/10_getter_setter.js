class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	get email() {
		return `${this._email.toUpperCase()}`;
	}

	set email(value) {
		this._email = value;
	}

	get password() {
		return "Sorry... Nai bataunga...";
	}

	set password(value) {
		this._password = value;
	}
}

const user = new User("ryuk@shinigami.com", "12213321");
console.log('email', user.email);
console.log('password', user.password);
console.log('_password', user._password);
