const accountId = 123;
let accountEmail = "abhi.test0120@yopmail.com";
var accountPassword = "12345";
accountCity = "Bengaluru";
let accountState

// accountId = 234; // this is not possible / allowed
accountEmail = "abhi.test@yopmail.com";
accountPassword = "121212";
accountCity = "Kottayam";

/**
 * Prefer not to use var
 * Becase, 1. var has global scope and 2. var can be redeclared.
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])