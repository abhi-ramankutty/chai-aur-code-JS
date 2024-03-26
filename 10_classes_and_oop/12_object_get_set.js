const userObj = {
    _name: 'Light',
    _password: 'qwerty',

    get name() {
        return this._name.toUpperCase();
    },
    set name(value) {
        this._name = value;
    },

    get password() {
        return 'password tho nai milega re baba...';
    },
    set password(value) {
        this._password = value;
    },
};

console.log(userObj.name);
console.log(userObj.password);
console.log(userObj._password);

