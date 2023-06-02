import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() mode!:boolean;


}
