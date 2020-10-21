import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CochesPageRoutingModule } from './coches-routing.module';

import { CochesPage } from './coches.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CochesPageRoutingModule
  ],
  declarations: [CochesPage]
})
export class CochesPageModule {}
