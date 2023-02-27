// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const assert = require('assert');

// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//   });

//   it("Verify incorrect multiple attempts", async() => {

//     await loginPage.login("roma@shopthing.com", "Admin123!");
//     await loginPage.login2("roma@shopthing.com", "Admin123!");
//     await loginPage.login2("roma@shopthing.com", "Admin123!");
//     await loginPage.login2("roma@shopthing.com", "Admin123!");
//     await loginPage.login2("roma@shopthing.com", "Admin123!");
//     await loginPage.login2("roma@shopthing.com", "Admin123!");

//     await expect(loginPage.errorHeader).toHaveText("Error");
//     await expect(loginPage.errorText).toHaveText("Something went wrong. Please check network settings and try again.");

//     await loginPage.retryButton.click();

//     await expect(loginPage.errorHeader).toHaveText("Error");
//     await expect(loginPage.errorText).toHaveText("Something went wrong. Please check network settings and try again.");

//   });

// });
