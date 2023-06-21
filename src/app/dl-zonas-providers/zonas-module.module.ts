import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlZonasProvidersComponent } from './dl-zonas-providers.component';



@NgModule({
  declarations: [
    DlZonasProvidersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DlZonasProvidersComponent
  ]
})
export class ZonasModuleModule { }
