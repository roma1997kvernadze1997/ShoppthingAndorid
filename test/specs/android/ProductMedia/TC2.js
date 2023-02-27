// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const checkout = require("../../../screenObjects/android/Checkout.screen");
// const productMedia = require("../../../screenObjects/android/ProductMedia.screen");
// const assert = require('assert');

// describe("Open Login Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//   });

//   it("Verify Shopper Event Name", async() => {
    
//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     const eve1 = await homePage.getShopperEventName();
//     await productMedia.enterEvent.click();
//     await productMedia.clickVideo.click();
//     const eve2 = await productMedia.getShopperEventName();

//     console.log('----------------');
//     console.log(eve1);
//     console.log(eve2);
//     assert.equal(eve1, eve2, 'Shopper Event names are not correct');

//   });

// });