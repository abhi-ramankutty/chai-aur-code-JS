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
- JS at its core is `single-threaded` & `synchronous` in nature and executes tasks/operations line by line one after the other on a single thread.
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

### JS Engine
- A `JS-engine` is a software component within a `JS-runtime` environment which is responsible for  `interpreting`, `optimizing` and `executing` the `JS-code`. Modern engines use techniques like `Just-In-Time(JIT)` compilation to improve performance.
- `Compilation vs. Interpretation`
    - `Compiled languages` like JAVA/C/C++ completely translate the code into `machine-code` before execution. This has a faster `run-time` with relatively slower `write-time`
    - `Interpreted languages` like `JavaScript` are executed line-by-line, with each statement being interpreted into `machine-code` at run-time. This has a faster `write-time` with relatively slower `run-time`
    - JavaScript engines, however, now incorporate compilation techniques like `Just-In-Time(JIT)` compilation to improve performance.
- `JS-engine processing pipeline(V8)`
    - `Parsing`: The engine's parser reads the source code line by line, checks for syntax errors, and generates an `Abstract Syntax Tree (AST)`. The `AST` is a tree-like representation of the code's structure.
    - `Interpretation`: An interpreter takes the `AST` and transforms it into `bytecode`, which is an intermediate representation. Bytecode is universal and allows for optimisations.
    - `Compilation (JIT)`: Modern engines utilise `Just-In-Time (JIT)` compilation. This involves taking the `bytecode` and compiling it into `machine-code` during runtime. This allows for dynamic optimisations based on `runtime` information. This contrasts with `Ahead-Of-Time (AOT)` compilation where the entire code is compiled `before` execution (as in C/C++).
    - `Execution`: Finally, the generated `machine-code` is run by the computer's hardware
- For reference, <a href="https://youtu.be/oc6faXVc54E?si=PTfLx9DSwmgTdEQo">watch the video here</a>

## Control flow
- An important yet basic part of programming to decide which part is to be executed and which part is to be omitted
- `if (condition) { code to execute if true } else { code to execute if false }`. The code inside the curly braces of `if` block runs only when the condition is `true`. Else the code inside the curly braces of `else` block is executed
- `else-if`: <pre>
    if(condition_1) {
        executed if condition_1 is true
    } else if(condition_2) {
        executed if condition_1 is false but condition_2 is true
    } else {
        executed if both condition_1 condition_2 is false
    }</pre>
- `Comparison operators`: <, >, <=, >=, ==, !=, === (strict equality checks both value and type), and !==
- `Logical Operators`: Logical AND (`&&`) (both must be true), Logical OR (~||~) (at least one must be true) for combining conditions
- `swith` statement: <pre>
switch (key) { 
    case value1:
        // code;
        break;
    case value2:
        // code;
        break; 
    default:
        // code;
    }
    </pre>
- `Nullish Coalescing Operator (??)`: This operator returns the right-hand side operand if the left-hand side is null or undefined.
- `Ternary Operator (?:)`: Note the syntax: condition ? true_expression : false_expression as a concise if-else for single expressions

## Loops
- Loops allow you to repeat a block of code `multiple` times.
- JS offers various types of loops, not just one (e.g., for, while, do-while).
- The existence of multiple loop types provides choices for developers, even if one type can often achieve the same result.
- `loops` create a `block-scope`.<br/> Variables declared with `let` within this block (including in the initialisation in case of `for-loop`) are only accessible within that scope.<br/> Trying to access them outside the loop will result in an error
- In the case of `nested-loops`, there is no difference.<br/>`child-loop` can access `parent-loop's` variables but the `parent-loop` cannot access the variables of `child-loop's` variables.
- There are 2 major keywords associated with `loops`
    - `break`: A way to immediately terminate the execution of a loop. <br/> When `break` is encountered during loop execution, the execution is terminated at that very moment and jumps out of the loop.
    - `continue`: A way to skip further execution of the `loop-block` for the current iteration and proceed to the next iteration

### For loop
- `for-loop`: `for(let i=0; i<10; i++) { execute code }` A basic for loop has 3 key parts.
    - `Initialization`: This is where a variable is declared and initialised, often used as a loop counter (e.g., let i = 0). This part runs only once at the beginning.
    - `Condition Check`: An expression that is evaluated before each iteration (e.g. i<10). The loop body executes as long as this condition remains true.
    - `Increment/Decrement (Update)`: This part modifies the loop counter variable after each iteration of the loop body (e.g., i++). This is crucial for the loop to eventually terminate.

### While & Do-While loop
#### While loop
- The `while-loop` has a simple syntax: `while (condition) { // code to be executed `}.
 It functions similarly to an `if-statement`.In that it checks a condition and the code inside the `while-loop` will continue to execute as long as the condition remains `true`.
- Initialisation of variables used in the condition must occur <b>before</b> the `while-loop`.
- An increment or decrement (or some mechanism to change the condition) must be present within the loop's body to prevent an `infinite` loop.
- A `while-loop` can also iterate over an array by `manually` managing an index.
#### Do-While Loop
- The `do-while-loop` has the syntax: `do { // code to be executed } while (condition);`
- The key difference from the `while-loop` is that the code inside the `do-block` executes at least once, before the `condition` is checked.
- The `condition` is checked at the `end` of the loop iteration.- Since the `condition` is checked at the `end`, even if the `condition` is initially `false`, the `do-block` will still execute `once`.<br/>For example, if score was initialised to 11 in the above example, "Score is 11" would be printed once.
- `do-while-loops` are less commonly used in practice compared to `for-loops` and `while-loops`. They are typically used in specific, rare cases where the code block must execute at least `once`.

### for-of for-in and forEach loop
#### for-of loop
- The syntax of `for-of-loop` is `for (const element of object) { }`
- Used to iterate over various iterable `object` like arrays, strings, and Maps.
- `element` is the iterator variable, which holds the value of each element in the iterable `object`.
- `arrays`: It iterates directly over the values of an array without needing to manage indices.
- `strings`: It iterates over each character of a string.
- `Map`: It iterates over `key-value` pairs as arrays `[key, value]`. <br/>Destructuring can be used within the loop to directly access keys and values separately: `for (const [key, value] of map) {}`
- JS-objects are `NOT` inherently iterable in the same way as `arrays`, `strings`, or `Maps` with `for-of`

#### for-in loop
- The syntax of `for-in-loop` is `for (const key in object) { }`
- The `key` variable holds the property name (key) of the `object`.<br/> And you can access the `value` associated with each `key` using `bracket` notation: `object[key]`
- It is primarily used to iterate over the `keys` of a plain `JavaScript object`.
- Can also be used with `arrays`, but it iterates over the `indices` (which are the `keys` in an `array-object`) rather than the values directly.
- Not suitable for direct iteration over the values or `key-value pairs of Maps` using this syntax.<br/>`Maps` are not designed to be iterated with `for...in`

#### forEach loop
- The syntax of `forEach-loop` is `array.forEach(callbackFunction)`.<br/>It is a method that is directly called on an `array`.
- `forEach` is a `higher-order function` because it takes `another function` (a callback function) as an `argument`.
- `callbackFunction`: The provided callback function is executed once for each element in the array. <br/> The callback function can accept up to three arguments in order:
    - The current `item/value` of the array.
    - The `index` of the current item.
    - The `array` itself.
- There are different ways to define the `callback`:
    - `array.forEach(function(item, index, arr) { })` Using a traditional anonymous function.
    - `array.forEach((item, index, arr) => {})` Using an arrow function (item) => { ... }
    - `array.forEach(callbackFunction)` Passing a reference to an existing function.

### filter, map & reduce

#### filter
- The `filter` method iterates over an array and `returns` a `new` array containing only the elements that pass a certain condition defined in the `callback function`.
- The `callback function` in `filter` receives the `current value` (or element) of the array as an argument (e.g., num).
- Based on the condition, the callback fun should return a boolean value.
    - If tr`ue, the element/item is `added` in the array that is returned
    - If `false`, the element/item is `excluded` in the array that is returned

#### map
- The `map` method iterates over an array and return a new array by applying the provided `callback function` to each element of the original array.
- The `callback function` in `map` receives the `current value` (or element) of the array as an argument (e.g., num).
- The `callback function` should return the `new value` that will be placed in the corresponding position of the new array

#### reduce
- The syntax `reduce` function is `array.reduce((accumulator, currentVal)=>{}, initialValue)`;
- The reduce function takes in 2 arguments. A `callback-function` and an optional `initialValue`
- The `callback-function` inturn taken in 2 arguments.
    - `accumulator`: Also know as previous-value.<br/>
    The value returned at each `iteration` is used as the `value` in `accumulator` for the `next iteration`.
    - `currentVal`: This is the `iterator` which holds the current-item in iteration.
- `initialValue`: Sets the initial-value of `accumulator`.<br/>
This is an optional parameter. If omitted, the `accumulator` takes the first item as its initial-value.

# DOM

## DOM Intro
- `DOM` is the `Document Object Model`. It represents your `HTML document` as a model of objects
-  The `HTML` structure (like `<head>`, `<body>`, `<div>`, `<h1>`, `<p>`) is represented as a hierarchy of objects
- The `window` is the top-level object.
- Inside the `window` object is the `document object`, which represents the `HTML document`.<br/>You can access it via `window.document` or directly as `document` because it's commonly used
- Click <a href="https://excalidraw.com/#json=RfoSEXI7pCPq3XN-dZ2n_,vBTDdJ2ln1yjWMFGB1mF9Q">here</a> to see a small pictorial representation of DOM-Object(tree)

## DOM Selectors
- The primary method discussed is `document.getElementById('yourID')`
- It's crucial to note the case sensitivity of this method `(getElementById)`
- The method returns the specific element with the given `ID`.
- Once an element is selected, its properties (like `id`, `className`) can be accessed using `dot` notation (e.g., `element.id`, `element.className`).<br/>Note that while the `HTML attribute` is `class`, JavaScript represents it as `className` in the `DOM`

- `Accessing Attributes:`
    - The `getAttribute('attributeName')` method retrieves the value of a specified attribute of an element (e.g., `element.getAttribute('id')`, `element.getAttribute('class')`).
- `Setting Attributes:`
    - The `setAttribute('attributeName', 'newValue')` method sets or changes the value of an attribute of an element (e.g., `element.setAttribute('class', 'test')`).<br/>Using `setAttribute` overwrites existing attribute values.<br/>To retain previous values (e.g., multiple classes), you need to include them in the new value
- For easier access, selected `DOM elements` can be stored in JavaScript `variables` (e.g., `const titleElement = document.getElementById('title');`).
- `Manipulating Element Styles:`
    - The `style` property of a `DOM element` allows direct manipulation of its `CSS styles` (e.g., `element.style.backgroundColor = 'green', element.style.padding = '15px', element.style.borderRadius = '10px'`).
    - CSS property names in JavaScript often use `camelCase` (e.g., `backgroundColor` instead of `background-color`).
- `Accessing Element Content:`
    - `textContent`: Retrieves all the text content of an element and its descendants.
    - `innerHTML`: Retrieves or sets the HTML content of an element, including any HTML tags within it.
    - `innerText`: Retrieves the visible text content of an element, taking into account CSS properties like `display: none`
- `Selecting Elements by Class Name:`
    - `document.getElementsByClassName('className')` selects all elements that have the specified class name.
    - This method returns an `HTMLCollection`, which is `NOT` an `array`. It's an `array-like` object with an `item property` and `length`
- `Using querySelector():`
    - `document.querySelector('selector')` selects the `FIRST` element within the document that matches the specified CSS selector.
    - It accepts any valid CSS selector syntax (e.g., tag names, IDs using #, classes using ., attribute selectors, pseudo-classes).
- `Using querySelectorAll():`
    - `document.querySelectorAll('selector')` selects `ALL` elements within the document that match the specified CSS selector.
    - This method returns a `NodeList`, which is also an `array-like` object but has `different` properties than `HTMLCollection`<br/>Importantly, `NodeList has a forEach()` method directly available

- `Differences Between NodeList and HTMLCollection:`
    - Both are collections of DOM elements but have different functionalities.
    - NodeList (returned by querySelectorAll) has a forEach() method.
    - HTMLCollection (returned by getElementsByClassName, document.links, etc.) does not directly have forEach() or other Array methods like map.
- `Looping Through HTMLCollection:` To use `array methods` on an `HTMLCollection`, it needs to be `converted` to an Array using `Array.from(htmlCollection)`.
- `Iterating Through Collections:` Both `NodeList` and (once converted) HTMLCollection can be iterated over to apply changes to multiple selected elements. The forEach() method is a common way to do this

## DOM Manipulation
- The `DOM` allows for `adding`, `removing`, and `displaying` data from sources (like databases) on a web page
- `Selecting Elements:` By using `document.querySelector()` or similar functions of `DOM` to select `elements`.<br/> The selected element can be stored in a variable for easier manipulation
- The `children` property of an element returns an `HTMLCollection` of its immediate child `elements`.<br/> `HTMLCollection` is an array-like object containing the element nodes.
- The properities of the selected element like `innerHTML`, `style`, `className` etc can be accessed and manipulated.<br/>
e.g. `element.style.color = "orange"` `element.style.innerHTML = "Text / HTML content"`
- Classic `for-loops` can be used to `iterate` over the `elements` in an `HTMLCollection`
- `firstElementChild` and `lastElementChild` properties provide direct access to the first and last `element` children of a parent, respectively.<br/>This is useful for targeting specific `elements` without iterating through the entire `children collection`
- You can access `children` from `parents` via properties like `element.children`, `element.firstElementChild`, `element.lastElementChild` and parents can access children via properties like `element.parentElement`;
- You can also access siblings element using `element.nextElementSibling` property;
- The `childNodes` property returns a `NodeList`, which includes `ALL` types of nodes (elements, text nodes, comments, etc.) and not just element nodes.<br/>
The structure represented by `childNodes` is a more accurate reflection of the underlying `DOM` tree.<br/>Even line breaks and whitespace between elements are considered text nodes.<br/>
`Comments` are also included in the `childNodes` NodeList.<br/>
Understanding childNodes is important for comprehending how front-end frameworks like React work with the DOM.


### Creating New Elements
- By using `document.createElement('elementName')`you can create a new HTML element (e.g., document.createElement('div')).
- The new element is created in memory and not yet attached to the DOM.
- The created element can be stored in a variable (e.g., newDiv).
- You can set attributes and style and to this element using the dot(.) notation [e.g. `element.className = 'className'`, `element.id = 'idName'`, `element.style.backgroundColor = 'green'`, `element.style.padding = '12px'`]
- You can also use `element.setAttribute('attributeName', 'attributeValue')` to set other attributes, including custom ones (e.g., newDiv.setAttribute('title', 'Generated Title')).<br/>
    This method is preferred over direct property assignment for arbitrary attributes.

### Adding Text Content to New Elements
- By using the` element.innerText = 'text'` or `element.innerHTML = 'html'` you can add content to the element.<br/> However, these might involve an extra round trip to the DOM.
- By using `document.createTextNode('text')`, you can create a text node. And by using `element.appendChild(node)` you can append this node to the parent element as its child.
    <br/>This is considered a more direct way to manipulate the DOM.

### Adding node to Element
- By using the `element.appendChild(node)`, you can add a newly created `text(textNode)` or `NodeElement` to the target elment

### Edit node Element
- `element.replaceWith()`: The `replaceWith()` method is used to replace the selected element with the newly created one.
- `element.outerHTML`: The `outerHTML` property is used to replace the entire `HTML` of the selected element with a new `HTML string`.<br/>This requires providing the full HTML structure for the replacement

### Remove Element
- `element.remove()` method is called on the selected element to remove it from its parent in the DOM

## DOM Events & Event Listeners
- JS usually executes sequentially (i.e. line by line). But `browser-events` are an exception to this.<br/>These are invoked based on `user-activity` like `click`, `hover`, `keyboard-presses` etc
- There are different approaches to handle these events,
    - Using `Inline HTML attribute`: `<div onclick="alert('Hi')"></div>`<br/>This works, but its not scaleable when it comes to JS application.
    - Using `document.getElementById('someId').onclick = function(e) { }`<br/>This is a much better approach when compared to `Inline HTML attribute` approach, but it still lacks the control on `event-propogation`
    - Using `addEventListener()`<br/>This is the most powerful, modern and preferred way of handling browser events.<br/>This approach also gives you control on `event-propogation`
- `addEventListener()` Syntax: `element.addEventListener(eventType, callbackFunction, useCapture)`
    - `eventType`: This is to identify which `event` you want to listen(check) like `click`, `mouseover`, `keydown`, etc.
        - The `name` of the `event` is passed as a `string`
    - `callbackFunction`: This is the function that is called to handle the event.
        - The `callbackFun` gets a special `event-obj` by default which contains a lot of valuable informations like the `position`, `target-element`, `parent-elements`, `child-elements`, `attributes` etc
        - The `event-obj` also have a set of `methods` like `stopPropogation()`, `preventDefault()` etc. that can control the flow/working of the `event`.    
    - `useCapture`: Used to control `Event Propagation`
        - By `default`, the value of `useCapture` is `false`.<br/>i.e. `Event propogation` is set to `Bubbling`
        - When `useCapture` is set as `true`, `Event Propogation` is set to `Capturing` mode

- `Event Propagation`: Refers to the order in which event handlers are executed when events occur on nested elements
    - `Bubbling (Default)`: The event propagates from the innermost target element up to its ancestor elements.<br/>This is the default behaviour (`useCapture` is `false` or `omitted`).
    - `Capturing`: The event propagates from the outermost ancestor element down to the target element.<br/>This is enabled by setting the third parameter of addEventListener() `useCapture` is  set to `true`.
- `Controlling Event Propagation:`
    - `event.stopPropagation()`: This method stops the event from propagating further up or down the DOM tree.
    - `event.preventDefault()`: This method prevents the default action of the event.

# JS Async - Recap
- JS by default is a `synchronous` language <br/>i.e. The execution of the code happens line by line, one after the other
- JS is a `single-threaded` language where only a single task can be executed at any given point of time.
- The `asynchronous multi-thread` like behaviour of JS is an exception to the default behaviour, which is introduced with the help of external mechanism.
- There are two main type of code (code execution) in JS
    - `Blocking code`: Here the code execution is paused until the current task is completed.<br/>e.g. Saving user details in DB and respond with a success/failure msg
    - `Non-Blocking code`: Here the program continuous its execution to take up other tasks while waiting for a particular operation to finish <br/> e.g. When an `fetch-api` is called, doing other tasks while the data is still being loaded.
- The choice between `blocking` and `non-blocking` code depends on the use case.
- The core part of JS-execiton involves the JS-engine which consists of the `call-stack` and `memory(heap)` section.
    - `memory(heap)` is for memory allocation for the variables and function declaration.
    - `call-stack` is for function execution.
- JS usually runs within a runtime environment such as a web-browser or Node.js. <br/> These runtime-environments provides all the additional functionalities which are beyond the Core JS functionalities.
- The `web-APIs` which are similar to the `APIs` in Node.js gives JS the superpower to handle `asynchronous` operations.
- When JS thread encounters an async-function (say setTimeout), its callback-fun is registered and added to the `callback queue (task queue)` while the main-thread continues its execution
- The `callback queue (task queue)` is used to hold all the callbacks of the `executed/complated` async tasks.
- The `Event loop`, continuouly checks the `call-stack`. If the `call-stack` is empty, it takes the first callback from the `callback(task) queue` and puts it in the `call-stack` for execution.
- In case of async task like `fetch` it uses `promise`.
- All the `results/calbacks` from the resolved `promise` is sent to another queue called as the `microtask/priority queue`.
- This `microtask/priority queue` has a higher priority over the `callback(task) queue` and the `Event-loop` pick the item in `microtask/priority queue` on priority.<br/>This potentially leads to faster execution of `promise resolutions`

# API
- `Application Programming Interface (API)` is like a communication medium between 2 entities like between backend and frontend, or between two different systems
- They facilitate communication even if the systems are written in `different` programming languages
- `API Response Structure`: It is often in `JSON format`.<br/>Tools like JSON formatters (e.g., jsonformatter.org) help in reading and understanding the structure of `JSON data`. 
- `XMLHttpRequest`: The legacy method of making `API` request from JS was using the `XMLHttpRequest` object.
    - This is an older approach but still functional.
    - The steps involved in using 'XMLHttpRequest` are as follows.
        - Creating an `XMLHttpRequest` object: `const xhr = new XMLHttpRequest()`;
        - Opening the request: `xhr.open()` - This is used to specify the methond(GET/POST) and the URL of API-endpoint.
        - Sending the request: `xhr.send()` This method actually `initiates` the HTTP request
        - Request states: The `readyState` of the `XMLHttpRequest` object indicated the current state of the reqest.<br/>There are five states<br/>
        0: request not initialised<br/>
        1: server connection established<br/>
        2: request received<br/>
        3: processing request<br/>
        4: request finished and response is ready.
    - Handling state changes: Using the `onreadystatechange` event handler, which gets executed each time the `readyState` changes.
    - Accessing the response: When the `readyState` reaches 4 (operation complete), the `responseText or response` property of the `XMLHttpRequest` object contains the data received from the server.
    - Parsing the JSON response: The `responseText` is typically a string(JSON string), so it needs to be converted into a JavaScript object using JSON.parse().

# JS Promise
- `Promises` in JS represent the eventual completion (successful or failure) of an `asynchronous` operation and its `resulting value`.
- `Promises` are used for operations that don't complete immediately, such as network requests, file access, database calls, and cryptographic operations etc.
- There are 3 state in `Promise`
    - `Pending`: The initial state, neither `fulfilled` nor `rejected`
    - `Fulfilled`: The operation completed successfully
    - `Rejected`: The operation failed
- `Promises` are `objects` in JavaScript
- A new Promise is created using `new Promise()`. This takes a `callback-fun` as an `argument`.
- The callback-fun has two parameters: `resolve` and `reject`. These parameters are a function in itself
    - `resolve`: `resolve(value)` is called to indicate that the `async` operation was `successful`. You can also pass `data/value` in the `resolve()` function 
    - `reject`: `reject(reason)` is called to indicate that the `async` operation `failed`. And you ususlly pass a `reason(like error msg)` in the `reject()` function
- Promises are consumed using the `.then()`, `.catch()`, and `.finally()` methods.
    - `then(onFulfilled)`: When the promise is `resolved`, the callback `onFulfilled` in `then` is triggered/executed<br/>This callback receives the `value` that is passed by the `resolve()` function.<br/> `.then()` can be chained and the value returned from one `.then()` is passed to the next `.then()`
    - `catch(onRejected)`: When the promise is `rejected`, the callback `onRejected` in `catch` is triggered/executed.<br/>This callback receives the `reason` that is passed in the `reject()` function
    - `finally(onFinally)`: Irrespective of whether the `promise` is `resolved` or `rejected`, the `onFinally` callback in `finally` is executed 
- Promises can also be consumed using the `async-await` syntax. This is a more modern appraoach.
- `acync function` is declared using the `async` keyword, and it implicitly returns a `Promise`<br/>e.g. `async function newFun() {}`
- The `await` keyword is used inside the `async function`, which will `pause` the execution until the `promise` settles (either `resolves` or `rejected`)<br/>The `await` keyword precedes a `Promise`.
- `const result = await fetch('https://some-url')`<br/>
In the above `await-expression`, the `resolved` value of the `promise` is `returned` and store in the variable `result`.
- Errors in `async-await` code are handled using the `try-catch-block`.<br/>If a `promise` is `rejected` after being awaited in an `await-expression`, it will `throw` and `error` which can be caught in the `catch-block`.
- The `fetch()` API is a built-in JS function used to make network-calls. `fetch()` returns a `Promise` that is `resolved` to get the `response` from the request.
- The response from `fetch()` often needs to be parsed. For `JSON` responses, the `.json()` method is used on the response-object.<br/>This `.json()` also returns a `Promise` that resolves to the `JSON` data. Hence the `.json()` should also be awaited.<br/>
```
async-await example:

async function getAllUsers() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
		console.log(data);
	} catch (error) {
		console.log(`getAllUsers-Error: ${error}`);
	}
}
```

# Fetch-API
- `fetch()` is a global method (of browser window / node env) that starts the process of fetching a resource over the network and returns a `Promise`
- The `fetch()` promise `resolves` to the `Response object` representing the `response` to your `request`.
- A `fetch()` `promise` only `rejects` when the request `fails`, for example, because of a badly-formed request URL or a network error.<br/>It is crucial to note that `HTTP-error` status like `404`, `504` etc are received as a `resolved` promise and <b>NOT</b> as a `rejected` promise.
- A `rejected` promise in `fetch()` typically indicates that the request call itself was met with failure.
- `fetch(inputURL, RequestInit?)`: By using the `RequestInit` parameter, you can add additional info like headers, method, requestBody etc.
- One important point to remember is that all the `resolved` `promises`(including those from `fetch`) are put into a special queue called the `MicroTask Queue / Priority Queue`.<br/>The items in this has a `HIGHER` priority for `execution` over the regular task-queue items.
- Internally, `fetch()` execution takes place in a 2-step process.<br/>
One part is for managing the Promise state(`onFulfilled` and `onRejected` arrays) in memory and the other is to handle the `network-call` requests (by browser / nodejs env)
    - The `onFulfilled`(for `resolve` callbacks) and `onRejected`(for `reject` callbacks) arrays are private and not directly accessible.
    - There is a `data-placeholder` in the memory which is initially empty. This gets filled with the data from either `onFulfilled` or `onRejected` array.
    - When you get a response(resData) in the `.then((resData)=> {})` block, you are essentially accessing the `data` that has been populated in the `data-placeholder` in the memory.

# JS Classes and OOP
- In JS, there are classes, but under the hood its built on top of JS's existing prototype system
- JS primarily is a `prototype-based` language. The concept/keyword of `class` in JS are essentially a `syntactic-sugar` over the existing `prototype-based inheritance` mechanism of JS.
- `Object-Oriented Programming (OOP)`: `OOP` is basically defined as a programming paradigm/style that structures code in a particular way.
- `Objects` are basically a simple collection of properties and methods (variables/const and functions).
- The concept of `OOP` and `class` was introduced in JS to address the issue of messy and non-reusable code(spaghetti code)<br/>This also enables the utilizations of concepts and features from other languages like creating and injecting service.
- Some of the key concepts of OOP with JS are
    - `Object Literals`: The most basic and direct way of creating a object(literally) in JS is by using the curly braces {}.
    - `Constructor Functions`: These are esentially function, and with the help of the `new` keyword, you can create multiple instances of the object with similar properties and methods
    - `Prototypes/Proto`: This is the core mechanism of JS, which even enables the class/object like behaviour and functionality in JS.
    - `Instances and the new Keyword`: An instance is a specific object created from a constructor function. The new keyword is crucial for creating these instances

- The 4 Pillars (Fundamental Concepts) of OPP are
    - `Abstraction`: Showing only the essential details to the user and hiding the complex implementation details.
    - `Encapsulation`: Encapsulation bundles `data (attributes)` and `methods (functions)` that operate on that data into a single unit, called a `class`.<br/>It also involves controlling access to the data.
    - `Inheritance`: The mechanism by which one object can acquire the properties and methods of another object.
    - `Polymorphism`: The ability of an object or method to take on many forms or have multiple functionalities

``` javascript
const user = {
	name: "Light yagami",
	alias: "Kira",
	killCount: 5838,
	isShinigami: false,

	greeting: function () {
		return `Hi, I am ${this.alias}`;
	},
};
```
- Here is an example of an `Object Literal`
    - you can access the properties and methods by using both dot notation (.) and bracket notation ([])
- The `this` Keyword: `this` refers to the current execution context.<br/>
`this` allows a method within an object to access the object's own properties (look at the above example).
    - In an object, `this` referes to the object itself.<br/>
    In a global context, `this` referes to` window object` in `browser` and g`lobal-obj` in `node.js`
- With `object-literals`, when you have to create the `multiple` objects of the `same` structure with `different` values, you basically have to write `repetitive code`.<br/>
This becomes highly `inefficient`

- `Constructor Function & new keyword`
    - `Constructor functions` are introduced as a solution to the repetition problem.<br/>The `new keyword` is essential when using `constructor functions`
    - The primary purpose of using the `new` and `constructor-fun` is to create `multiple-independent instances` of an `object`.<br/>
    This prevents the data of one object being accidentally over-written by other

``` javascript
function User(name, killCount, isShinigami) {
	this.name = name;
	this.killCount = killCount;
	this.isShinigami = isShinigami;

	this.greeting = function () {
		return `Hi, I am ${this.name}`;
	};
}

const user1 = new User("LightYagami", 7932, false);
const user2 = new User("Ryuk", 347932, true);
```
- In the above code-snippet example, a custom `User Constructor-fun` is created.<br/>
It takes in `name`, `killCountand` and `isShinigami` as parameters.<br/>
By using `this`, the values of the params are assigned to the object's properties
- By using the `new` keyword, a `new instance` of the `User-object` is created<br/>
`const user1 = new User("LightYagami", 7932, false);`
- You can also define methods within constructor functions using `this`<br/>`this.greeting = function() { ... }`
- Even `without` an `explicit return` in the `constructor-function`, the newly created object is `implicitly returned`.
- While creating an object with a `constructor-function` and `new` kayword, it goes through a 4-step process
    1. An empty object is created
    2. The `constructor` function is called
    3. The arguments are bound to `this` keyword.
    4. The `new object` is returned

- The `.constructor` property: Every object in JS has a `.constructor` property. This points back to the function that created it. For ex. `user1.constructor` will point to the `User function`
- To check if the object is an `instance` of a particular `constructor`, you can use the `instanceOf operator`

## Class
- Like already discussed, `class` is JS is a syntactical-sugar over the existing prototype-based inheritance
- A `class` is declared using the class keyword, followed by the `class-name` and `curly-braces`
- Insude the curly-braces of the class, you can define your propertirs and methods
- `constructor` is a special method within a class. This is automatically called when an `instance` of the `class` (new object) is created while using the `new` keyword
- `constructor` is used to initialise object properties, often by taking arguments.
- Within the constructor and other methods of the class, the `this` keyword referes to the current instance of the class.
- Methods are defined directly within the class body without the need for the `function` keyword

## Inheritance
- In JS, `inheritance` is achieved by using the `extends` keyword.<br/>A `child-class` can extend a `parent-class`, and inherits its properties and methods.
- `super()`: `super()` keyword is used in the `constructor` of a `child-class` to call the constructor of the `parent-class`.<br/>This is necessary to initialize the properties of the inherited class
- When a `child` extends a `parent-class`, `instances` of the `child` can access the properties and methods of the `parent-class`.<br/>You can override the functionalities of the method from the parent class by defining a method with the same name in the `child-class`
- The instanceof operator can be used to check if an object is an instance of a particular class (or its parent classes).

## Static
- Static properties and methods are defined using the `static` keyword within a class.
- Static members belong to the `class` itself, `NOT` to any specific `instance` of the class.
- Static methods are typically used for utility functions or functionalities that are related to the class but don't need access to instance-specific data.
- Static methods `cannot` be directly accessed on instances of the class. They must be called `directly` on the `class` itself.
- `Inheritance` affects static members in that<br/>`child-classes` can inherit `static members` from `parent-classes`, but `static methods` in a `parent-class` do not automatically have access to this referring to the instance of a `child-class`

# Call, Bind & Apply
- These are the 3 JS methods used to control the `execution context` of a function, specifically the value of `this` inside that function

## Call
- Understanding the `call` method requires you to have a basic understanding of JS's execution-context.
- `Execution-Context(EC) Recap`
    - JS's EC has 2 main parts. Call-Stack and Memory(Heap)
    - Call-Stack is to manage the execution of functions.
    - A global-EC is always present (like at the base)
    - When a function is called, a new function-EC is created and added on top of the Call-Stack for execution<br/>Each function-EC again has it own Call-Stack and Memory(Heap)
- The `this` keyword in a `function` referes to the `current execution context`
- When you have a `function` inside another `function`, the `this` within the `inner-function` does not automatically refer to the `outer-function's` execution-context.<br/>It points to the `global-EC`
``` javascript
function setUserName(userName) {
    this.userName = userName;
}

function createUser(userName, email, password){
    setUserName(userName)
    this.email = email;
    this.password = password;
}
```
- in the above example, the `this` of `setUserName` points to the `global-EC` and not to the EC of `createUser`
- The global `this` referes to the `window-object` in the `browser` and an `empty-object` in `Node.js` env
- Simply calling the `inner-function (setUsername)` from within the `outer-function (createUser)` only executes `setUsername` within its own execution context.<br/>Any changes to `this` inside `setUsername` are local to its context and are lost when that context is removed from the `call-stack`

- JS provides `.call()` method to explicitly control the value of `this` when a function is executed.
- Thes `.call()` method allows you to call/invoke the function with a specific value of `this` and the individual arguments are passed directly
- `.call()` Syntax: `functionName.call(thisArg, arg1, arg2, ...)`
    - The first argument `thisArg` becomes the `this` value inside `functionName` when it is executed.
    - The subsequent arguments `arg1, arg2, ...` are passed as parameters to `functionName`
- In the above code-snippet, by using `setUserName.call(this, userName)`, the `setUserName` function is executed with the context of `createUser` function's `this`.<br/>This allows the `setUserName` to correctly set the `this.userName` property to `createUser`'s obj
- `Key Use Case`: The primary purpose of `.call()` is to borrow the methods and execute them within the context of a different object.<br/>This allows the manupilation of the object(calling object like createUser) properties using the borrwed method.

## Bind
- The `.bind()` method in JS is a fundamental tool for managing the `this` of functions. <br/>And for creating partially applied functions.<br/>`.bind()` do `NOT` trigger the function immediately, rather `returns` a `new-function` with `pre-set values/context`.
- The primary role of `.bind()` is to `create` a `new-function` where the value of `this(context)` is permanently set to a specifuc value.<br/>This is especially useful when dealing with `this` in call-backs, event-handlers etc where the original-context of `this` is lost
- `.bind()` also allows you to pre-set arguments for a function, effectively creating a `new function` with some of its arguments already `filled in`.
- `.bind()` does not immediately execute the original function. Instead, it returns a `new-function` (a bound function)
- The first argument you provide to `.bind()` becomes the `this` value within the bound-function's execution context
- Any subsequent arguments passed to `.bind()`, are pre-set as agruments for the new `bound-function`.
- When you eventually call the bound-function, it executes the original function using the bound this value(and any pre-set arguments) followed by any additional arguments you provide at the time of call(execution)
### Key Points
1. `.bind()` returns a new function; it does not execute the original function immediately.
2. The bound this value is permanent and cannot be changed later.
3. Partial application allows you to create more specialized functions from more general ones

```javascript
/** Example 1 */
class ReactApp {
    constructor() {
        this.library = 'React';
        this.server = 'http://localhost:3000';
        document.querySelector('button').addEventListener('click', this.handleClick.bind(this))
    }

    handleClick() {
        console.log('handleClick Triggered', this)
    }
}

/** Example 2 */
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFunc = person.greet.bind(person);
greetFunc(); // Output: Hello, my name is Alice

const unboundGreet = person.greet;
unboundGreet(); // Output: Hello, my name is undefined (or error in strict mode)


/** Example 3 */
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // Pre-fill the first argument with 2
console.log(double(5)); // Output: 10 (2 * 5)
const triple = multiply.bind(null, 3);
console.log(triple(6)); // output: 18 (3*6)
```

# Objects - Miscellaneous | Configurations
- JS allows direct access to the `properties` within an `object`.
- Objects inherit properties and also have their own built-in properties like `constructor`, `hasOwnProperty`, `isPrototypeOf`, `toLocaleString`, `toString`, `defineProperty`, `getOwnPropertyDescriptor`, etc..
- While some object `porperties` are directly visible, some `properties` might not be immediately apparent but can be revealed with deeper inspection.
- `Object.getOwnPropertyDescriptor()`: This method is introduced as a way to get detailed information (a "description") about a specific property of an object.
- By using `Object.getOwnPropertyDescriptor(Math, 'PI')`, you can see the `hardcoded-value` and the propetries `writable`, `enumerable` and `configurable` are all set to `false`.<br/>This is why you cannot directly change `Math.PI`
- Once `configurable` is set to `false`, you cannot modifiy the properties hence-forth
- JS allows the user to define and control attributes of their own object properties, such as whether they are `writable`, `enumerable`, and `configurable`.<br/> By default, properties added to an object are typically `writable: true`, `enumerable: true`, and `configurable: true`.
- By using `Object.defineProperty()`, you can define/modify the attributes of a specific property on an object.
- `writable` - Setting `writable: false` on a property prevents its value from being changed after it's defined, although it won't throw an error in strict mode in older JavaScript versions
- `enumerable` - Setting `enumerable: false` prevents a property from being included in `for...in` loops and potentially other enumeration methods like Object.keys();
- `configurable` - Setting `configurable: false` prevents the further defining/modification/configuration of the properties