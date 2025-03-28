const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumbers.map((num) => {
	return num + 10;
});

const newNum1 = myNumbers
	.map((num1) => num1 * 10)
	.map((num2) => num2 + 1)
	.filter((num3) => num3 >= 40);

    console.log(newNum1)