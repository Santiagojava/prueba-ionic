import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocheAddPage } from './coche-add.page';

const routes: Routes = [
  {
    path: '',
    component: CocheAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocheAddPageRoutingModule {}
