import { Component } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.scss']
})
export class AtributoComponent {
  constructor(){}
 messageType = 1;
 inputValue = 'Holiwis';

 ngOnInit():void{}

}
