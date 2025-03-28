console.log("************* forEach on array *************");
const coding = ["javaScript", `C++`, "ruby", "swift", `java`];
coding.forEach((value) => {
    console.log(value);
});

console.log("************* forEach on array using function reference *************");
const printMe = (val) => {
    console.log(`using printMe reference, the value is ${val}`);
};
coding.forEach(printMe);

console.log("************* forEach on array with all arguments in callback *************");
coding.forEach((val, index, arr) => {
    console.log(val, index, arr);
});
