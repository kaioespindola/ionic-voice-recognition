import { Injectable } from '@angular/core';
import { SiriShortcuts, SiriShortcut } from '@ionic-native/siri-shortcuts';

@Injectable()
export class SiriProvider {

  constructor(
    public siri: SiriShortcuts) {
  }

  donateShortcut() {
    this.siri.donate({
      persistentIdentifier: 'abrir-auto',
      title: 'Abrir Auto',
      suggestedInvocationPhrase: 'Abrir Auto',
      userInfo: { username: 'username' },
      isEligibleForSearch: true,
      isEligibleForPrediction: true,
    })
    .then(() => console.log('Atalho doado.'))
    .catch((error: any) => console.error(error));
  }

  presentShortcut() {
    this.siri.present({
      persistentIdentifier: 'abrir-auto',
      title: 'Abrir Auto',
      suggestedInvocationPhrase: 'Abrir Auto',
      userInfo: { username: 'username' },
    })
    .then(() => console.log('Atalho apresentado'))
    .catch((error: any) => console.error(error));
  }

  activateShortcut() {
    this.siri.getActivatedShortcut()
      .then((data: SiriShortcut|null) => console.log(data))
      .catch((error: any) => console.error(error));
  }

}
