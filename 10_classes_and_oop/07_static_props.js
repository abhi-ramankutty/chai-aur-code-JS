class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    gimmeId() {
        User.createId();
    }

    static createId() {
        console.log('ID - qwerty');
    }
}

class Phone extends User {
    constructor(username, make) {
        super(username);
        this.make = make;
    }
}

const user = new User('Shinigami');
const phone = new Phone('Ryuk', 'iPhone');

user.logMe();
// user.gimmeId();
// user.createId();

phone.logMe();
// phone.createId();

/**
 * When you make anything "static", it becomes a class level variable
 * More like a private property/fun
 * 
 * The only way to access/call a static property/fun is by using the Class itself
 * 
 * ```
    class MathUtils {
        static sum(a, b) {
            return a + b;
        }
        static PI = 3.14159;
    }
    console.log(MathUtils.sum(5, 3)); // Output: 8 (called using class name)
    console.log(MathUtils.PI);        // Output: 3.14159 (accessed using class name)

 * ```
 */