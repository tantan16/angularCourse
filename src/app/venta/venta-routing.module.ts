import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { HistorialVentaComponent } from './historial-venta/historial-venta.component';

const routes: Routes = [
  { path: '', redirectTo: 'nueva', pathMatch: 'full' },
  { path: 'nueva', component: NuevaVentaComponent },
  { path: 'historial', component: HistorialVentaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }