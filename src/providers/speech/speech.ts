import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Commands } from '../../app/app.commands';
import { ToastProvider } from '../../providers/toast/toast';
import { ModalProvider } from '../../providers/modal/modal';

@Injectable()
export class SpeechProvider {

  constructor(
    public speechRecognition: SpeechRecognition,
    public toast: ToastProvider,
    public modal: ModalProvider) {
  }

  commands = Commands.getCommands();
  resultsFromListen = [];

  async startListening() {
    await this.speechRecognition.startListening()
      .subscribe((matches: Array<string>) => {

        this.commands.forEach((comando) => {
          if(comando == matches[0].toLowerCase()) {
            return this.modal.showModalVoice(comando);
          }
          else {
            return console.log('Sem match :(');
          }
        });

      })
  }

  stopListening() {
   this.speechRecognition.stopListening()
      .then((res) => {
        console.log(res);
      })
  }

 checkPermission() {
   this.speechRecognition.hasPermission()
      .then((permission) => {
        return permission;
      })
  }

 requestPermission() {
   this.speechRecognition.requestPermission()
    .then(
      () => console.log('Permitido'),
      () => console.log('Não Permitido')
    )
  }

}
