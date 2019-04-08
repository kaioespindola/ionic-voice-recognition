import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalVoicePage } from './modal-voice';

@NgModule({
  declarations: [
    ModalVoicePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalVoicePage),
  ],
})
export class ModalVoicePageModule {}
