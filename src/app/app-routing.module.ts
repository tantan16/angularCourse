import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaComponent } from './compra/nueva/nueva.component';
import { HistorialComprasComponent } from './compra/historial-compras/historial-compras.component';
import { AuthGuard } from './auth.guard';
import { CompraModule } from './compra/compra.module';

const routes: Routes = [
  {path:'', redirectTo: 'pipes', pathMatch: 'full'},
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: EstructuralComponent},
  {path: 'compra', 
  component:ListadoComponent, 
  canActivate: [AuthGuard],
  children:[
    {path: 'nueva', component: NuevaComponent},
    {path: 'historial', component: HistorialComprasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
