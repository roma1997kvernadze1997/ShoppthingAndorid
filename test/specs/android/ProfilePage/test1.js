const profilePage = require("../../../screenObjects/android/ProfilePage.screen");
const loginPage = require("../../../screenObjects/android/LoginPage.screen");
const homePage = require("../../../screenObjects/android/HomePage.screen");
const assert = require('assert');


describe('Open App', () => {
  beforeEach(async () => {

    await profilePage.profile.click();
    await profilePage.loginToShopthing.click();

  });

  it('Verify', async() => {

    await loginPage.login("roma+Admin@shopthing.com", "Password1.");
    await expect(loginPage.headerProfileText).toHaveText("Roma Admin");

    await profilePage.termsAndConditions.click();
    await profilePage.backButton.click();
    await expect(profilePage.termsAndConditions).toHaveText("Terms and Conditions");
    await profilePage.privacyPolicy.click();
    await profilePage.backButton.click();
    await expect(profilePage.privacyPolicy).toHaveText("Privacy Policy");
    await profilePage.signOut.click();

  });

  it("Verify Delete Account texts", async() => {

    await loginPage.login("roma+Admin@shopthing.com", "Password1.");
    await expect(loginPage.headerProfileText).toHaveText("Roma Admin");

    await profilePage.privacyPolicy.click();
    await profilePage.deleteAcc1.click();
    await profilePage.deleteAcc2.click();

    const expectedError = "PLEASE ENTER YOUR EMAIL IN ORDER TO DELETE YOUR ACCOUNT";
    const actualError = await profilePage.getErrorText();
    assert.equal(expectedError, actualError, 'Error Text is not correct!');

    const expectedText = "Enter your email";
    const actualText = await profilePage.getEnterYourEmailText();
    assert.equal(expectedText, actualText, 'Text is not correct!');

    await profilePage.backButton.click();
    await profilePage.backButton.click();
    await profilePage.signOut.click();

  });
  
  it("Verify If unsigned user is still able to open delete account page", async() => {

    await loginPage.btnClose.click();
    await profilePage.privacyPolicy.click();
    await expect(profilePage.deleteAcc1).not.toBeDisplayed();
    //await profilePage.deleteAcc1.waitForDisplayed({ reverse: true });

    await profilePage.backButton.click();

  });

  it("Verify, non existing email shouldn't be deleted. Error text has to be displayed", async() => {

    await loginPage.login("roma+Admin@shopthing.com", "Password1.");
    await expect(loginPage.headerProfileText).toHaveText("Roma Admin");

    await profilePage.privacyPolicy.click();
    await profilePage.deleteAcc1.click();
    await profilePage.enterEmail('sdsd12ss@shopthing.com');
    await profilePage.deleteAcc2.click();
    await profilePage.deleteAccount.click();
    await profilePage.cancel.click();

    const expectedError = "THE EMAIL PROVIDED DOES NOT MATCH YOUR ACCOUNT";
    const actualError = await profilePage.getErrorText();
    assert.equal(expectedError, actualError, 'Error Text is not correct!');

  });

});
