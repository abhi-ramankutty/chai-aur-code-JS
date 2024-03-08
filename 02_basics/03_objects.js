// Singelton, via constructor
const obj = Object.create({});

// Object literals
const mySym = Symbol("id");
const user = {
  [mySym]: "userId",
  name: "Abhilash",
  "full name": "Abhilash Ramankutty",
  age: 29,
  location: "Bengaluru",
  email: "abhi.test@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};

console.log(user);
console.log(user.name);
console.log(user["full name"]);
console.log(user[mySym]);

user.email = "abhi.test@google.com";
console.log(user.email);

/**
 * Once an object is freezed, you cannot change the value of any key what-so-ever
 */
Object.freeze(user);
user.email = "abhi.test@rediffmail.com";
user['asd'] = "asd"

console.log(user);
