import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'miprimerproyectoangular';
  constructor(){
    localStorage.setItem('id', '1234')
  }
}
