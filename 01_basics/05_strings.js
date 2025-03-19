const name = "Shinagami";
const count = 200;

console.log(name + ' - Kill count: ' + count); // String concatination
console.log(`${name} - Kill count: ${count}`); // String literal (interpolation)

const gameName = new String("DeathNote");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__) // prototype obj

console.log('******** Properties & Methods ********')
console.log('length: ' + gameName.length);
console.log('toUpperCase(): ' + gameName.toUpperCase());
console.log('charAt(2): ' + gameName.charAt(2));
console.log('indexOf("t"): ' + gameName.indexOf('t'));

const subStr = gameName.substring(1,3);
console.log(subStr);

const sliceStr = gameName.slice(1,5);
console.log(sliceStr);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'));