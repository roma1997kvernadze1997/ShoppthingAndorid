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

//   it("Verify SoldOut and More buttons", async() => {
    
//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     // await homePage.swipeUp();
//     // await homePage.swipeUp();

//     await homePage.enetrEvent.click();
//     await homePage.swipeUp111();
//     await productMedia.clickVideo.click();

//     // SoldOut and More click should do nothing. User should stay on same Page!
//     await productMedia.soldOut.click();
//     await productMedia.more.click();
//     await expect(productMedia.thisItemIsSoldOut).toHaveText("This item is sold out");

//   });

// });