import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalProvider } from '../../providers/modal/modal';
import { SpeechProvider } from '../../providers/speech/speech';
import { Result } from '../../interfaces/result';
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
    public speech: SpeechProvider) {
  }

  results = [];
  result: Result;

  startListen() {
    this.speech.startListening()
      .then((resposta) => {
        console.log(resposta);
      })
  }

  openResult() {
    this.modal.showModalVoice(this.result);
  }

  ngOnInit() {
    console.log(this.results);

    this.result = <Result>{
      id: 1,
      text: 'teste',
      valid: false
    };

    this.results.push(this.result);
    this.results.push(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.speech.checkPermission()
      .then((res) => {
        console.log(res);
      })

  }

}
