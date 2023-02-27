class ForgotPassword {

  get closeButton() {
    return $('//android.widget.ImageView[@content-desc="Close"]');
  }

  get staticHeaderText() {
    return $('//*[@text="CREATE ACCOUNT"]');
  }
  
  get staticText() {
    return $('//*[@text="Enter your email address below and we’ll send you an email with instructions to reset your password"]');
  }

  get sendEmail() {
    return $('//*[@text="SEND EMAIL"]');
  }

  get inputEmail() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.EditText');
  }

  //Error Popup
  get errorHeaderText() {
    return $('//*[@text="Something went wrong"]');
  }
  get errorStaticText() {
    return $('//*[@text="There is no user record corresponding to this identifier. The user may have been deleted."]');
  }
  get errorInvalidEmail() {
    return $('//*[@text="INVALID EMAIL"]');
  }

  get okButton() {
    return $('//*[@text="Ok"]');
  }

  get successStaticText() {
    return $('//*[@text="A link to reset your password was just emailed to you."]');
  }
  get successHeaderText() {
    return $('//*[@text="Email Sent!"]');
  }


  // Create Password Page
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

  get t3() {
    return $('//*[@text="Your password has been successfully updated."]');
  }
  get newPassword() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.EditText');
  }
  get submitPassword() {
    return $('//*[@text="SUBMIT"]');
  }
  

  
//-------------------------------------------------------------------------------------------------

async enterEmail(email) {
  await this.inputEmail.setValue(email);
  await this.sendEmail.click();
}

async enterNewPassword(pass) {
  await this.newPassword.setValue(pass);
  await this.submitPassword.click();
}

async clearEmail() {
  await this.inputEmail.clearValue();
}

//Verify Static Texts on Page
async verifyStaticTexts() {
  await expect(this.p1).toHaveText("Must be at least 8 characters");
  await expect(this.p2).toHaveText("Includes uppercase");
  await expect(this.p3).toHaveText("Includes special character");
}

  
}

module.exports = new ForgotPassword();
