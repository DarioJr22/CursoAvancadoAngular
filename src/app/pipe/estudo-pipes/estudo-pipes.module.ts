import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { EstudoPipesComponent } from './estudo-pipes.component';
import { NotifyModule } from 'src/app/shared/notify/notify.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EstudoPipesService } from './service/estudo-pipes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesRoutingModule } from './estudo-pipes.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import localePt from '@angular/common/locales/pt';
import { FileSizePipe } from './pipes/filesize.pipe';
registerLocaleData(localePt, 'pt-BR');



@NgModule({
  declarations: [
    EstudoPipesComponent,
    FileSizePipe
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    PipesRoutingModule,

    ReactiveFormsModule,
    NotifyModule,
    CommonModule,
    SharedModule
  ],

  exports:[
    EstudoPipesComponent
],

  providers:[
    EstudoPipesService,
  ]
})
export class EstudoPipesModule { }
