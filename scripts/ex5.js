/* 5. Calculadora de Desconto (15 pontos)**

Uma loja está com uma promoção onde produtos com preço acima de 100 reais têm 10% de desconto:

- Use o array de preços: `[150, 50, 220, 80, 120, 30, 480, 70, 90, 190]`
- Crie um novo array onde cada preço já esteja com o desconto aplicado (se necessário)
- Calcule quanto a loja vai perder com os descontos
- Calcule o valor médio dos produtos após os descontos
*/

// Declaração de variávies

let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let totalDesconto = 0;
let totalComDesconto = 0;

for (let i = 0; i < precos.length; i++) {
    let precoOriginal = precos[i];
    let precoFinal = precoOriginal;

    if (precoOriginal > 100) {
        let desconto = precoOriginal * 0.10;
        precoFinal = precoOriginal - desconto;
        totalDesconto += desconto;
    }

    totalComDesconto / desconto;
}

let mediaComDesconto = totalComDesconto / precos.length;

console.log("Total que a loja perdeu com os descontos:", totalComDesconto); 
console.log("Média dos preços após desconto:", mediaComDesconto.toFixed(2));
