// const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
// const loginPage = require("../../../screenObjects/android/LoginPage.screen");
// const homePage = require("../../../screenObjects/android/HomePage.screen");
// const createAccount = require("../../../screenObjects/android/CreateAccount.screen");


// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click();
//     await loginPage.createAccount.click();

//   });

//   it("Verify Static texts on page!", async() => {

//     await createAccount.verifyStaticTexts();
//     await createAccount.backButton.click();
//     await loginPage.btnClose.click();

//   });

//   it("Verify fields", async() => {

//     await createAccount.enterValues("", "", "roma@shopthing.com", "Password1!");
//     await expect(createAccount.errorFirstName).toHaveText("REQUIRED");
//     await expect(createAccount.errorLastName).toHaveText("REQUIRED");
//     await createAccount.clearEnteredValues();

//     await createAccount.enterValues("R", "K", "roma@shopthing.com", "Password1");
//     await expect(createAccount.errorPassword).toHaveText("INVALID PASSWORD");
//     await createAccount.clearEnteredValues();

//     await createAccount.enterValues("R", "K", "roma@shopthing.com", "Passwo!");
//     await expect(createAccount.errorPassword).toHaveText("INVALID PASSWORD");
//     await createAccount.clearEnteredValues();

//     await createAccount.enterValues("R", "K", "roma@shopthing.com", "password1!");
//     await expect(createAccount.errorPassword).toHaveText("INVALID PASSWORD");
//     await createAccount.clearEnteredValues();

//     await createAccount.enterValues("R", "K", "askfnasksang", "Password1!");
//     await expect(createAccount.errorEmail).toHaveText("INVALID EMAIL");
//     await createAccount.clearEnteredValues();

//     await createAccount.enterValues("R", "K", "roma@shopthing.com", "Password1!");
//     await expect(createAccount.errorEmail2).toHaveText("IT LOOKS LIKE YOU ALREADY HAVE AN ACCOUNT WITH THIS EMAIL ADDRESS.");

//   });

// });
