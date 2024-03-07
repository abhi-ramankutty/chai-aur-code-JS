console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log("----------------------------------");
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);

/**
 * The equality check (==) and comparison check (<,>,<=, >=) works differently
 * During equality check, the value are not converted
 * But during comparision check, the values of null is converted and treated as 0, 
 */

/**
 * Always prefer using === over == for equality check
 * === does not convert the data for comparison, you could say it check for the dayatype as well when comparing data
 */