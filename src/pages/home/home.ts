import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalProvider } from '../../providers/modal/modal';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Result } from '../../models/result';
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
    public speech: SpeechRecognition) {
  }

  results : Result;

  result = {
    name: 'Teste'
  }

  openResult() {
    this.modal.showModalVoice(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
