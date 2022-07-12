let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - vai pro shopping? ';
resultadoE +=  temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

// EXEMPLO DE ^ *OU EXCLUSIVO* -> console.log(true ^ false) resultado em binario.
// PARA VALOR TRUE AND FALSE Usar "!=" menos comun

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);

//operador de negação
console.log('não verdadeiro: ' + !true)
console.log('não falso: ' + !false)