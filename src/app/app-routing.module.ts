import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObsComponent } from './rxjs-obs/rxjs-obs.component';

const routes: Routes = [
  {path:'rxjsobsevables',
    component:RxjsObsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
