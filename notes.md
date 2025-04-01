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


- `Creating New Elements`:
    - By using `document.createElement('elementName')`you can create a new HTML element (e.g., document.createElement('div')).
    - The new element is created in memory and not yet attached to the DOM.
    - The created element can be stored in a variable (e.g., newDiv).
    - You can set attributes and style and to this element using the dot(.) notation [e.g. `element.className = 'className'`, `element.id = 'idName'`, `element.style.backgroundColor = 'green'`, `element.style.padding = '12px'`]
    - You can also use `element.setAttribute('attributeName', 'attributeValue')` to set other attributes, including custom ones (e.g., newDiv.setAttribute('title', 'Generated Title')).<br/>
    This method is preferred over direct property assignment for arbitrary attributes.
- `Adding Text Content to New Elements`:
    - By using the` element.innerText = 'text'` or `element.innerHTML = 'html'` you can add content to the element.<br/> However, these might involve an extra round trip to the DOM.
    - By using `document.createTextNode('text')`, you can create a text node. And by using `element.appendChild(node)` you can append this node to the parent element as its child.
    <br/>This is considered a more direct way to manipulate the DOM.