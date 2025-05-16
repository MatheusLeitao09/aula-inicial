/* 5 - Calculadora de pontos em jogo.
 Desenvolva um programa que calcule os pontos ganhos em uma fase de um jogo considerando: pontos base (100), nível de dificuldade (1 a 5, multiplicador dos pontos), se completou em tempo recorde (completouEmTempoRecorde = true - dobra os pontos) e se coletou todos os itens ( = true - adiciona 150 pontos).

*/

const pontosBase = 100;
const nivelDificuldade = 5;
const completouEmTempoRecorde = true;
const coletouTodosItens = true;

// Calculando os pontos totais inicialmente
let pontosTotais = pontosBase * nivelDificuldade;
console.log(`Pontos Totais: ${pontosTotais}`);

// Verificar bônus de  recorde
if (completouEmTempoRecorde) {
pontosTotais = pontosTotais * 2;
console.log(`Parabéns, parceiro! Você bateu o recorde e dobrou os seus pontos! Pontuação: ${pontosTotais}`);
  
} 

// Verificar coleta de todos os itens
if (coletouTodosItens) {
    pontosTotais = pontosTotais + 150;
    console.log(`Parabéns, parceiro! Você coletou todos os itens da fase! Pontuação: ${pontosTotais}`)
    console.log(`Sua pontuação final foi de ${pontosTotais}`);
    
}

if (pontosTotais > 1000) {
    console.log(`Parabéns parceiro! Platinou o jogo`);
    
}