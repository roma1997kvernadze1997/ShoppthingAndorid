// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const createAccount = require("../../../screenObjects/android/CreateAccount.screen");
// const assert = require('assert');


// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();
//     await loginPage.createAccount.click();

//   });

//   it("", async() => {

//     let x = Math.floor((Math.random() * 1000) + 1);
//     console.log(x);

//     const expectedEmail = "roma+" + x + "@shopthing.com";
    
//     await createAccount.enterValues("Ro", "N" + x + "K", "roma+" + x + "@shopthing.com", "Password1!");
    
//     const actualEmail = await createAccount.getEmail();

//     console.log("-------------------------------------------------");
//     console.log(x)
//     console.log(expectedEmail);
//     console.log(actualEmail);

//     assert.equal(expectedEmail, actualEmail, 'Entered Email is not correct');
    
//     await expect(createAccount.verifyHeaderText).toHaveText("Please verify your email");
//     await expect(createAccount.verifyStaticSmallText).toHaveText("Still can’t find the email?");

//   });

// });
