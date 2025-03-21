// Singleton

// Literal

const id$ = Symbol("id");

const jsUser = {
    name: "Shinigami",
    "full name": "Shinigami Ryuk",
    [id$]: "qwerty",
    age: 22,
    isLoggedIn: false,
    workingDays: ['Mon', 'Wed', 'Fri']
}

console.log("name:", jsUser.name)
console.log("full name:", jsUser["full name"])
console.log("id$", jsUser[id$]);

jsUser["full name"]="Shinigami Rem"
console.log("After update: ", jsUser)

// Object.freeze(jsUser)
jsUser.age = 55;
console.log("After freezing: ", jsUser)

jsUser.greeting= function () {
    console.log(`Hello ${this.name}`)
}

jsUser['greeting']()