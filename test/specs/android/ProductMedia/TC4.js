// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const productMedia = require("../../../screenObjects/android/ProductMedia.screen");
// const checkout = require("../../../screenObjects/android/Checkout.screen");
// const assert = require('assert');

// describe("Open Login Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//   });

//   it("Amount Check!", async() => {
    
//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     await productMedia.enterEvent.click();
//     await productMedia.clickVideo.click();

//     const amount1 = await checkout.getProductAmount();
//     console.log(amount1)

//   });

// });