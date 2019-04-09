import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalProvider } from '../../providers/modal/modal';
import { SpeechProvider } from '../../providers/speech/speech';
import { ToastProvider } from '../../providers/toast/toast';
import { Result } from '../../interfaces/result';
import { Commands } from '../../app/app.commands';
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

  commands = Commands.getCommands();
  result: Result;

  async startListen() {
    await this.speech.startListening()
      .then((resposta) => {
        this.openResult('Quero pedir um guincho');
      })
  }

  openResult(resposta) {

    setTimeout(() => {
      
      this.commands.forEach((command) => {
        if(command.includes(resposta)) {
          this.modal.showModalVoice(resposta);
        } else {
          console.log('Não existe este comando..');
        }
      });

    }, 1000);

    this.toast.sendToast('Reconhecendo...', 1000, 'top');

  }

  ngOnInit() {
    console.log(this.commands);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.speech.checkPermission()
      .then((res) => {
        console.log(res);
      })

  }

}