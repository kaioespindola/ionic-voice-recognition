import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
@Injectable()
export class ModalProvider {

  constructor(
    public modalCtrl: ModalController) {
  }

  showModalVoice(message) {
    let modal = this.modalCtrl.create('ModalVoicePage', { data: message});
    modal.present();
  }

}
