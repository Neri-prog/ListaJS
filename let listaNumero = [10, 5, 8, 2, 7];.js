lista = [10, 77, 1, 4, 20, 5];
listaOrdenada = [];
let menorNumero = lista[0]; 
let maiorNumero = lista[0];

for (let index = 0; index < lista.length; index++) {
    if (lista[index] < menorNumero) {
        menorNumero = lista[index];
    }
    if (lista[index] > maiorNumero) {
        maiorNumero = lista[index];
    }
}
while (lista.length > 0) {
    let indiceMenor = 0;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < lista[indiceMenor]) {
            indiceMenor = i;
        }
    }
    listaOrdenada.push(lista[indiceMenor]);
    lista.splice(indiceMenor, 1);
}

console.log("Lista Ordenada:", listaOrdenada);
console.log("Menor Número:", menorNumero);
console.log("Maior Número:", maiorNumero);