import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'coches',
    pathMatch: 'full'
  },
  {
    path: 'coches',
    children: [
      {
        path: '',
        loadChildren: () => import('./coches/coches.module').then( m => m.CochesPageModule)
      },
      {
        path: ':cocheId',
        loadChildren: () => import('./coches/coche-detalle/coche-detalle.module').then(m => m.CocheDetallePageModule)
      }
    ]
  },
  {
    path: 'coche-add',
    loadChildren: () => import('./coches/coche-add/coche-add.module').then(m => m.CocheAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
