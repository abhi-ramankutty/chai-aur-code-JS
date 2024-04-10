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