import { FormGroup } from '@angular/forms';
import { MgsCampos } from './interfaces/mensagensCampos';

export class GenericValidator {
    constructor(private validationMessages: ValidationMessages){}


    processarMensagens(container:FormGroup):any{
        let messages:any = {}
        for(let controlKey in container.controls){
            if(container.controls.hasOwnProperty(controlKey)){
                let c = container.controls[controlKey];

                if(c instanceof FormGroup ){
                    let childMessages = this.processarMensagens(c);
                    Object.assign(messages, childMessages);
                }else{
                    if(this.validationMessages[controlKey]){
                        messages[controlKey] = '';
                        if((c.dirty || c.touched) && c.errors){
                            Object.keys(c.errors).map((messageK:any) =>{
                                if(this.validationMessages[controlKey][messageK]){
                                    messages[controlKey] = {mensagem:this.validationMessages[controlKey][messageK], mensagemTipo:''}
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }
}

export interface DisplayMessage {
        [key: string]:MgsCampos
}

export interface ValidationMessages {
    [key: string]:{[key:string]:string}
}
