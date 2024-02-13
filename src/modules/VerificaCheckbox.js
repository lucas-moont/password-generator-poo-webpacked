//VERIFICA QUAIS CHECKBOXES ESTÃO MARCADOS

export class VerificaCheckBox{
    static checkBoxMaiuscula(){
        if(document.querySelector('.chk-maiusculas').checked){
            return true 
        }else{
            return false 
        }
    }

    static checkBoxMinuscula(){
        if(document.querySelector('.chk-minusculas').checked){
            return true 
        }else{
            return false 
        }
    }

    static checkBoxNum(){
        if(document.querySelector('.chk-numeros').checked){
            return true 
        }else{
            return false 
        }
    }

    static checkBoxSimbol(){
        if(document.querySelector('.chk-simbolos').checked){
            return true 
        }else{
            return false 
        }
    }
}