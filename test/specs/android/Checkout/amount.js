// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const checkout = require("../../../screenObjects/android/Checkout.screen");
// const assert = require('assert');

// //Verify product Amount!

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

//     const amount1 = await checkout.getProductAmount();
//     await checkout.buyNow.click();
//     const amount2 = await checkout.getcheckoutAmount();
//     console.log("-------------")
//     console.log(amount1)
//     console.log(amount2)
    
//     assert.equal(amount1, amount2, 'Product descriptions are not equal!');
//     //assert.strictEqual(dd,ds);

//   });

// });