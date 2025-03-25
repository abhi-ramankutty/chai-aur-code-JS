var c = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  console.log("Inner: ", c);
}

// console.log(a);
// console.log(b);
console.log(c);

console.log("**************************");

function one() {
  var name = "Kira";
  function two() {
    realName = "Light Yagami";
    console.log("In two() - name:", name);
    console.log("In two() - realName:", realName);
  }
  // console.log("In one(): ", realName)
  two();
}
one();

console.log("************* if-block *************");
if (true) {
  let userName = "Kira";
  if (true) {
    realUserName = "Light Yagami";
    console.log("In two - userName:", userName);
    console.log("In two - realUserName:", realUserName);
  }
  console.log("In one: ", realUserName);
}
// console.log(userName)

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
