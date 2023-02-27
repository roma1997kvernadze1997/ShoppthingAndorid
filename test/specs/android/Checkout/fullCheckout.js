// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const checkout = require("../../../screenObjects/android/Checkout.screen");

// //Checkout product only case. Full process!

// describe("Open Login Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click()

//   });

//   it("Buy Product", async() => {

//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     //Checkout process
//     //await homePage.swipeUp();
//     await checkout.enterEvent.click();
//     await checkout.clickVideo.click();
//     await checkout.buyNow.click();
//     await checkout.selectSize.click();
//     await checkout.continueCheckout.click();
//     //await checkout.continueToShipping.waitForDisplayed({ reverse: true });
//     await checkout.inputPostalCodeAndApartment('ap1');
//     await homePage.swipeUp();
//     await checkout.continueToShipping.click();
//     await checkout.continueToPaymentMethod.click();
//     await checkout.submitPaymentMethod.click();
//     await checkout.payNow.click();
//     await expect(checkout.checkOrderStatus).toHaveText("Your order is processing");

//   });

// });
