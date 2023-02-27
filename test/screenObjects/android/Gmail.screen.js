class Gmail {



  get linkOpen() {
    return $('//*[@text="link?link=https://lstcommerce-"]');
  }
  
  get thanks() {
    return $('//*[@text="Thanks,"]');
  }
  get xButton() {
    return $('//android.widget.ImageButton[@content-desc="Close"]');
  }
  get dontAllow() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[2]');
  }
  get openMail() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.view.ViewGroup[1]');
  }



//-------------------------------------------------------------------------------------------------

  
}

module.exports = new Gmail();
