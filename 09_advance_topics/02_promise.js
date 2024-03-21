// const promiseOne = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Async function is called - V1");
// 		resolve();
// 	}, 1000);
// });

// promiseOne
// 	.then((res) => {
// 		console.log("Promise is resolved - V1");
// 	})
// 	.catch()
// 	.finally(() => {
// 		console.log(promiseOne);
// 	});
// console.log(promiseOne);

// /**Promise example without saving it in a variable */
// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Async function is called - V2");
// 		resolve();
// 	}, 1000);
// }).then(() => {
// 	console.log("Promise is resolved - V2");
// });

// /** Promise example with passing data in resolve */
// const promiseThree = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Async function is called - V3");
// 		resolve({ name: "Abhilash", age: 29 });
// 	}, 1000);
// });
// promiseThree.then((res) => {
// 	console.log(res);
// 	console.log("Promise is resolved - V3");
// });

// /** Promise example with passing data in Resolve and Reject */
// const promiseFour = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let error = true;
// 		if (error) {
// 			resolve({ name: "Abhilash", age: 29 });
// 		} else {
// 			reject("ERROR: Something went wrong.");
// 		}
// 	}, 1000);
// });
// promiseFour
// 	.then((user) => {
// 		console.log("V4", user);
// 		return user.name;
// 	})
// 	.then((name) => {
// 		console.log(name);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log("The promise is either Resolved or Rejected");
// 	});

// /** Promise example with async-await */
// const promiseFive = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let error = true;
// 		if (!error) {
// 			resolve({ name: "Abhilash", age: 29 });
// 		} else {
// 			reject("ERROR: JS went wrong.");
// 		}
// 	}, 1000);
// });

// async function consumePromiseFive() {
// 	try {
// 		const res = await promiseFive;
// 		console.log(res);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// consumePromiseFive();

// /** Async -Await example */
// async function getAllUsers() {
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		// console.log(response);
// 		const data =  await response.json();
//         console.log(data)
// 	} catch (error) {
// 		console.log("Error", error);
// 	}
// }

// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((res) => {
// 		console.log(res);
// 		return res.json();
// 	})
// 	.then((res1) => {
// 		console.log(res1);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log("The promise is either Resolved or Rejected");
// 	});

/** Example of Promise.al
 * This takes a array of promises are returns a single array response if all the promises are resolved
 * Even if any one promise fails, the promise.all will be rejected and can be found in the .catch section
 */
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("Promise 1 resolved!"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("Promise 2 resolved!"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("Promise 3 resolved!"), 3000);
	// reject("Promise 3 rejected!"); // Simulate rejection
});

Promise.all([promise1, promise2, promise3])
	.then((results) => {
		console.log(results); // This won't execute due to promise3 rejection
	})
	.catch((error) => {
		console.error("Error:", error); // Catches the rejection from promise3
	});
