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
import { InputtextComponent } from './shared/inputtext/inputtext.component';
import { InputnumberComponent } from './shared/inputnumber/inputnumber.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { MensagemComponent } from './shared/mensagem/mensagem.component';
import { ProdutoDashboardComponent } from './arquitetura-componentes/produto-dashboard/produto-dashboard.component';
import { ProdutoModule } from './arquitetura-componentes/produto.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    RxjsObsComponent,
    ReactiveFormsComponent,



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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
