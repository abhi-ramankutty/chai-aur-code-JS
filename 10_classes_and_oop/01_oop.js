const user = {
  name: "Abhilash",
  age: 29,
  isLoggedIn: false,

  printDetails() {
    console.log({
      name: this.name,
      age: this.age,
      isLoggedIn: this.isLoggedIn,
    });
  },
};

console.log(user.printDetails());

console.log('-----------------------------------')

function User(name, age, isLoggedIn) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.name}`)
  };
  return this
}

const userOne =  User('Kira', 17, false);
const userTwo =  User('Shinigami', 17, false);

console.log(userOne.name)