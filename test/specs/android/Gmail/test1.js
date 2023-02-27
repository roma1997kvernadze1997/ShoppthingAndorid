// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const gmail = require("../../../screenObjects/android/Gmail.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const forgotPassword = require("../../../screenObjects/android/ForgotPassword.screen");
// const { remote } = require("webdriverio");


// describe('Test 1', () => {
//   beforeEach(async () => {

//     await gmail.xButton.click();
//     await gmail.openMail.click();
//     await gmail.thanks.click();
//     await gmail.linkOpen.click();
//     await forgotPassword.verifyStaticTexts();

//     let x = Math.floor((Math.random() * 10) + 1);
//     console.log(x);

//     const enteredPassword = "Password" + x + "!";
//     console.log(enteredPassword);

//     await forgotPassword.enterNewPassword(enteredPassword);
//     await expect(forgotPassword.t3).toHaveText("Your password has been successfully updated.");
//     await forgotPassword.okButton.click();

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//     await loginPage.login("roma+915@shopthing.com", enteredPassword);
//     await expect(loginPage.headerProfileText).toHaveText("Ro N915K");

//   });

//   it('Test Suite 2', async() => {

//   });

// });
