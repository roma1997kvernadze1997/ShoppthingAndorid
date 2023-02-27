// const profilePage = require("../../screenObjects/android/ProfilePage.screen");
// const homePage = require("../../screenObjects/android/HomePage.screen");
// const loginPage = require("../../screenObjects/android/LoginPage.screen");

// describe("Open Profile Page", () => {
//   beforeEach(async () => {

//     await profilePage.profile.click();
//     await profilePage.loginToShopthing.click()

//   });

//   it("Enter Username/Password", async() => {

//     await loginPage.login("roma+Admin@shopthing.com", "Password1.");
//     await expect(loginPage.headerProfileText).toHaveText("Roma Admin");
//     await homePage.home.click();
    
//     // GET Method
//     const randomJoke = await homePage.getRandomJoke();
//     console.log(randomJoke.data.category);

//     // POST Method
//     const sendPost = await homePage.getSendPost();
//     console.log(sendPost.data.idToken);

// const client = await remote({
//     capabilities: {
//       browserName: 'chrome'
//     }
//   });

//   });

// });
