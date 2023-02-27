class Checkout {

  get enterEvent() {
    return $('//*[@class="android.widget.LinearLayout"]');
  }
  
  get clickVideo() {
    return $('/hierarchy/android.widget.FrameLayout/android.view.View');
  }

  get buyNow() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.Button');
  }

  get soldOut() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[5]/android.widget.Button');
  }

  get selectSize() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[4]');
  }

  get continueCheckout() {
    return $('//*[@text="Continue to checkout"]');
  }

  get continueToShipping() {
    return $('//*[@text="Continue to Shipping"]');
  }

  get continueToPaymentMethod() {
    return $('//*[@text="Continue to payment method"]');
  }

  get submitPaymentMethod() {
    return $('//*[@text="Submit payment method"]');
  }

  get inputCoupon() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View[1]/android.widget.EditText');
  }

  get applyCoupon() {
    return $('//*[@text="Apply"]');
  }

  get payNow() {
    return $('//*[@text="Pay Now"]');
  }

  get checkOrderStatus() {
    return $('//*[@text="Your order is processing"]');
  }

  get apartment() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[3]/android.view.View[5]/android.view.View[2]/android.widget.EditText');
  }

  get postalCode() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[3]/android.view.View[5]/android.view.View[5]/android.widget.EditText');
  }

  get emailAddress() {
    return $('//*[@id="email"]');
  }

  get checkoutBack() {
    return $('//android.widget.ImageView[@content-desc="back"]');
  }

  get productBack() {
    return $('//android.view.View[@content-desc="back"]');
  }









//------------------------------------------/ Methods /------------------------------------------------  

//Enter Coupon
async login(coupon) {
  await this.inputCoupon.setValue(coupon);
  await this.applyCoupon.click();
}

//Get Checkout Description
async getCheckoutDescription() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.TextView[4]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Get Product Description
async getProductDescription() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[3]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Get Product Amount
async getProductAmount() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.TextView[4]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Get Checkout Amount
async getCheckoutAmount() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.TextView[6]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Get Email
async getEmail() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

//Enter Apartment
async inputApartment(apartment) {
  await this.apartment.setValue(apartment);
}



//Enter Address




}

module.exports = new Checkout();
