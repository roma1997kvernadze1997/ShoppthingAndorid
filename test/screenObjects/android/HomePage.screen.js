const axios = require('axios');
// const fetch = require('node-fetch');
//const webdriverio = require('webdriverio');
//const fetch = require('wdio-fetch').fetch;


class HomePage {

  // async getJSON() {

  //   try {
  //     const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async getRandomJoke() {
    const responce = axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
    return responce;
    //https://api.chucknorris.io/jokes/random
  }
  
  async getSendPost() {
    const responce = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcgBcfO0m74fnS72oHw7lEPr5_LSRkEpA', {
      email: 'roma@shopthing.com',
      password: 'Admin123$',
      returnSecureToken: true
    });
    return responce;
  }

  get home() {
    return $('//android.view.View[@content-desc="Home"]');
  }

  get enetrEvent() {
    return $('//*[@class="android.widget.LinearLayout"]');
  }

  get btnBell() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ImageView');
  }

  get btnFollowShopper() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.View');
  }

  get backButton() {
    return $('//android.widget.ImageView[@content-desc="back"]');
  }

  get shopperName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]');
  }

  get shopperEventName() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
  }

//----------------------------------------/ Methods /--------------------------------------------------  



//Swipe Functions

async swipeUp() {
  const swipeUp = (duration = 1000) => {
    browser.touchAction([
      { action: 'press', x: 511, y: 1948 },
      { action: 'wait', ms: duration },
      { action: 'moveTo', x: 540, y: 797 },
      'release'
    ]);
  };
  swipeUp();
};

async swipeDown() {
  const swipeDowns = (duration = 1000) => {
    browser.touchAction([
      { action: 'press', x: 511, y: 1948 },
      { action: 'wait', ms: duration },
      { action: 'moveTo', x: 540, y: 797 },
      'release'
    ]);
  };
  swipeDowns();
};

// Get Shopper Event Name
async getShopperEventName() {
  const form = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]')
  const attr = await form.getAttribute('text')
  //console.log(attr) // outputs: "text"
  return attr
}


async tt() {

  await browser.expectRequest('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', 200)

  // const webdriverio = require('webdriverio');
  // const options = {
  //     desiredCapabilities: {
  //         browserName: 'chrome'
  //     }
  // };
  // const client = webdriverio.remote(options);
  // client
  //     .url('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .http({
  //         method: 'GET',
  //         url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  //     })
  //     .then(function (response) {
  //         console.log(response.body);
  //     })
  //     .end();
  }



  async swipeUp111() {
    const swipeUp = (duration = 100) => {
      browser.touchAction([
        { action: 'press', x: 980, y: 865 },
        { action: 'wait', ms: duration },
        { action: 'moveTo', x: 980, y: 865 },
        'release'
      ]);
    };
    swipeUp();
  };

}

module.exports = new HomePage();
