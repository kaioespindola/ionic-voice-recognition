import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SiriProvider } from '../providers/siri/siri';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsPage";

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    siri: SiriProvider) {
    platform.ready().then(() => {

      statusBar.styleLightContent();
      statusBar.backgroundColorByHexString('#488aff');
      splashScreen.hide();
      siri.donateShortcut();
      siri.presentShortcut();

    });
  }
}

