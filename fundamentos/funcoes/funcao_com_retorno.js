function sempreRetornaUm() {
    return 1;
}

function textoOuNUmero(retornaTexto) {
   // return retornaTexto ? 'sou um texto!' : 123;
    if (retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
}


let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNUmero(true);
console.log(texto);

console.log(textoOuNUmero(false));
