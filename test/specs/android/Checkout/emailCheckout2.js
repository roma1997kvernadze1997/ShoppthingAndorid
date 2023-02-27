// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const checkout = require("../../../screenObjects/android/Checkout.screen");
// const assert = require('assert');

// //Verify, if the correct email is displayed on checkout screen!

// describe("Open Login Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click()

//   });

//   it("Get Email from first acc", async() => {

//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     //await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     //Checkout process
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await checkout.enterEvent.click();
//     await checkout.clickVideo.click();
//     await checkout.buyNow.click();
//     await checkout.selectSize.click();
//     await checkout.continueCheckout.click();
//     const firstEmail = await checkout.getEmail();
//     console.log('-----------')
//     console.log(firstEmail)

//     await checkout.checkoutBack.click();
//     await checkout.productBack.click();
//     await profilePage.profile.click();
//     await profilePage.signOut.click();

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click()

//     await loginPage.login("roma+stag@shopthing.com", "Password1!");
//     //await expect(loginPage.headerProfileText).toHaveText("Ro Kv");
//     await homePage.home.click();

//     //Checkout process
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await checkout.enterEvent.click();
//     await checkout.clickVideo.click();
//     await checkout.buyNow.click();
//     await checkout.selectSize.click();
//     await checkout.continueCheckout.click();
//     const secondEmail = await checkout.getEmail();
//     console.log('-----------')
//     console.log(firstEmail)
//     console.log(secondEmail)
//     assert.equal(firstEmail, secondEmail, 'Email address is not correct!');

//   });

// });
