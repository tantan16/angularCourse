import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  currentDate: Date|null = null;
  resultado: number = 0;
  constructor(){

  }

  ngOnInit(){
  }
  sumar(a:number,b:number){
    return a + b;
  }

}
