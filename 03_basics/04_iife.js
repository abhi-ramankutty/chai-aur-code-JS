// Immediately Invoked Function Expression

/**
 * Here you can see 2 set of ()
 * The first set of () is to enclose the function
 * The second set of () following the first one is to execute the function
 * AND it is important to note that you should always end an iffe with a semi-colon(;),
 *  else its considered as a part of code and you get an error for things that are written after the iffe
 */
(function chai() {
	console.log("DB CONNECTED");
})();

((name) => {
	console.log(`Hello ${name}`);
})("Shinigami");

/**
 * The reason to use IFFE
 * 1. You dont want to use any memory to store the functio
 * 2. Prevents pollution of the global JS scope
 *  In a traditional function, if you create a variable within the function, it is accessible in the global object.
 *  If you define a variable in an IIFE, it is accessible only directly within the function.
 */
