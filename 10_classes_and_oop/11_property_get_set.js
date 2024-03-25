function UserFn(name, password) {
    this._name = name;
    this._password = password;

    Object.defineProperty(this, 'name', {
        set: function (value) {
            this._name = value;
        },
        get: function () {
            return `My name is ${this._name}`;
        },
    });
    Object.defineProperty(this, 'password', {
        set: function (value) {
            this._password = value;
        },
        get: function () {
            return `Password nai milegaaa`;
        },
    });
}

const light = new UserFn('LightYagami', 'asdada');
console.log(light);
console.log(light.name);
console.log(light.password);
