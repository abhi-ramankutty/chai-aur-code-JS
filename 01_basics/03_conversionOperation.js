let scoreNum = -12;
let scoreStr = "12";
let scoreNull = null;
let scoreUndef;
let scoreObj = {val: 12};
let score = "asd";

// scoreNum = Number(scoreNum);
// scoreStr = Number(scoreStr);
// scoreNull = Number(scoreNull);
// scoreUndef = Number(scoreUndef);
// score = Number(score);

scoreNum = Boolean(scoreNum);
scoreStr = Boolean(scoreStr);
scoreNull = Boolean(scoreNull);
scoreUndef = Boolean(scoreUndef);
scoreObj = Boolean(scoreObj);
score = Boolean(score);

console.log('scoreNum', scoreNum, typeof scoreNum);
console.log('scoreStr', scoreStr, typeof scoreStr);
console.log('scoreNull', scoreNull, typeof scoreNull);
console.log('scoreUndef', scoreUndef, typeof scoreUndef);
console.log('scoreObj', scoreObj, typeof scoreObj);
console.log('score', score, typeof score);