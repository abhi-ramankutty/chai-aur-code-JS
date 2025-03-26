# JS Intro | Basics

## Variables
- `var`, `let`, and `const` are used to declare variables, each with distinct behaviors and scopes.
- `var` has global scope i.e. variable declared is accessible through the app.
In case the variable is redeclared, it is allowed. <b>[Not at all recommended to use var]</b>
- `let` and `const` has block level scope and cannot be redeclared with-in the scope
- `let` - the values can be modified / reassigned.
- `const` (constant) by definition the variable declared using const cannot have a new value reassigned. [in case of object, the value of object can be modified since it saves the reference of the data, no reassigning is happening in this case]
- By default, the value of a variable that is declared but has not been assigned any value is `undefined`;

- `"use strict"`- This informs/indicates the engine to treat all the JS code as newer version.
There is no scope of writing `"use nostrict"` and things like that to escape from the default behaviour. Once set, it cannot be modified. [Recent engines doesnt even require this since by default its considered to be strict]

## Data types and values

### Primitive Data types
- There are 7 main types of Primitive Datatypes in JS. They are `call-by-value`,
- `number` - represents floating point number value between the range `(2^53 - 1)` and `-(2^53 - 1)`
- `BigInt` - built-in object that represents whole numbers larger than (2^53 - 1)
- `string` - holds/represent character(s) 
- `boolean` - holds either `true` or `false` value
- `null` - Standalone value which reprents emptiness. <i>typeOf value of `null` is `object`</i>
- `undefined` - this represents that a variable is declared but its not assigned with any value. <i>typeOf value of `undefined` is `undefined`</i>
- `symbol` - introduced in ES6 that represents a unique identifier

### Non-Prmiitive(Reference) Data types
- Anything that doesn't belong to Primitive data types falls under Non-Prmiitive(Reference) Data type.
- `Objects` - Holds data as key-value pairs
- `Array`- Special type of object. Basically a list of items where index is key and the value is the item at that position in the array.
- `function` - re-usable set of code that performs a designated task.
- `Date` - Another special object used for dealing with data-time data
- `RegExp` - Another special object which
is used to store patterns to match characters/character set in a string;

### Data types - Summary
- <a href="https://262.ecma-international.org/5.1/#sec-11.4.3">Type of Data types</a>


## Conversion
- While using the `Number()` to convert data to type `number`, all the truthy-number strings are converted to number, all the falsy values like `empty string`, `null`, `false` are converted to 0.
- All the input that cannot be converted to number like `undefined` , `"asdasdas"` etc will be returned as `NaN` i.e. `Not a Number` [type of `NaN` is again `number`]

- While using `Boolean()` to convert data to boolean type, all the truthy values like `non-zero numbers`, `string`, `obj` return `true` and all falsy values like 0, `empty string`, `null`, `NaN` return `false`;

### Prefix and postfix increment
let a = 5;

let b= ++a, this is an example of prefix increment.
here the assignment is done after increment, i.e, the value of b = 6

let b= a++, this is an example of postfix increment.
here the assignment is done before increment, i.e, the value of b = 5

## Comparision
- The process of comparing two values (or type) of data using operators. Thw output of such comparison is a boolean value.
- By default, comparision of 2 numbers say 2>0 or 1!=5 is straight forward and will give straight forward answer.
- Problem occurs when 2 different data types are being compared. since it doest work as expecrted. This is because the comparison operators like >, >=, < and <= will convert the data on the LHS to the the datatype of RHS.
- Equality operators doesnt convert the value. It just check for equality.
- To aovid this problem, strict comparions are used (as a means of best-practice). Strict comparison check for the dataType and the vause to make its check..

## Stack & Heap Memory - Basics
- Stack Memory is used for storing values of all the Primitive data types
- In Stack, a copy of the value is created (while reassigning)<br/>
Eg: let a = 5; let b = a; <br />
If you update the value of b, value of a wont change (since a copy of the value was assigned to b) 
- A call stack is created during function execution to store/access local variables, parameters, and return address of the function.
- Stack follows FIFO strategy.(i.e. First In First Out) 
- The data can be allocated and accessed relatively fast
- 
- Heap Memory is used for all the reference (non primitive) data types
- In Heap, the reference of the original data is assigned to the variable(s);<br/>
Eg: let a = {name: 'Yuri'}; let b = a;
If you update the value of name in b, value of name in a will also be updated (this is because the same reference is assigned to both a & b)
- The allocation and accessed to data is relatively slow.

## Strings
- `strings` are used to represent textual data.
- `string` is one of the primitive values and the `String` object is a wrapper around a `string` primitive.
- Can be created( or declared) using `single-quotes`, `double-quotes` or `back-ticks`
- `back-ticks` - also knows as template-literals are used fo sting interpolation as well
- `string` can also be created(or declared) using the String Object`let name = new String("Tanjiro")`
- `String` is also a type of object and the `index(position)` of the character acts as the `key`, thus forming a `key-value` pair like normal object.
- Like all objects, `string` contains a set of properties and methods which can be accessed using a dot(.) operator

## Numbers, Maths & Date-Time
- Please refer to doc or refere back to <a href="https://youtu.be/_KqpeDc47Ro?si=A7OnMN3JNggL9ANq">Number & Maths</a> and <a href="https://youtu.be/tGLCuoumaGY?si=opZAdENY_2Z02ZFK">Date-Time</a> videos

## Arrays
- array is an object n JS which can store a collection of multiple elements(items) of different data-types in it.
- arrays are resizable and its index starts with 0
- JS array copy operations creates a <em>shallow copy</em> of the array. (i.e. while copying an array, the properities share the same reference point)
- since array is an object, it comes with a set of properties and methods. Check MDN Docs for reference.
    - `array.slice` - slice is a method on array that creates a shallow-copy of the portion of an array into a new array
    - `array-slice` takes 2 inputs. start and end index.
    - startIndex is included where-as the endIndex is not included
    - `slice` does <b>not</b> modify the existing array, it return a <b>new</b> array.
    <br/>
    <br/>
    - `array-splice` - splice is a method on array that can add, remove or replace items in the array
    -  `array-splice` takes in multiple inputs. i.e. startIndex, deleteCount and ...items(optional)
    - `splice` return the removed items and also modifies the existing array(removed the returned items)

## Objects
- `object` - its a data-type in JS which is essentially a collectin of properties n methods in JS
- `object` created using constructor / Object.create() are `Singleton` in nature (i.e. a single instance of the object is maintained)
- `object` created using object literals (i.e. abc = {}) are non-singleton in nature
- `let abc = {a: 1, "a b": 2, [sym]=3}`. The properties of the obj can be accessed via multiple methods like mentioned below
    - The dot(.) notation - abc.a
    - The bracket([]) notation - abc["a b"]
    - The bracket, with symbol - abc[sym]
- To override the value of a property inside an object, just access the property and assign a new value [abc.a = 5]
- You can also freeze an object to make it immutable by using the `Object.freze(abc)` method.

- Object de-structuring: <pre>
const course = {
    name: "JS in Hindi",
    channel: "Chai aur Code",
    courseInstructor: "Hitesh Choudhry",
    price: 999,
};
const {name, courseInstructor: instructor, price} = course;
console.log(`${name} by ${instructor} | price: ₹${price}`)
</pre>

- `JSON` - JavaScript Object Notation [read basics]

## Functions
-  A reusable block of code designed to perform a specific task.
- `Functions` can take inputs, process them, and return a result.
- `Functions` can be defined using function declarations or function expressions;
- Function `params`(parameters) are the inputs that are written in function declaration
- Function `args`(arguments) are the inputs that are given in function during its execution(or calls).
- function `params` can be assigned with a default value with an assigment during fun-declaration`eg: function loginUserMsg(userName = "Kira") {}`
- When multiple flexible params are to given as input, you can use the `rest operator (i.e ...)`. This depecits the args as an array of `inputs`.<br/>`eg: function calCartValue(...vals) { console.log(vals)}`<br/>`...vals` can take multiple arguments as an input and this will be treated as an array of input-args in `vals`

## Scopes
- `Scope` refers to the accessibility of variables and functions within certain regions of a program
- There are 3 main types os scopes in JS.
    - `Global scope`
        - Variables declared outside of any function or block have global scope.
        - They can be accessed from anywhere in the JavaScript code, including within functions
    - `Block scope`
        - Variables declared within a block (e.g., inside `if` statements, `for` loops, or curly braces `{}`) have block scope.
        - Variables declared with `let` and `const` are block-scoped.
        - This also helps to avoid variable hoisting issues related to var
    - `function/local scope`
        - Variables declared within a function have function scope.
        - They are only accessible within that function.
        - Variables declared with `var` inside a function are `function-scoped`.
- variables declared with `let` & `const` have `block-scope` where-as variables declared with `var` has `global-scope`
- One unique behaviour of `var` can be seen in `function/local scope` where it acts like a `block-scope`

## this
- `this` refers to the object that a function is associated with.
- The value of `this` is determined by how a function is called and how it was defined/declared;
- `this` referes to the `global` obj(`Window` in browser and `gloabl` in node), when used outside any function;
- In regular functions like `function abc() {console.log(this)}`, this refers to the `global` object
- When a `function` is called as a method of an object, `this` referes to the obj
<pre>
let myObject = {
        name: "John",
        myMethod: function() {
        console.log(this.name); // this refers to myObject
    }
};

myObject.myMethod(); // Output: John
</pre>
- When a `function` is used as a constructor (with the `new` keyword), `this` refers to the newly created object.
- `Arrow` functions do not have their own `this` context.
- `Arrow` functions inherit the `this` value from the enclosing (lexical) scope.

## IIFE - Immediately Invoked Function Expression
- A function that is executed immediately after its declaration/creation (i.e. created)
- IIFEs create a new scope, which helps to avoid variable conflicts.
- Variables declared within an IIFE are local to that function, preventing them from polluting the global scope and potentially causing naming conflicts.
- They are a useful tool for code encapsulation.

## JS Call Stack & Execution Context
- For video reference, please check the playlist by <a href="https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB">JavaScript: Under The Hood - By Traversy Media</a>

### Thread & CallStack
- JS is fundamentally a `single-threaed` language. i.e. it has a single sequential flow of control.
- Operations are executed one line after another in a sequential manner
- At its core, JS execution is `synchronous` in nature. 
- While JS is `synchronous`, it has `asynchronous` capabilities with the help of web APIs. A `callback` or a `promise` is returned to the `call-stack` once the execution of `asynchronous` operation is completed.
- A `thread` in JS has a `call-stack` which is a stack of functions to be executed. It also manages the `execution-context` of each function
- `Global Execution Context` is always at the bottom of the call stack.
- `LIFO (Last In, First Out)`: The call stack operates on the principle of last in, first out. The last function pushed onto the stack is the first one to be popped off once it completes execution.
- When a `function` is called, it is pushed onto the call stack. Once the `function` finishes executing, it is popped off.
- In cases of `nested function` calls, the outer function remains on the stack while the inner function is executed and then popped off, followed by the outer function
- For reference, <a href="https://youtu.be/-G9c4CMMUKc?si=fbCuTmYNF8blFN_f">watch the video here</a>

### Execution Context & Hoisting
For reference, <a href="https://youtu.be/Fd9VaW0M7K4?si=uA0AbaJKS-8Xjk_8">watch the video here</a>

#### Execution Context
- `Execution Context` is a special environment created by JS-engine to handle the transformation & execution of the code
- It contains the current running(executing) piece of code and everything needed for its execution.
- There are two main types of `execution context`
    - `Global execution context` - Created when the script starts running
    - `function execution context` - Created each time when a function is evoked(called)
- Every `execution context` has 2 phase
    - `Creation phase` (Memory creation phase)
        - This occurs as soon as the execution context is created
        - The `Global object` is created (`window` in browser and `global` in Node.js)
        - `this` is bound to the `Global object`
        - `Heap Memory setup`- Variables are allocated memory and initialized as `undefinied` in `heap`
        - For `functions`, the whole function declaration is stored in the memory
    - `Execution phase` 
        - In this phase, the JS code is executed line by line, one after the other.
        - When a function is evoked, a whole new `function execution context` is created. This again follows the same `Creation` and `Execution` phase of an `execution context`

#### Hoisting
- `Hoisting` is the process by which the interpreter appears to move the declaration (variable and function) to the very top of their scope before execution.
- During the `Creation` phase of `execution context`, function declarations are stored as a whole in the memory.
- This process allows the `functions` to be called before their actual `function declaration` while executing the code.
- Variables declared with `var` are also hoisted and initialized as `undefined`. 
- This allows the varables to be assessed before the actual declaration without throwing an error. (value will be `undefined`)
- Variables declared with `let` and `const` are also hoisted, but they are not initialized. They reside in a Temporal Dead Zone(TDZ) from the begining of the scope, which cannot be accessed until their declaration. Hence accessing such variable will throw error.
- `let` and `const` are `block-scoped` where as `var` is `globally or function-scoped`.
- `block-scoped` variables are stored in a separate scope and not in the global scope during the `Creation` phase of `execution context`and hence not accessible globally.

### Asynchronous JavaScript, Task Queue & Event Loop
- JS at its core is s`ingle-threaded` & `synchronous` in nature and executes tasks/operations line by line one after the other on a single thread.
- `Blocking` operation are the one which takes long time to execute and `halts` further execution of the code.
- `Non-Blocking` operation are the one which takes long time to execute but does `not halt` further execution of the code. It allow the program to continue execution while the operation is in progress.
- `Web APIs` (like setTimeout, DOM manipulation methods, and fetch in browsers, and file system operations in Node.js) enable `asynchronous` behaviour. These APIs are `not` part of the core JavaScript language itself.
- The `asynchronous` functions often uses the `callback`
- The completed `asynchronous` operations are added to the `callback(task) queue`.
- There is an `event-loop`, which keeps continuously monitoring the `callback queue` and `call stack`.
- When the `stack` is empty, the `event-loop` takes the first item entered in the `callback queue` and put it into the `stack` to complete the task (i.e. execution)
- When it comes to `Promise`, the `results/callbacks` from the `resolved Prmoise` are pushed to a separate queue called as the `microtask/priority queue`.
- Since the `microtask queue` has a `higher priority` than the `task queue`, the `event-loop` processes the microtasks queue items before the `event-loop` checks the regular `task queue`
- The core takeaway is that while the JS is synchronous and single threaded in nature, with the help of `web APIs`, `task queue`, `microtask queue` and `event-loop` together it enebles the JS to be `asynchronous` and `non-blocking` in nature
- For reference, <a href="https://youtu.be/28AXSTCpsyU?si=63dmm1IyxPMQDnXX">watch the video here</a>

### Memory Storage
- JS uses the `stack` and `heap` to store data.
- All the `primitive values` are stored directly in `stack` and has a `fixed` amount of memory allocated for the data in the `stack`.
- Assigning a `primitive` variable to another creates a copy of the value on the `stack`. Changes to one variable do not affect the other.
- All the `reference data` like objects, function n arrays are stored in `heap`. It has a larger memory area and it is accessed via reference-point and not directly.
- Assigning a `reference` type variable to another creates a new reference that points to the same object in the `heap`. Modifying the object through one reference will affect all other references pointing to the same object
- Higher-level languages like JS automatically allocate memory when objects are created.
- It also automatically frees up memory when it's no longer needed through a process called garbage collection
- For reference, <a href="https://youtu.be/Hci9Bb4_fkA?si=cxtMG6xWb79poaAq">watch the video here</a>