const marvelHeros = ["Iron man", "Thor", "Hulk"];
const dcHeros = ["Batman", "Superman", "Flash"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros[3]);

const allHeros = marvelHeros.concat(dcHeros);
const allHeros2 = [...marvelHeros, ...dcHeros];

console.log(marvelHeros);
console.log(allHeros);
console.log(allHeros2);

console.log("--------------------");

const newArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, [11, 12, [13]]]]];
console.log(newArr);

const newArr2 = newArr.flat(Infinity);
console.log(newArr2);

console.log("--------------------");

console.log(Array.isArray("Abhilash"));
console.log(Array.from("Abhilash"));
console.log(Array.from({name: "abhilash"})); // while using objects in Array.from(), you need to specify if you want to make an array using its keys or values

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));