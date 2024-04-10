
const bla = function() {
    count = 0;
    return () => count++
}
a = bla()
console.log(a())
console.log(a())
console.log(a())