//GERA A SENHA
//MÓDULO DEPENDENTE DE DEFINE CARACTERES
import DefineCaracteres from './DefineCaracteres'

class GeraSenha {
    //usa todos os métodos para gerar a senha
    static geraSenha(){
        let allowed = DefineCaracteres.defineCaract()
        let senha = ''

        senha = GeraSenha.includesNecessary(allowed, senha)
        senha = GeraSenha.includesQuantity(allowed, senha, 20)
        GeraSenha.mostraSenha(senha)
    }

    //inclui pelo menos um dos caracteres necessários
    static includesNecessary(allowed, senha){
        allowed.forEach((item, index) => {
            senha = `${senha}${item[(Math.floor(Math.random() * item.length))]}` 
        })
        return senha
    }

    //inclui a quantidade de caracteres necessários
    static includesQuantity(allowed, senha, necCaract){
        while (senha.length < necCaract){
            let arrayIndex = Math.floor(Math.random() * allowed.length)
            let stringIndex = Math.floor(Math.random() * allowed[arrayIndex].length)
            senha = `${senha}${allowed[arrayIndex][stringIndex]}`
        }

        return senha
    }

    //mostra senha na tela
    static mostraSenha(senha){
        document.querySelector('.novaSenha').innerHTML = `${senha}`
    }
}

document.querySelector('.gerar-senha').addEventListener('click', () => {
    GeraSenha.geraSenha()
})