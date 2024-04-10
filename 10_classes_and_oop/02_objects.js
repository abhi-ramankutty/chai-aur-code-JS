function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype.prototype);

console.log('--------------------------------');

function createUser(name, score) {
    this.name = name;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
};
createUser.prototype.printScore = function () {
    console.log(`The score is ${this.score}`);
}

const shinigami = new createUser('Shinigami', 200);
shinigami.increment()

/**
 * Without new, kira is undefined i.e. createUser function is executed but nothing is returned;
 */
const kira = createUser('Kira', 20);
// kira.increment() // TypeError: Cannot read properties of undefined (reading 'increment')

console.log(shinigami);
console.log(shinigami.printScore())
console.log(kira);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/