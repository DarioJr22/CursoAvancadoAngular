import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from "@angular/core";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { InputtextComponent } from "./inputtext/inputtext.component";
import { MensagemComponent } from "./mensagem/mensagem.component";
import { InputnumberComponent } from "./inputnumber/inputnumber.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MvFormSchematicsComponent } from "./mv-form-schematics/mv-form-schematics.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MvNavigationComponent } from './mv-navigation/mv-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MvTableComponent } from './mv-table/mv-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MvDashboardComponent } from './mv-dashboard/mv-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MvTreeComponent } from './mv-tree/mv-tree.component';
import { MatTreeModule } from '@angular/material/tree';

import { SideBarComponent } from './side-bar/side-bar.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component'

@NgModule({
    declarations:[
        DropdownComponent,
        InputtextComponent,
        MensagemComponent,
        InputnumberComponent,
        MvFormSchematicsComponent,
        MvNavigationComponent,
        MvTableComponent,
        MvDashboardComponent,
        MvTreeComponent,
        SideBarComponent,
        ButtonComponent,
        CheckboxComponent,
        SideBarComponent,
        AvatarComponent,
        FooterComponent

    ],
    imports:[
        //Angular core
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        DropdownModule,
        FormsModule,
        RouterModule,
        //Angular Material
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatMenuModule,
        MatTreeModule,
        MatButtonModule,
        MatSidenavModule,
        MatSlideToggleModule
        //Adaptações do material -- Customização de componentes


    ],
    exports:[
      MvNavigationComponent,
      MvTableComponent,
      MvDashboardComponent,
      MvTreeComponent,
      MvFormSchematicsComponent,
        DropdownComponent,
        InputtextComponent,
        MensagemComponent,
        InputnumberComponent,
        SideBarComponent
    ]
})

export class SharedModule{

}
