import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaComponent } from './nueva/nueva.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    NuevaComponent,
    HistorialComprasComponent
  ],
  exports:[
    ListadoComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]

})
export class CompraModule { }
