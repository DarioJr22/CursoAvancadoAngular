import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/shared/models/interfaces/produtos-pexels';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  @Input()produtos:Produto[] = []

}
