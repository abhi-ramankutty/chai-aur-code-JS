/**
 * forEach loop
 */

const myArr = ['js', 'ruby', 'python', 'java'];

myArr.forEach(function (item) {
    console.log(item);
});

console.log('---------------------------------');

myArr.forEach((item) => {
    console.log(item);
});

console.log('---------------------------------');

function printMe(item) {
    console.log(item);
}
myArr.forEach(printMe);

console.log('---------------------------------');

myArr.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

console.log('---------------------------------');

const myArrObj = [
    {
        langName: 'JavaScript',
        fileType: 'js',
    },
    {
        langName: 'Java',
        fileType: 'java',
    },
    {
        langName: 'Python',
        fileType: 'py',
    },
];
myArrObj.forEach((item)=>{
    console.log(`Language name: ${item.langName}, File type: ${item.fileType}`);
})