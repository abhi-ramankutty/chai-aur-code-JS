let marvelHeroes = ["Thor", "IronMan", "SpiderMan"];
const dcHeroes = ["BatMan", "SuperMan", "Flash"];

marvelHeroes.push(dcHeroes);
console.log('marvelHeroes', marvelHeroes);

marvelHeroes = ["Thor", "IronMan", "SpiderMan"];
const heroes = marvelHeroes.concat(dcHeroes);
const allHeroes = [...marvelHeroes, ...dcHeroes, "Venom", "Minnal Murali"];
console.log('heroes', heroes);
console.log('allHeroes', allHeroes);

const nestedArr = [
	1,
	2,
	2,
	[2, 3, 5],
	7,
	34,
	[22, 67, 3, [23, 60, 42, [1, 2]]],
];

const flatArr = nestedArr.flat(Infinity)
console.log('flatArr', flatArr)

console.log('isArray', Array.isArray("qwerty")) 
console.log('from', Array.from("qwerty")) 
console.log('from', Array.from({name: 'Shinigami'}))  // gives empty array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3))