var c = 300;
// Cannot use let/const c = 300,
// Becasue in that case "cannot redeclaration" error will be thrown at line 6 for var c = 30

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(`A: ${a}`);
// console.log(`B: ${b}`);
console.log(`C: ${c}`);