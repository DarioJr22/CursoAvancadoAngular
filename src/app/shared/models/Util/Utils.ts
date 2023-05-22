import { DropDownValue } from "../../dropdown/dropdown-value"

export default class Utils{

static validaValoresNulos(e:DropDownValue){
    if(e.value == null || e.value == undefined || e.value == ""){
      return false
    }
      return true
    }




}
