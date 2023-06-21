import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlZonasProvidersComponent } from './dl-zonas-providers.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'',component:DlZonasProvidersComponent}
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

})
export class ZonasModuleModule { }
