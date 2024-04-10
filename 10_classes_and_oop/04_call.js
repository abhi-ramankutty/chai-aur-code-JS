function setUserName(name) {
    this.userName = name;
}


function createUser(userName, email, password) {
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const user = new createUser('Shinigami', 'Shinigami@google.com', "Kira@123");
console.log(user)

/** .call() takes multiple arguments
 * The first one if given "this",
 * it means that you are telling the function to use the given "this" are your exucution context and not your own
 * 
 * The call method is a built-in method in JavaScript that allows you to explicitly define the context (this) for a function call.
 * You can also pass individual arguments to the function using call.
 * ```
 * function introduce(greeting) {
 *  console.log(greeting + ', my name is ' + this.name);
 * }
 * const person = { name: "Bob" };
 * introduce.call(person, "Hello"); // Output: Hello, my name is Bob
 * ```
 */git add