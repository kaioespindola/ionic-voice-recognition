import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-voice',
  templateUrl: 'modal-voice.html',
})
export class ModalVoicePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController) {
  }

  close() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalVoicePage');
    let data = this.navParams.get('data');
    console.log(data);
  }

}
