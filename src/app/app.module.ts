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


@NgModule({
  declarations: [
    AppComponent,
    RxjsObsComponent,
    ReactiveFormsComponent,
    InputtextComponent,
    InputnumberComponent,
    DropdownComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
