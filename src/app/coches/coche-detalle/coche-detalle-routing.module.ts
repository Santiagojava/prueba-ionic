import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocheDetallePage } from './coche-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CocheDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocheDetallePageRoutingModule {}
