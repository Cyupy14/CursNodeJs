var chai = require("chai");
var passwordValidator = require("../modules/passwordValidator");

describe("passwordValidator", function () {

    describe(".validPassword(password)", function () {

        it("should have min 8 chars length", function () {

            var wrongPass = "1234567";
            var valid = passwordValidator.validPassword(wrongPass);

            chai.expect(valid).to.be.equal(false);

            var goodPassword = "12345678";
            var valid2 =  passwordValidator.validPassword(goodPassword);
            chai.expect(valid2).to.be(true);
        });
    });
});