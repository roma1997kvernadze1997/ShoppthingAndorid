class createAccount {




  
  get inputFirstName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[1]');
  }

  get inputLastName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[2]');
  }

  get inputEmail() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[3]');
  }

  get inputPassword() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[4]');
  }



  get createAccButton() {
    return $('//android.view.View[@content-desc="Create Account"]');
  }
  get eyeIcon() {
    return $('//android.view.View[@content-desc="Toggle Password"]');
  }
  get backButton() {
    return $('//android.widget.ImageView[@content-desc="back"]');
  }
  get switchButton() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.Switch');
  }




  get headerText() {
    return $('//*[@text="Create Account"]');
  }
  get newsText() {
    return $('//*[@text=" Would you like to receive the latest news on shopping trends and deals?"]');
  }

  //Password Validation texts
  get p1() {
    return $('//*[@text="Must be at least 8 characters"]');
  }
  get p2() {
    return $('//*[@text="Includes uppercase"]');
  }
  get p3() {
    return $('//*[@text="Includes special character"]');
  }



  //Error Texts
  get errorFirstName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.TextView[1]');
  }
  get errorLastName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.widget.TextView[2]');
  }
  get errorEmail() {
    return $('//*[@text="INVALID EMAIL"]');
  }
  get errorEmail2() {
    return $('//*[@text="IT LOOKS LIKE YOU ALREADY HAVE AN ACCOUNT WITH THIS EMAIL ADDRESS."]');
  }
  get errorPassword() {
    return $('//*[@text="INVALID PASSWORD"]');
  }

//-------------------------------------VerifyPage--------------------------------------------------

  get resendEmailButton() {
    return $('//*[@text="RESEND EMAIL"]');
  }

  get skipForNowButton() {
    return $('//*[@text="SKIP FOR NOW"]');
  }

  get verifyEnteredEmail() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView');
  }

  get closeXButton() {
    return $('//android.widget.ImageView[@content-desc="Close"]');
  }

  get verifyHeaderText() {
    return $('//*[@text="Please verify your email"]');
  }

  get verifyStaticBigText() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.TextView[2]');
  }

  get verifyStaticSmallText() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.TextView[3]');
  }





//---------------------------------- Methods -------------------------------------------------------

  //Create Account
  async enterValues(firstname, lastname, email, password) {
    await this.inputFirstName.setValue(firstname);
    await this.inputLastName.setValue(lastname);
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.createAccButton.click();
  }

  //Verify Static Texts on Page
  async verifyStaticTexts() {
    await expect(this.headerText).toHaveText("Create Account");
    await expect(this.p1).toHaveText("Must be at least 8 characters");
    await expect(this.p2).toHaveText("Includes uppercase");
    await expect(this.p3).toHaveText("Includes special character");
    //await expect(this.newsText).toHaveText(" Would you like to receive the latest news on shopping trends and deals?");
  }

  //Clear
  async clearEnteredValues() {
    await this.inputFirstName.clearValue();
    await this.inputLastName.clearValue();
    await this.inputEmail.clearValue();
    await this.inputPassword.clearValue();
  }

  //Get Email
  async getEmail() {
    const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView')
    const attr = await form.getAttribute('text')
    //console.log(attr) // outputs: "text"
    return attr
  }


}



module.exports = new createAccount();
