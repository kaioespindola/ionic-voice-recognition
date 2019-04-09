import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Result } from '../../interfaces/result';
import { Commands } from '../../app/app.commands';

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

  command: string;

  async getCurrentCommand() {
    const allCommands = await Commands.getCommands();
    console.log(allCommands);
  }

  close() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalVoicePage');
    this.command = this.navParams.get('data');
    console.log(this.command);

    this.getCurrentCommand();
  }

}
