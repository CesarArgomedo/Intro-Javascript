
/* 
import {owners} from "./data/heroes.js";

const propMarcas = owners;

console.log(propMarcas);
 */

import superHeroes from '../src/data/heroes.js';

/* const obtenerHeroeById = (id) => {
    return superHeroes.find(heroe => heroe.id==id);
}

console.log(obtenerHeroeById(2)); */

export const obtenerHeroesById = (id) => superHeroes.find( heroe => heroe.id === id);
