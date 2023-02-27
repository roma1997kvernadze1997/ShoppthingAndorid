// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const Checkout = require("../../../screenObjects/android/Checkout.screen");
// const assert = require('assert');

// //Verify product description!

// describe("Open Login Page", () => {
//   beforeEach(async () => {

//     // await homePage.home.click()
//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click()

//   });

//   it("Buy Product", async() => {

//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     //Checkout process
//     await checkout.enterEvent.click();
//     await checkout.clickVideo.click();

//     const description = await checkout.getProductDescription();
//     await checkout.buyNow.click();
//     const checkoutDescription = await checkout.getCheckoutDescription();
//     console.log("-------------")
//     console.log(description)
//     console.log(checkoutDescription)
    

//     assert.equal(description, checkoutDescription, 'Product descriptions are not equal!');
//     //assert.strictEqual(dd,ds);

//   });

// });