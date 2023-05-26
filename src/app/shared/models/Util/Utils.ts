import { ValueField } from "../interfaces/value-fields"

export default class Utils{




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
