import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
@Injectable()
export class ToastProvider {

  constructor(public toast: ToastController) {}

  async sendToast(message, duration, position) {
    const toast = await this.toast.create({
      message: message,
      duration: duration,
      position: `${position}`
    });
    toast.present();
  }

}
