// Número de caracteres
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

// Botões
const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// Campo da senha
const campoSenha = document.querySelector('#campo-senha');

// Letras disponíveis
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Gera a primeira senha
geraSenha();

// Diminuir tamanho
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }

    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// Aumentar tamanho
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }

    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// Gerar senha
function geraSenha() {

    let senha = '';

    for (let i = 0; i < tamanhoSenha; i++) {

        let numeroAleatorio = Math.floor(Math.random() * letrasMaiusculas.length);

        senha += letrasMaiusculas[numeroAleatorio];
    }

    campoSenha.value = senha;
}

