/**
 * const obj =  new Object() -> Singelton obj, i.e. a single instance for the entire life time
 * const obj =  {} -> Non-Singelton obj, i.e. a multiple instance can be created of the same
 */
const user = new Object();
user.id = 1;
user.name = "Sam";
user.isLoggerIn = false;

// console.log(user);

const regUser = {
  id: 1,
  email: "sum@yopmail.com",
  fullName: {
    firstName: "Abhilash",
    lastName: "Ramankutty",
  },
};

// console.log(regUser?.fullName?.firstName); // Always prefer to use optional chaining for additionl check

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};

// const obj3 = { obj1, obj2 };
const obj3 = { ...obj1, ...obj2 };
// const obj3 = Object.assign({}, obj1, obj2) // always start with empty obj so that the original obj is not modified

// obj3['a']="asd"

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const users = [
  { id: 1, name: "name-1" },
  { id: 2, name: "name-2" },
  { id: 3, name: "name-3" },
];

// console.log(users[1]);
// console.log(Object.keys(regUser));
// console.log(Object.values(regUser));
// console.log(Object.entries(regUser));
// console.log(user.hasOwnProperty("id"));

const course = {
  name: "JS in hindi",
  price: 123,
  instructor: "Hitesh",
};


// Destructuring
const { instructor: ins } = course;
console.log(ins)

// JSON -  JavaScript Object Notation
// {
//     a: "as",
//     b: "df"
// }