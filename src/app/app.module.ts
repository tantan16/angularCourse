import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { AtributoComponent } from './atributo/atributo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import { CompraModule } from './compra/compra.module';
import { VentaModule } from './venta/venta.module';
import { FormulariosComponent } from './formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstructuralComponent,
    AtributoComponent,
    PipesComponent,
    EstadosPipe,
    FormulariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompraModule,
    VentaModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
