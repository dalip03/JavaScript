const accountId = 144543
let accountEmail = "dalip@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;
// accountId = 2     // not allowed
accountEmail = "dalipd@gmail.com"
accountPassword="21111"
accountCity ="Ludhiana"
console.log(accountId);

// scope  {}     
// prefered not to use var . use const and let bcz scope problem
// undefined when we do  not give value 
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);