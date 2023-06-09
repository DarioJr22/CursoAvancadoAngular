import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');
import {registerLocaleData} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsObsComponent } from './rxjs-obs/rxjs-obs.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoModule } from './arquitetura-componentes/produto.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { NotifyModule } from './shared/notify/notify.module';
import { EstudoPipesModule } from './pipe/estudo-pipes/estudo-pipes.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './shared/models/paginator/matpaginator';
import { ZonasModuleModule } from './dl-zonas-providers/zonas-module.module';



@NgModule({
  declarations: [
    AppComponent,
    RxjsObsComponent,
    ReactiveFormsComponent,
    NotFoundComponentComponent,
    LoginComponent,

   /*  InputtextComponent,
    InputnumberComponent,
    DropdownComponent,
    MensagemComponent,
    ArqComponentComponent */
  ],
  imports: [
    //Angular Core
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NotifyModule,
    EstudoPipesModule,
    ZonasModuleModule,


    //Mat-Module
    MatCardModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [
    LoginService,
    {
    provide: 'ttlDefault',
    useValue: 5000
    },
    {
      provide:MatPaginatorIntl,
      useClass:CustomMatPaginatorIntl
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
