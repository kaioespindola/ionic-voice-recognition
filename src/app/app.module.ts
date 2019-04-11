import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SiriShortcuts } from '@ionic-native/siri-shortcuts';

import { MyApp } from './app.component';
import { ModalProvider } from '../providers/modal/modal';
import { SpeechProvider } from '../providers/speech/speech';
import { AlertProvider } from '../providers/alert/alert';
import { ToastProvider } from '../providers/toast/toast';
import { SiriProvider } from '../providers/siri/siri';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    ModalProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechProvider,
    AlertProvider,
    ToastProvider,
    SiriShortcuts,
    SiriProvider
  ]
})
export class AppModule {}
