console.log("************* forEach on array *************");
const coding = ["javaScript", `C++`, "ruby", "swift", `java`];
const codingVals = coding.forEach((value) => {
	console.log(value);
	return value;
});
console.log("codingVals", codingVals);

console.log("************* filter on array *************");
const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredNum = myNums.filter((num) => {
	if (num < 5) {
		return true;
	}
});
console.log("filteredNum", filteredNum);

console.log("************* filter on books array *************");
const books = [
	{ title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
	{ title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
	{ title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
	{ title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
	{ title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
	{ title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
	{ title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
	{ title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
	{ title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
	return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
