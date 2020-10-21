import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CochesPage } from './coches.page';

const routes: Routes = [
  {
    path: '',
    component: CochesPage
  },
  {
    path: 'coche-detalle',
    loadChildren: () => import('./coche-detalle/coche-detalle.module').then( m => m.CocheDetallePageModule)
  },
  {
    path: 'coche-add',
    loadChildren: () => import('./coche-add/coche-add.module').then( m => m.CocheAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CochesPageRoutingModule {}
