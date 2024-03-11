let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

console.log('------------------------------');

const myArr = ["Batman", "Superman", "Aquaman"];
let arrIndex = 0;
while (arrIndex < myArr.length) {
    console.log(`Value at index ${arrIndex} is ${myArr[arrIndex]}`);
    arrIndex++
}

console.log('------------------------------');

/**
 * do-while loop will execute atleast once, since the condition is checked at the end of loop
 */
let score = 11;
do {
    console.log(`Score is ${score}`);
    score = score + 1;
} while (score <=10);
