//1
/* Faça as operações básicas com base nos números 2 e 4. Ao final de cada operação imprima na tela no seguinte formato:
Soma: 2 + 4 = x
Subtração: 2 - 4 =  x
Divisão: 2 / 4 = x
Multiplicaçãp: 2 * 4 = x */

function operacoes(number1, number2) {
  let resultado = {
    soma: number1 + number2,
    subtracao: number1 - number2,
    divisao: number1 / number2,
    multiplicacao: number1 * number2,
  };
  return resultado;
}
operacoes();

console.log(operacoes(2, 4));


// forma resolvida por Gus

let num1 = 2;
let num2 = 4;

console.log('Soma: 2 + 4 = ' + (num1 + num2));
console.log('Subtração: 2 - 4 = ' + (num1 - num2));
console.log('Divisão: 2 / 4 = ' + (num1 / num2));
console.log('Multiplicação: 2 * 4 = ' + (num1 * num2));