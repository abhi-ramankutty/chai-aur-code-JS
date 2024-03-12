const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.reduce((prev, curr, index) => {
    console.log(`prev: ${prev}, curr: ${curr}, index: ${index}`);
    return prev + curr;
}, 0);
console.log(newNums);

console.log("--------------------------");

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
];

const priceToPay = shoppingCart.reduce((prevVal, item)=> {
    return prevVal + item.price
}, 0)
console.log(priceToPay);