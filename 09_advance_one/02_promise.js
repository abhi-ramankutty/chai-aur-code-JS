const promiseOne = new Promise((resolve, reject) => {
	// Perform some Async task
	// DB Calls, File Reading, NetworkCalls, Cryptographic task etc..

	setTimeout(() => {
		const randomNum = Math.floor(Math.random() * 10);
		console.log(`Async task is completed. RandomNum is ${randomNum}`);
		resolve(`RandomNum is ${randomNum}`);
	}, 1000);
});

promiseOne.then((res) => {
	console.log(`Promise consumed. ${res}`);
});

new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log("Async task 2");
		resolve();
	}, 1000);
}).then(() => {
	console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ userName: "Chai", email: "chai@example.com" });
	}, 1000);
});

promiseThree.then((user) => {
	console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;
		if (!error) {
			resolve({ userName: "hitesh", password: "123" });
		} else {
			reject("ERROR: Something went wrong");
		}
	}, 1000);
});
promiseFour
	.then((user) => {
		console.log(`promiseFour user: ${user}`);
		return user.userName;
	})
	.then((userName) => {
		console.log(`promiseFour userName: ${userName}`);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		console.log("PromiseFour is either resolved or rejected.");
	});

const promiseFive = new Promise((res, rej) => {
	setTimeout(() => {
		let error = true;
		if (!error) {
			res({ userName: "JavaScript", password: "123" });
		} else {
			rej("ERROR: Something went wrong");
		}
	}, 1000);
});

async function consumePromiseFive() {
	try {
		const result = await promiseFive;
		console.log(result);
	} catch (error) {
		console.log(`consumePromiseFive-Error: ${error}`);
	}
}
consumePromiseFive();

// async function getAllUsers() {
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json()
// 		console.log(data);
// 	} catch (error) {
// 		console.log(`getAllUsers-Error: ${error}`);
// 	}
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
        return response.json()
	}).then((data)=> {
        console.log(data)
    })
	.catch((err) => {
		console.log(`fetch err: ${err}`);
	});

fetch()