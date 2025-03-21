let myArr = [1, 2, 3, true, "Shinigami"];
const myArr1 = new Array("q", "w", "e", "r", "t", "y");

console.log(myArr);
console.log(myArr1[3]);

myArr.push("Ryuk");
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift("Rem");
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(3))
console.log(myArr.indexOf("Shinigami"))

console.log(myArr)
console.log(myArr.join())


console.log("************** Slice n Splice **************")

myArr = [1, 2, 3, true, "Shinigami"];
let sliceArr = myArr.slice(3, 1)
console.log(myArr);
console.log(sliceArr);


myArr = [1, 2, 3, true, "Shinigami"];
let spliceArr = myArr.splice(3,2)
console.log(myArr);
console.log(spliceArr);
