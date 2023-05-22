import { MgsCampos } from './../models/interfaces/mensagensCampos';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DropDownValue } from './dropdown-value';
import Utils from '../models/Util/Utils';
import { Mgs } from '../models/Enum/mensagens';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements ControlValueAccessor {
  // Inicialização de variáveis e constantes
  @Input() lista: DropDownValue[] = [];
  @Input() desabilitar: boolean = false;
  @Input('img') img: any;
  @Input('label') label: any;
  @Input('uid') uid: any;
  onChange: any = () => {};
  onTouch: any = () => {};
  @Output() selecao: EventEmitter<DropDownValue> =
    new EventEmitter<DropDownValue>();
  @ViewChild('input', { static: false }) input!: ElementRef<any>;
  tempList: any[] = [];
  keyword: string = '';
  _img: any;
  _label: any;
  _uid: any;
  value: any = 'Select';
  shown: boolean = false;

  valor: DropDownValue = {
    label: '',
    value: '',
  };

  campoValido: Boolean = false;
  msg: MgsCampos = {
    mensagem: '',
    mensageTipo: '',
  };

  constructor(private utils: Utils, private ele: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this._label =
      typeof this.label != 'undefined' && this.label != ''
        ? this.label
        : 'name';
    this._img =
      typeof this.img != 'undefined' && this.label != '' ? this.label : 'img';
    this._label =
      typeof this.label != 'undefined' && this.label != '' ? this.label : 'id';
    this.value = 'Select';

  }

  ngOnInit(): void {}

  writeValue(value: any) {
    if (value) {
      this.tempList.map((i) => {
          if (i[this._uid] == value) this.value = i[this._label];
        }
      );
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  search(e: any) {
    const val = e.toLowerCase();
    const temp = this.tempList.filter((i) => {
      return i[this._label].toLowerCase().includes(val);
        }
      );
        this.lista = temp;
  }

  select(item: any) {
    this.onChange(item[this._label]);
    this.value = item[this._label];
    this.shown = false;
    this.selecao.emit(item);
  }

  show() {
    this.shown = !this.shown;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 200);
  }

  enviarValor(e: any) {
    this.selecao.emit(e);
  }

  validarCampo(e: any) {
    if (Utils.validaValoresNulos(e)) {
      this.msg.mensagem = Mgs.CAMPO_VAZIO;
      this.msg.mensageTipo = 'danger';
      this.campoValido = false;
    } else {
      this.msg.mensagem = '';
      this.msg.mensageTipo = '';
      this.campoValido = true;
    }
  }
}
