import DefineCaracteres from './DefineCaracteres'

class GeraSenha {
    static geraSenha(){
        let allowed = DefineCaracteres.defineCaract()
        let senha = ''

        senha = GeraSenha.includesNecessary(allowed, senha)
        senha = GeraSenha.includesQuantity(allowed, senha, 20)
        GeraSenha.mostraSenha(senha)
    }

    static includesNecessary(allowed, senha){
        allowed.forEach((item, index) => {
            senha = `${senha}${item[(Math.floor(Math.random() * item.length))]}` 
        })
        return senha
    }

    static includesQuantity(allowed, senha, necCaract){
        while (senha.length < necCaract){
            let arrayIndex = Math.floor(Math.random() * allowed.length)
            let stringIndex = Math.floor(Math.random() * allowed[arrayIndex].length)
            senha = `${senha}${allowed[arrayIndex][stringIndex]}`
        }

        return senha
    }

    static mostraSenha(senha){
        document.querySelector('.novaSenha').innerHTML = `${senha}`
    }
}

document.querySelector('.gerar-senha').addEventListener('click', () => {
    GeraSenha.geraSenha()
})