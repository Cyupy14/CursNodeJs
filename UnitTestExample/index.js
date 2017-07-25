console.log("Unit test example start");

var myValidator = require("./modules/passwordValidator");

var password = "Cyupy";
var valid = myValidator.validPassword(password);

console.log("Your passsword'" + validPassword + "' is : " + valid);