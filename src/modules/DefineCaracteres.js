import { VerificaCheckBox } from "./VerificaCheckbox"

export default class DefineCaracteres {
    static defineCaract(){
        let alphabet = 'abcdefjhijklmnopqrstuvxwyz'
        let numbers = '1234567890'
        let symbos = '/*.,[]^~´`()&'

    }

    verificaPermitidos(alphabets, numbers, symbols){
        let allowedCaracteres = []
        if(VerificaCheckBox.checkBoxMaiuscula()){
            allowedCaracteres.push(alphabets.toUpperCase())
        }
        let poeMinuscula = VerificaCheckBox.checkBoxMinuscula()
        let poeNum = VerificaCheckBox.checkBoxNum()
        let poeSymbol = VerificaCheckBox.checkBoxSimbol()
    }
}

DefineCaracteres.defineCaract()