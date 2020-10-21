import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocheAddPageRoutingModule } from './coche-add-routing.module';

import { CocheAddPage } from './coche-add.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CocheAddPageRoutingModule
  ],
  declarations: [CocheAddPage]
})
export class CocheAddPageModule {}
