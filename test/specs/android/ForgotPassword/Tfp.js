// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const forgotPassword = require("../../../screenObjects/android/ForgotPassword.screen");
// const assert = require('assert');

// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//   });

//   it("Verify X Button", async() => {

//     await loginPage.forgotPassword.click();
//     await forgotPassword.closeButton.click();
//     await expect(loginPage.headerText).toHaveText("Login");
//     await loginPage.btnClose.click();

//   });

//   it("Verify texts", async() => {

//     await loginPage.forgotPassword.click();
//     await expect(forgotPassword.staticText).toHaveText("Enter your email address below and we’ll send you an email with instructions to reset your password");
//     await forgotPassword.closeButton.click();
//     await expect(loginPage.headerText).toHaveText("Login");
//     await loginPage.btnClose.click();

//   });

//   it("Verify Non existing nor incorrect email", async() => {

//     await loginPage.forgotPassword.click();
//     await forgotPassword.sendEmail.click();
//     await expect(forgotPassword.errorInvalidEmail).toHaveText("INVALID EMAIL");

//     await forgotPassword.enterEmail("romasssss")
//     await expect(forgotPassword.errorInvalidEmail).toHaveText("INVALID EMAIL");
//     await forgotPassword.clearEmail();

//     await forgotPassword.enterEmail("romasssss@shopthing.")
//     await expect(forgotPassword.errorInvalidEmail).toHaveText("INVALID EMAIL");
//     await forgotPassword.clearEmail();

//     await forgotPassword.enterEmail("romasssss@shopthing.com")
//     await expect(forgotPassword.errorHeaderText).toHaveText("Something went wrong");
//     await forgotPassword.okButton.click();
//     await forgotPassword.clearEmail();

//     await forgotPassword.enterEmail("roma@shopthing.co")
//     await expect(forgotPassword.errorStaticText).toHaveText("There is no user record corresponding to this identifier. The user may have been deleted.");
//     await forgotPassword.okButton.click();
//     await forgotPassword.clearEmail();

//     await forgotPassword.enterEmail("roma+915@shopthing.com")
//     await expect(forgotPassword.successHeaderText).toHaveText("Email Sent!");
//     await expect(forgotPassword.successStaticText).toHaveText("A link to reset your password was just emailed to you.");
//     await forgotPassword.okButton.click();
//     await expect(loginPage.headerText).toHaveText("Login");

//   });

// });
