import { NgModule } from "@angular/core";
import { NotifyComponent } from "./notify.component";
import { CommonModule } from "@angular/common";
import { MatActionList } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations:[NotifyComponent],
  exports:[NotifyComponent],
  imports:[CommonModule,
  MatIconModule]
})

export class NotifyModule{}
