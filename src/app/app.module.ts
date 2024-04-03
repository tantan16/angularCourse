import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { AtributoComponent } from './atributo/atributo.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import { CompraModule } from './compra/compra.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstructuralComponent,
    AtributoComponent,
    PipesComponent,
    EstadosPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
