function User(email, password) {
	this._email = email;
	this._password = password;

	Object.defineProperty(this, "email", {
		get: function () {
			return this._email;
		},
		set: function (value) {
			this._email = value;
		},
	});

	Object.defineProperty(this, "password", {
		get: function () {
			return `${this._password} encryp`;
		},
		set: function (value) {
			this._email = password;
		},
	});

	Object.defineProperties(this, {
		_email: {
			configurable: false,
			writable: false,
			enumerable: false,
		},
		_password: {
			configurable: false,
			writable: false,
			enumerable: false,
		},
	});
}

const kira = new User("kira@shinigami.com", "123");
console.log(kira);
console.log(kira.email);
console.log(kira.password);
