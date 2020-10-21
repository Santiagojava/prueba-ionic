import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@NgModule({
    declarations: [EjemploComponent],
    exports: [EjemploComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule{}