


const persona={
    nombre:'Jose',
    edad: 50,
    apodo: 'Pepe'
}

//console.log(persona);
console.log(persona.apodo);

const {nombre,edad,apodo,dni='00000000',sexo='M'} = persona;

//console.log(edad);
//console.log(dni);

const crearPersona = ({nombre,edad,apodo,dni='00000000'}) => (
        {id:1,
        nombre,
        edad,
        apodo,
        dni
    }
)

console.log(crearPersona(persona));
