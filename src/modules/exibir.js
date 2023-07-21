// Importando a senha gerada
import { geraSenha } from "./geradores";

export function exibir() {

    // Selecionando os elementos do DOM
    const qtdCarac = document.querySelector('.quantidade-caracteres');
    const maiusculos = document.querySelector('.add-maiusculas');
    const minusculos = document.querySelector('.add-minusculas');
    const numeros = document.querySelector('.add-numeros');
    const simbolos = document.querySelector('.add-simbolos');
    const btnGerar = document.querySelector('.gerar-senha');
    const saida = document.querySelector('.senha-gerada');

    btnGerar.addEventListener('click', () => {
        saida.innerHTML = geraSenha(Number(qtdCarac.value), maiusculos.checked, minusculos.checked, numeros.checked, simbolos.checked);
    });


}

