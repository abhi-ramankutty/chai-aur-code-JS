# Intro
- JS is a single-threaded language, having a sequential flow of control, synchronous (with asynchronous capabilities via web apis)
- The single thread has a call-stack and a memory (memory heap)
- Call-stack is a stack of functions that needs to be executed
- The call-stack also manages the execution context.
- Stacks by nature follows LIFO workflow (i.e. Last In - First Out)

``` javascript
function first() {
    console.log('first');
    second();
}
function second() {
    console.log('second');
    third();
}
function third() {
    console.log('third');
}

first()
/* Run in browser and check the Scope in Sources */
```

# Execution Context [EC]
- When you run a JS code, an environment is created to handle the execution of the code. This is called as Execution Context..
- This <b>EC</b> contains the running code and anything and everythig that aids in execution
- There is a Global EC and Function EC for every function that is invoked
- There are 2 phases in while executing a JS code
    1. Memory Creation Phase
        - Creates the global obj (Window in browser and global in NodeJS)
        - "this" obj is created and binded to the global obj
        - Sets up memory for variable and function references
        - Stores function(full function definition) and variables in global and set the value of all variables(var) to undefined (i.e. hoisting)
    2. Execution phase
        - Executes the code line-by-line one after the other
        - If a function is to be executed, a new function execution context is created (inside global execution context)
### Hoisting
During execution phase, the interpreter appears as if all the variables and function declaration looks like has been moved to the top <br/>
This is because of the creating phase of the execution context <br/><br/>
This works differently for variables with let and const. This is because of the block scope characteristics of let and const.<br/>
For let and const variables, initialization and assignment happens in execution phase of EC
``` javascript
let x = 5;
x = undefined; // Initialize
x = 5; // Assign
```

# Async, Task-Queue n Event-Loop
![Event Loop](https://miro.medium.com/v2/resize:fit:720/format:webp/1*iHhUyO4DliDwa6x_cO5E3A.gif)
- JS executes tasks/functions one by one
- When a async item is triggered, lets say a setTimeout from WebAPI, it gets registed as a callback and it goes to the Callback/Task-Queue
- Once the call-stack is empty, the event loop picks the item from the callback-queue and puts t in the stack for execution.
- The event loop keep repeating this till the callback queue is empty
- In case of Promise, the callback is sent to a different queue called <b>Priority/Microtask</b> queue
- This works exactly the same but the event loop gives priority to this queue over the normal callback/task queue