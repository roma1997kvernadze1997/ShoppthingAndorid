class ProfilePage {

  get profile() {
    return $('//*[@text="Profile"]');
  }

  get loginToShopthing() {
    return $('//*[@text="Login to ShopThing"]');
  }


  

  //Terms $ Conditions
  get termsAndConditions() {
    return $('//*[@text="Terms and Conditions"]');
  }

  get termsAndConditionsPurchasing() {
    return $('//*[@text="Terms and Conditions for Purchasing"]');
  }

  get termsAndConditionsVIP() {
    return $('//*[@text="Terms and Conditions for VIP"]');
  }





  get privacyPolicy() {
    return $('//*[@text="Privacy Policy"]');
  }

  get backButton() {
    return $('//android.widget.ImageView[@content-desc="back"]');
  }

  get signOut() {
    return $('//*[@text="Sign out"]');
  }


  //Delete Account
  get deleteAcc1() {
    return $('//*[@text="Delete Account"]');
  }

  get deleteAcc2() {
    return $('//*[@text="DELETE"]');
  }

  get enetrEmail111() {
    return $('//*[@class="android.widget.EditText"]');
  }

  //Delete Popup buttons
  get cancel() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button');
  }
  get deleteAccount() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button');
  }

//------------------------------------------------------------------------------------------  

//Get TExt
async getEnterYourEmailText() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Get error text
async getErrorText() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.TextView[3]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Get error Popup
async getErrorPopup() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Enter Email
async enterEmail(email) {
  await this.enetrEmail111.setValue(email);
}




}

module.exports = new ProfilePage();
