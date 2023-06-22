import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlZonasProvidersComponent } from './dl-zonas-providers.component';
import { ZonasRoutingModule } from './zonas-module.routing.module copy';



@NgModule({
  declarations: [
    DlZonasProvidersComponent
  ],
  imports: [
    CommonModule,
    ZonasRoutingModule
  ],
  exports:[
    DlZonasProvidersComponent
  ]
})
export class ZonasModuleModule { }
