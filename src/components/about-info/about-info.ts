import { Component } from '@angular/core';

/**
 * Generated class for the AboutInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'about-info',
  templateUrl: 'about-info.html'
})
export class AboutInfoComponent {

  text: string;

  constructor() {
    console.log('Hello AboutInfoComponent Component');
    this.text = 'Configurações';
  }

}
