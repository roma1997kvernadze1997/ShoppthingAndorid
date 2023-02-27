// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const productMedia = require("../../../screenObjects/android/ProductMedia.screen");
// const assert = require('assert');

// describe("Open Login Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();

//   });

//   it("Verify End Page Popup /Text and Header", async() => {
    
//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();

//     await homePage.swipeUp();
//     await homePage.swipeUp();
//     await homePage.swipeUp();

//     await productMedia.enterEvent.click();

//     await productMedia.clickVideo.click();
//     await productMedia.clickVideo.click();
//     await productMedia.clickVideo.click();

//     const expectedText1 = "You've viewed all products currently available from this shopper. Check back later or tap 'Refresh' to see if they've posted anything new.";
//     const expectedText2 = "Check Back Soon";

//     const actualText1 = await productMedia.getEndWidgetText();
//     const actualText2 = await productMedia.getCheckBackSoonText();

//     console.log('----------------');
//     console.log(actualText1);
//     console.log(actualText2);
//     assert.equal(expectedText1, actualText1, 'End Widget Text Is Not Correct!');
//     assert.equal(expectedText2, actualText2, 'End Widget Text Is Not Correct!');

//   });

// });