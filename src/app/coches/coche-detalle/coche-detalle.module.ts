import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocheDetallePageRoutingModule } from './coche-detalle-routing.module';

import { CocheDetallePage } from './coche-detalle.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CocheDetallePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [CocheDetallePage]
})
export class CocheDetallePageModule {}
