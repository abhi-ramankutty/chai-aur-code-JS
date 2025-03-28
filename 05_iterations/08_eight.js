const myNum = [1, 2, 3, 4, 5];

const total = myNum.reduce((acc, currentVal) => {
	console.log(`Acc: ${acc} | CurrentVal: ${currentVal}`);
	return acc + currentVal;
}, 0);
console.log(total);

console.log("************* reduce on shoppingCart *************");

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, currentVal) => {
    return acc + currentVal.price;
}, 0);
console.log(`Total cart value: ${totalPrice}`);