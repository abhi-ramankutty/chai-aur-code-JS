const tinderUser = new Object({ name: "Sam", age: 22 });

console.log("tinderUser", tinderUser);

const user = {
  name: {
    firstName: "Yuri",
    lastName: "Boyka",
  },
  email: "yuri_boyka@ufc.com",
};
console.log("user", user);
console.log("firstName", user.name.firstName);

const obj1 = { a1: 11, b1: 12 };
const obj2 = { a2: 21, b2: 22 };

// const obj3 = { obj1, obj2 };
// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2);

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj3", obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];


users[1].email
console.log("tinderUser", tinderUser);

console.log("keys", Object.keys(tinderUser));
console.log("values", Object.values(tinderUser));
console.log("entries", Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));