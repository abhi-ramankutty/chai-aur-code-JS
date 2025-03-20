const score = 400;
const balance = new Number("200");

console.log('score: ', score)
console.log('balance: ', balance)

console.log('toString:', balance.toString())
console.log('toFixed:', balance.toFixed(2))
console.log('toPrecision:', 123.89876.toPrecision(6))

const hundreds = 10000000000;
console.log(hundreds.toLocaleString('en-IN'))

console.log("************************* Maths *************************")

console.log(Math);
console.log('abs', Math.abs(-4));
console.log('round', Math.round(4.6));
console.log('ceil', Math.ceil(4.2));
console.log('floor', Math.floor(4.9));
console.log('min', Math.min(...[4, 3, 6, 8]));
console.log('max', Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)