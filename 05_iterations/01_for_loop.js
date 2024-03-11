// FOR

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (index == 5) {
//         console.log("5 is the best");
//     }
//     console.log(element);
// }

// for (let index = 1; index <= 10; index++) {
//     console.log(`Outer loop: ${index}`);
//     for (let index_2 = 1; index_2 <= 10; index_2++) {
//         // console.log(`Outer loop: ${index} and inner loop: ${index_2}`);
//         console.log(`${index} * ${index_2} = ${index * index_2}`);
//     }
// }

/**
 * Loops on array
 */

// const myArr = ["Batman", "Superman", "Aquaman"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);   
// }


/**
 * break and continue
 * 
 * break -> breaks the loop and comes out
 * continue -> skips the execution of the current iteration and continues to the next one;
 */
for (let index = 1; index <= 5; index++) {
    if(index === 3) {
        console.log('yay........... 3 is here...');
        break;
        continue;
    }
    console.log(`Value id index is ${index}`);
    
}
