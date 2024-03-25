// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}_qwerty`;
    }
    getUserName() {
        return `${this.username.toUpperCase()}`;
    }
}

const ryuk = new User('Shinigami', 'death.note@google.com', 'Admin@123');

console.log(ryuk.encryptPassword());
console.log(ryuk.getUserName());

console.log('-------------------------------')

// Behind the scenes

function UserFn(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

UserFn.prototype.encryptPassword = function () {
    return `${this.password}_qwerty`;
};

UserFn.prototypegetUserName = function () {
    return `${this.username.toUpperCase()}`;
};

const ryukFn = new User('Shinigami', 'death.note@google.com', 'Admin@123');

console.log(ryukFn.encryptPassword());
console.log(ryukFn.getUserName());
