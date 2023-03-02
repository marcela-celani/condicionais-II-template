// CONDICIONAIS II - PRÁTICA GUIADA 

// Exercício 1
// utilizar ifs aninhados ou não para verificar dependente de cartão
// sintaxe - if() { } else { }
const idadeDependente = Number(prompt('Qual é a idade da pessoa dependente?'))

// 1) utilizando if aninhado
if(idadeDependente >= 13) {
    if(idadeDependente < 18) {
        console.log('Cartão de crédito para Dependente APROVADO!')
    } else {
        console.log('Consulte outras opções do Labank.')
    }
} else {
    console.log('Consulte outras opções do Labank.')
}

// 2) utilizando operador lógico
if (idade >= 13 && idade < 18) {
    console.log('Cartão de crédito para Dependente APROVADO!')
} else {
    console.log('Consulte outras opções do Labank.')
}

// Exercício 2
// verificar se a idade é exatamente 13 anos usando if ternário.
// sintaxe - condição ? expressaoTrue : expressaoFalse

idadeDependente1 === 13 ? console.log('A idade do dependente é 13 e já pode ter um cartão') : console.log('Verifique as opções do Labank.')

// Exercício 3
// utilizando switch case. Sintaxe - switch() 
const tipoCartao = Number(prompt('Digite o número correspondente ao tipo de cartão escolhido.'))

switch (tipoCartao) {
    case 1:
        console.log('Cartão de crédito FÁCIL')
        break
    case 2:
        console.log('Cartão de crédito BLACK')
        break
    case 3:
        console.log('Cartão de crédito PLATINUM')
        break
    case 4:
        console.log('Cartão de crédito MASTER GOLD')
        break 
    default:
        console.log('Escolha uma das opções acima.')
        break 
}

// EXERCICIO DE FIXAÇÃO
// Exercicio 1
const verificaPar = Number(prompt('Digite um numero: '))

// com ifs aninhados

if (verificaPar % 2 === 0) {
    if(verificaPar % 3 === 0){
        console.log('O numero é divisível por 2 e por 3')
    } else {
        console.log('O numero é divisível por 2 mas não é divisivel por 3')
    }
} else {
    if(verificaPar % 3 === 0){
        console.log('O numero não é divisível por 2 mas é por 3')
    } else {
        console.log('O numero não é divisível por 2 nem por 3')
    }
} 

// com operadores lógicos
const verificaPar = Number(prompt('Digite um numero: '))
if (verificaPar % 2 === 0 && verificaPar % 3 === 0) {
    console.log('O numero é divisível por 2 e por 3')
    //verificaPar === 30 ? console.log('UFA, ACERTEI!') : console.log('Não foi dessa vez :(')

    switch (verificaPar) {
        case 6: 
            console.log('6 é uma criança feliz') 
            break
        case 12: 
            console.log('12 é uma idade dificil') 
            break
        case 18: 
            console.log('18 é obrigatório votar') 
            break
        case 24: 
            console.log('24 é uma boa idade pra curtir') 
            break
        case 30: 
            console.log('30 é minha idade, socorro.') 
            break
        default: 
            console.log('O numero é maior que 30 ou menor que 6!')
    }

} else if (verificaPar % 2 === 0 && verificaPar % 3 !== 0) {
    console.log('O numero é divisível por 2 mas não é divisivel por 3')
} else if (verificaPar % 2 !== 0 && verificaPar % 3 === 0) {
    console.log('O numero não é divisível por 2 mas é por 3')
} else {
    console.log('O numero não é divisível por 2 nem por 3')
}