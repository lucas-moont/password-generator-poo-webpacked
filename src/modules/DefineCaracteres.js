import { VerificaCheckBox } from "./VerificaCheckbox";
//DEFINE QUAIS CARACTERES SERÃO PERMITIDOS PELO GERADOR DE SENHAS
//ESSE MÓDULO É DEPENDENTE DO MÓDULO VERIFICACHECKBOX

export default class DefineCaracteres {
  
  //DEFINES AND RETURNS ALL THE ALLOWED Characters
  static defineCaract() {
    let alphabet = "abcdefjhijklmnopqrstuvxwyz";
    let numbers = "1234567890";
    let symbols = "/*.,[]^~´`()&";
    let allowedCaracteres = [];

    return DefineCaracteres.verificaPermitidos(alphabet, numbers, symbols, allowedCaracteres)
  }

  //VERIFY ALLOWED CHARACTERS AND RETURNS AN ARRAY WITH EVERYTHING NEEDED
  static verificaPermitidos(alphabets, numbers, symbols, allowedCaracteres) {
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

    return [...allowedCaracteres]
  }
}