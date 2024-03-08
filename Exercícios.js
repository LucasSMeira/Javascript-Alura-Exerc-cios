const string = "fax";
const num = 1;
const boolean = false;

console.log(typeof string);
console.log(typeof num);
console.log(typeof boolean);

const primeiroNome = "Lucas";
const ultimoNome = "Meira";
const nomeCompleto = primeiroNome+ultimoNome;
const templateString = `Primeiro nome "${primeiroNome}" e ultimo nome "${ultimoNome}"`;

console.log(nomeCompleto);
console.log(templateString);

const palavra = "aleatoria";
const numero = 37;
const stringAleatoria = `Sua palavra do dia é "${palavra}" e número da sorte "${numero}"`;
console.log(stringAleatoria);

let variavel = 999;
console.log(variavel);
variavel = "string";
console.log(variavel);

var teste = 64;
console.log(teste);
if(boolean  == false){
    var testes = "string";
    console.log(teste);
    console.log(testes);
}

console.log(testes);
/*  Segunda parte do Exercício 5 , ocorre um erro ao tentar acessar a variavel de fora do bloco dentro dele 

let testeDois = 32;
console.log(testeDois);
if(boolean  == false){
    let testesDois = "mudou";
    console.log(testeDois);
    console.log(testesDois);
}

console.log(testesDois);

*/

const estaChovendo = false;

    if(estaChovendo == true){
        const texto = "Levar Guarda-Chuva porque está chovendo , cuidado !!!";
        console.log(texto);
    }
    else{
        texto = "Não está chovendo";
        console.log(texto);
    }