const User = {
    _email: 'kira@shinigami.com',
    _password: '123 123',

    get email() {
        return `${this._email} from getter`;
    },
    set email(value) {
        this._email = value
    },
    get password() {
        return `${this._password} from getter`;
    },
    set password(value) {
        this._password = value
    }
}

const kira = Object.create(User)

console.log(kira);
console.log(kira.email);
console.log(kira.password);