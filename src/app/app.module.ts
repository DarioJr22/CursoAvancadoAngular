import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

    //Mat-Module
    MatCardModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
