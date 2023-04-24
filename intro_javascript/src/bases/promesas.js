import { obtenerHeroesById } from "./bases/import_export.js"
/* console.log("Inicio");

new Promise((resolve, reject) => {


    resolve('cuerpo de la promesa resuelto')
}).then(console.log);

console.log("Fin"); */


const obtenerHeroesByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            const heroe = obtenerHeroesById(id);
            if(heroe) {
                resolve(heroe)
            }else{
                reject('El heroe con dicho id no existe')
            }
        },1000)
    })
}

obtenerHeroesByIdAsync(2).then(
    h => {
        console.log(`El heroe se llama: ${h.name}`)
    }

).catch(console.log);

obtenerHeroesByIdAsync(3).then(
    h => {
        console.log(`El heroe se llama: ${h.name}`)
    }

).catch(console.log);