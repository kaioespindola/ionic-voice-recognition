import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalProvider } from '../../providers/modal/modal';
import { SpeechProvider } from '../../providers/speech/speech';
import { ToastProvider } from '../../providers/toast/toast';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalProvider,
    public speech: SpeechProvider,
    public toast: ToastProvider) {
  }

  startListen() {
    this.speech.startListening();
  }

  ngOnInit() {
    this.speech.requestPermission();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

}