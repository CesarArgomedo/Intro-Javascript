function saludar(nombre)
{
    return `Hola ${nombre}`;
}

//console.log(saludar('Carlos'));

//let saludar = 'hola';

//console.log(saludar);


/* const saludar2 = (nombre2) => 
{
    return `Hola ${nombre2}`;
} */

const saludar2 = (nombre2) => `Hola ${nombre2}`;

//saludar2 = true;

//console.log(saludar2);

console.log(saludar2('Jose'));

/* const getUser =() =>
{
    return { id: "12345",usuario:"juan12"};
} */

const getUser =() =>({id: "12345",usuario:"juan12"});

console.log(getUser());

const gatos = [{
    id:1,
    nombre:"Garfield"
},{
    id:2,
    nombre: "Pelusa"
}];
//buscar el que tiene id 1

const existe = gatos.some((gato)=> gato.id ===1);

console.log(existe);

//console.log(gatos);