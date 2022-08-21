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