import { Component } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent {
  isError = false;

  sections = [
    {id:1, name: 'Introdución', duración: '10'},
    {id:1, name: 'Usos de Angular', duración: '5'},
    {id:1, name: 'Instalación de entorno', duración: '200'},
    {id:1, name: 'Directivas', duración: '10'},
    {id:1, name: 'Componentes', duración: '20'},
    {id:1, name: 'Otros', duración: '30'},
  ]


  constructor(){}
  ngOnInit():void{
    // setTimeout(()=>{
    //   this.isError = true;

    // }, 4000)

  }
  showError(){
    this.isError =true;
  }
}
