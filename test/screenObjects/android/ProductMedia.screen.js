class ProductMedia {

  get eyeIcon() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]');
  }

  get thisItemIsSoldOut() {
    return $('//*[@text="This item is sold out"]');
  }

  get discountedAmount() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.TextView[4]');
  }

  get realAmount() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.TextView[2]');
  }

  get retail() {
    return $('//*[@text="Retail:"]');
  }

  get productDescription() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[3]');
  }

  get time() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]');
  }

  get eventName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[1]');
  }

  get shopperProfile() {
    return $('//android.widget.ImageView[@content-desc="shopper image"]');
  }



  get enterEvent() {
    return $('//*[@class="android.widget.LinearLayout"]');
  }
  get clickVideo() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.ViewGroup/android.widget.ImageView');
  }



  get buyNow() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.Button');
  }

  get soldOut() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[5]/android.widget.Button');
  }

  get more() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[4]');
  }

  //Product end popup
  get widgetText() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]');
  }

  get close() {
    return $('//android.widget.ImageView[@content-desc="Close"]');
  }

  get refreshPage() {
    return $('//*[@text="REFRESH"]');
  }

  get nothingNew() {
    return $('');
  }

//------------------------------------------------------------------------------------------  

// Get Shopper Event Name
async getShopperEventName() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[1]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

// Get End Widget Text
async getEndWidgetText() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[2]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}

// Get Check back Text
async getCheckBackSoonText() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[1]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}




}

module.exports = new ProductMedia();
