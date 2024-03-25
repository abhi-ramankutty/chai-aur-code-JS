class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }

    addCourse(course) {
        console.log(`New course "${course}" was added by ${this.username}`);
    }
}

const teacher = new Teacher('Hitesh', 'chaiaurcode@google.com');
teacher.addCourse('JS in Hindi')

const user = new User('Test');
// user.addCourse('JS in Hindi') // Doesnt work since instanceOf User doesnt have access to Teacher
user.logMe();

console.log('USER --------------------')
console.log(user instanceof User);
console.log(user instanceof Teacher);

console.log('TEACHER --------------------')
console.log(teacher instanceof User);
console.log(teacher instanceof Teacher);