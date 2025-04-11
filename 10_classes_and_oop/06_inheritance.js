class UserOne {
	constructor(userName) {
		this.userName = userName;
	}

	logMe() {
		console.log(`UserName is ${this.userName}`);
	}
}

class Teacher extends UserOne {
	constructor(userName, email, password) {
        super(userName)
		this.email = email;
		this.password = password;
	}

    addCourse() {
        console.log(`A new course was added by ${this.userName}`);
    }
}


const kira = new Teacher('Kira', 'Kira@shinigami.com', 'qwerty');
kira.addCourse();
kira.logMe();

console.log('********************************************************')

const ryuk = new UserOne('Ryuk');
// ryuk.addCourse();
ryuk.logMe();