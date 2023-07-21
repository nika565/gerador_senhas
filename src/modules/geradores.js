// Função que retorna um número aleatório com valor mínimo e máximo 
function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Caracteres que vão formar a senha
const alfaMinusculo = 'abcdefghijklmnopqrstuvwxyz';
const alfaMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerosSenha = '1234567890';
const simbolosSenha = '!@#$%&*()-_+={}[]^~:;|?';

export function geraSenha(qtd, maiusculo, minusculo, numeros, simbolos){

    // Array vazio para receber a senha gerada
    let arrSenha = [];

    // Loop de verificação. Se as opções estiver "true" será adicionado um carcatere aleatório
    for(let i = 0; i < qtd; i++){

        if(maiusculo === true){
            arrSenha.push(alfaMaiusculo[rand(0, alfaMaiusculo.length)]);
        }

        if(minusculo === true){
            arrSenha.push(alfaMinusculo[rand(0, alfaMinusculo.length)]);
        }


        if(numeros === true){
            arrSenha.push(numerosSenha[rand(0, numerosSenha.length)]);
        }


        if(simbolos === true){
            arrSenha.push(simbolosSenha[rand(0, simbolosSenha.length)]);  
        }


    }

    // retornando a senha formatada
    return arrSenha.join('').slice(0, qtd);

}


