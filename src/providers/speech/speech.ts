import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Injectable()
export class SpeechProvider {

  constructor(
    public speechRecognition: SpeechRecognition) {
  }

  async startListening() {
    await this.speechRecognition.startListening()
      .subscribe((matches: Array<string>) => {
        return matches[0];
      }, (err => {
        return console.log(err);
      }))
  }

  async stopListening() {
    await this.speechRecognition.stopListening()
      .then((res) => {
        console.log(res);
      })
  }

  async checkPermission() {
    await this.speechRecognition.hasPermission()
      .then((permission) => {
        return permission;
      })
  }

  async requestPermission() {
    await this.speechRecognition.requestPermission()
    .then(
      () => console.log('Permitido'),
      () => console.log('Não Permitido')
    )
  }

}
