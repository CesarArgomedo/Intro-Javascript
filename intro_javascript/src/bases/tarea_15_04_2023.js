//tarea

const impares = [1,33,27,5,3]

//ordenar de mayor a menor -- el metodo sort compara el primer digito y despues el segundo, si lo uso asi saldria 1,27,3,33,5 entonces genero la siguiente funcion

function comparar(a,b){
    // -1 a se situa un indice menor a b
    // 0 no hay cambios
    // 1, b se situa un indice menor a a
    return a - b; 
}
console.log(impares.sort(comparar));

//añadir 2 numeros impares -- necesito uno o mas de un parametro 

impares.push('13','17');
console.log(impares);

//encontrar si existe un numero-- este metodo se puede usar tanto con funciones o colcando la condicion en una variable como una funcion flecha

const condicion = valor => valor % 2 == 0;

// esta condicion revisa si hay algun par, deberia salir false

console.log(impares.some(condicion)) ;

const condicion2 = valor => valor % 2 != 0;

// esta condicion revisa si hay algun impar, deberia salir true

console.log(impares.some(condicion2)) ;




