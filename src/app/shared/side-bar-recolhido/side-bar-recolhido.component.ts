import { data } from 'cypress/types/jquery';
import { Component, Host, HostListener } from '@angular/core';
import { files } from '././../mv-tree/example-data';
@Component({
  selector: 'mv-side-bar-recolhido',
  templateUrl: './side-bar-recolhido.component.html',
  styleUrls: ['./side-bar-recolhido.component.scss'],
 
})
export class SideBarRecolhidoComponent {

  data:any[] = []
  isExpanded = false
  constructor(){
    this.data = files
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
      if(event.target.innerWidth < 768){
        document.querySelector('.sidebar-recolhida')?.classList.remove('sidebar-expandida')
        this.isExpanded = false
      }
    }



  toggleSideBar(){
    document.querySelector('.sidebar-recolhida')?.classList.toggle('sidebar-expandida')
    this.isExpanded = !this.isExpanded

  }
}
