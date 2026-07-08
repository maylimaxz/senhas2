const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){ 
   amanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}21

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
    let senha = '';
 for (let i = 0; i < tamanhoSenha;i++) {
     let numeroAleatorio = Math.random()*letrasMaiusculas.length;
     numeroAleatorio = Math.floor(numeroAleatorio);
     senha = senha + letrasMaiusculas[numeroAleatorio]
     console.log(letrasMaiusculas[numeroAleatorio]);
 }
}

campoSenha.value = letrasMaiusculas;