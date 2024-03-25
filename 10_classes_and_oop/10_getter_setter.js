class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }

    set password(value) {
        this._password = value;
    }
    get password() {
        return 'Password nai milegaaa';
    }
}

const kira = new User('Shinigami', 'DeathNote');
console.log(kira);
console.log(kira.name);
console.log(kira.password);

