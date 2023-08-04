import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');
import {CommonModule, registerLocaleData} from '@angular/common';

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
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTabsModule} from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import { SlidesComponent } from './slides/slides.component';




@NgModule({
  declarations: [
    AppComponent,
    RxjsObsComponent,
    ReactiveFormsComponent,
    NotFoundComponentComponent,
    LoginComponent,
    DashboardComponent,
    SlidesComponent,

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
    NgxChartsModule,


    //Mat-Module
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    NgChartsModule,
    MatTabsModule,
    SwiperModule,
    CommonModule


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
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
