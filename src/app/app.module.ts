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
import { TodosComponent } from './todos/todos.component';
import{HTTP_INTERCEPTORS, HttpClient, HttpClientModule}from '@angular/common/http'
import { InterceptorService } from './services/interceptor.service';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstructuralComponent,
    AtributoComponent,
    PipesComponent,
    EstadosPipe,
    FormulariosComponent,
    TodosComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompraModule,
    VentaModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
