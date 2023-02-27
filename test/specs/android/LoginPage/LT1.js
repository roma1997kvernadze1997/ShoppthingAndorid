// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const assert = require('assert');


// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//   });

//   it("Verify X Button", async() => {

//     await expect(loginPage.headerText).toHaveText("Login");
//     await loginPage.btnClose.click();
//     await expect(profilePage.privacyPolicy).toHaveText("Privacy Policy");

//   });

//   it("Verify Error text when user enters incorrect U/P", async() => {

//     await loginPage.login("roma1558@shopthing.com", "Admin123!");
//     await expect(loginPage.invalidUsernamePassword).toHaveText("INVALID PASSWORD OR EMAIL");
//     await loginPage.btnClose.click();
//     await expect(profilePage.privacyPolicy).toHaveText("Privacy Policy");

//   });

//   it("Verify Error text when user enters incorrect Password", async() => {

//     await loginPage.login("roma+stag@shopthing.com", "Admin123!");
//     await expect(loginPage.invalidUsernamePassword).toHaveText("INVALID PASSWORD OR EMAIL");
//     await loginPage.btnClose.click();
//     await expect(profilePage.privacyPolicy).toHaveText("Privacy Policy");

//   });

//   it("Verify Error text when user enters incorrect Username", async() => {

//     await loginPage.login("roma225@shopthing.com", "Admin123$");
//     await expect(loginPage.invalidUsernamePassword).toHaveText("INVALID PASSWORD OR EMAIL");
//     await loginPage.btnClose.click();
//     await expect(profilePage.privacyPolicy).toHaveText("Privacy Policy");

//   });

//   it("Verify if after clicking eye icon, password is visible", async() => {

//     await loginPage.login("roma1@shopthing.com", "Admin123$1");
//     await loginPage.eyeIcon.click();

//     const visiblePassword = await loginPage.getPasswordText();
//     const enteredPassword = "Admin123$1";
//     assert.equal(visiblePassword, enteredPassword, 'Password is Not Correct!');

//     await loginPage.btnClose.click();
//     await expect(profilePage.privacyPolicy).toHaveText("Privacy Policy");

//   });

//   it("Verify Correct U/P entry", async() => {

//     await loginPage.login("roma+stag@shopthing.com", "Password1!");
//     await expect(loginPage.headerProfileText).toHaveText("Ro Kv");

//   });

// });
