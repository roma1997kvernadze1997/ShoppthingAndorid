class LoginPage {

  get invalidUsernamePassword() {
    return $('//*[@text="INVALID PASSWORD OR EMAIL"]');
  }

  get createAccount() {
    return $('//*[@text="CREATE ACCOUNT"]');
  }
  
  get inputUsername() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.EditText[1]');
  }
  get inputPassword() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.EditText[2]');
  }
  get btnLogin() {
    return $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.widget.Button'
    );
  }

  get btnClose() {
    return $('//android.widget.ImageView[@content-desc="Close"]');
  }

  get headerText() {
    return $('//*[@text="Login"]');
  }

  get eyeIcon() {
    return $('//android.view.View[@content-desc="Toggle Password"]');
  }

  get forgotPassword() {
    return $('//*[@text="Forgot Password"]');
  }


  //Profile Page
  get headerProfileText() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[2]');
  }
  get signOut() {
    return $('//*[@text="Sign out"]');
  }


  //Error Popup
  get errorHeader() {
    return $('//*[@text="Error"]');
  }
  get retryButton() {
    return $('//*[@text="Retry"]');
  }
  get errorText() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]');
  }
//-------------------------------------------------------------------------------------------------

  //Login Method
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  //Login Method
  async login2(username, password) {
    await this.inputUsername.clearValue();
    await this.inputPassword.clearValue();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  //Get Password Text
  async getPasswordText() {
    const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.EditText[2]')
    const attr = await form.getAttribute('text')
    //console.log(attr) // outputs: "text"
    return attr
  }
}

module.exports = new LoginPage();
