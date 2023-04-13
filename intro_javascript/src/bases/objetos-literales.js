const persona = {
    'edad':25,
    'peso':50,
    'nombres':'Carlos',
    'apellidos':'Rodriguez'
}

const persona2 = {...persona};

persona2.apellidos = 'Davila';

console.log(persona.apellidos);

console.log(persona2.apellidos);





