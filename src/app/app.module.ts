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
import { CardDetalheComponent } from './componente/card-detalhe/card-detalhe.component';
import { ContadorComponent } from './componente/contador/contador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RxjsObsComponent,
    ReactiveFormsComponent,
    ContadorComponent,

  
   /*  InputtextComponent,
    InputnumberComponent,
    DropdownComponent,
    MensagemComponent,
    ArqComponentComponent */
  ],
  imports: [
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
