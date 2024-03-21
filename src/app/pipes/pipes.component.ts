import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  name = 'Tania';
  date = '2024-03-20T18:59:31.2382';
  estado = 0;
 
  ngOnInit():void{}

  changeState(){
    this.estado = 1;
  }
  }







