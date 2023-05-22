import { NgModule } from "@angular/core";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { InputtextComponent } from "./inputtext/inputtext.component";
import { MensagemComponent } from "./mensagem/mensagem.component";
import { InputnumberComponent } from "./inputnumber/inputnumber.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        DropdownComponent,
        InputtextComponent,
        MensagemComponent,
        InputnumberComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        DropdownModule,
        FormsModule
    ],
    exports:[
        DropdownComponent,
        InputtextComponent,
        MensagemComponent,
        InputnumberComponent
    ]
})

export class SharedModule{

}
