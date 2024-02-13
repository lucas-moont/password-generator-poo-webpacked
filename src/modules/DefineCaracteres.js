import { VerificaCheckBox } from "./VerificaCheckbox";

export default class DefineCaracteres {
  static defineCaract() {
    let alphabet = "abcdefjhijklmnopqrstuvxwyz";
    let numbers = "1234567890";
    let symbos = "/*.,[]^~´`()&";
  }

  verificaPermitidos(alphabets, numbers, symbols) {
    let allowedCaracteres = [];
    if (VerificaCheckBox.checkBoxMaiuscula()) {
      allowedCaracteres.push(alphabets.toUpperCase());
    }

    if (VerificaCheckBox.checkBoxMinuscula()) {
      allowedCaracteres.push(alphabets);
    }

    if(VerificaCheckBox.checkBoxNum()){
        allowedCaracteres.push(numbers)
    }

    if(VerificaCheckBox.checkBoxSimbol()){
        allowedCaracteres.push(symbols)
    }
  }
}

DefineCaracteres.defineCaract();
