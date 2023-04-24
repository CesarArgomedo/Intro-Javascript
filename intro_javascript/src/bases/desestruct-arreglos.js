

const frutas= ['manzana', 'platano','naranja','sandia'];
//const [mz , pl , nj , sd , fr = 'No tiene fresa'] = frutas
//const [mz , pl,,sd] = frutas

//... explit para dividir arreglos

const [x , y , ...resto ] = frutas;
console.log(x);
console.log(y);
console.log(resto);

const devolverArreglo = ([marca,numRuedas]) => {
    return [marca,numRuedas];
}

const [marca,numRuedas] = devolverArreglo(['Audi',5]);

console.log(marca,numRuedas);