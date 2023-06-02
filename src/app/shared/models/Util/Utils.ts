import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { ValueField } from "../interfaces/value-fields"

export default class Utils{

//Forms

static getTipoValidacao(msg:string,tipo:string){
  return {
    mensagem:msg,mensagemTipo:tipo
  }
}


//Recupera todos os formcontrols que devem ser validados

//Testar validação !

static getFomControlsMsgSouce(formGroup:FormGroup){
  let objetos:any[] =[]
  let message = {mensagem:'',mensagemTipo:''}
  Object.keys(formGroup.controls).forEach((key:any)=>{
   if(formGroup.controls[key].invalid){
        objetos[key] =  message
   }
  })
  return objetos
}


static convertToFormControl(absCtrl: AbstractControl | null): FormControl {
  const ctrl = absCtrl as FormControl;
  return ctrl;
}



static validaValoresNulos(e:ValueField){

  if(e){
      if(e.value == null || e.value == undefined || e.value == ""){
        return false
      }
        return true
    }else{
      return false
    }

  }


static validaValoresNulosArray(e:ValueField[]){


}

//Relativo á Datas

static meses() {
  return [
      {'codigo': '01', 'nome': 'Janeiro'}, {'codigo': '02', 'nome': 'Fevereiro'},{'codigo': '03', 'nome': 'Março'},
      {'codigo': '04', 'nome': 'Abril'}, {'codigo': '05', 'nome': 'Maio'}, {'codigo': '06', 'nome': 'Junho'},
      {'codigo': '07', 'nome': 'Julho'}, {'codigo': '08', 'nome': 'Agosto'}, {'codigo': '09', 'nome': 'Setembro'},
      {'codigo': '10', 'nome': 'Outubro'}, {'codigo': '11', 'nome': 'Novembro'}, {'codigo': '12', 'nome': 'Dezembro'}
    ];
}






}
function params(target: typeof Utils, propertyKey: "getFomControlsMsgSouce", descriptor: TypedPropertyDescriptor<(formGroup: FormGroup<any>) => any[]>): void | TypedPropertyDescriptor<(formGroup: FormGroup<any>) => any[]> {
  throw new Error("Function not implemented.");
}

