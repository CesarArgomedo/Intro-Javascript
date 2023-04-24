
//tarea:
//desestructuracion de objetos


const producto = {
    
    nombre:'Margarita',
    marca: 'Sayon',
    presentacion: 'Paquete',
    unidades: 6,
    valor_nutricional:{
        azucar_por_porcion:'10g',
        calorias_por_porcion:'220Kcal',
        carbohidratos_por_porcion:'34g'

    }
}


const crearProducto = ({nombre,marca,presentacion,unidades,valor_nutricional}) => (
        {id:1,
        nombre,
        marca,
        presentacion,
        unidades,
        valor_nutricional
    }
)

console.log(crearProducto(producto));

const crearValorNutrional =({azucar_por_porcion,calorias_por_porcion,carbohidratos_por_porcion}) => (
    {

    id:1,
    azucar_por_porcion,
    calorias_por_porcion,
    carbohidratos_por_porcion

})

console.log(crearValorNutrional(producto.valor_nutricional));

//desestructuracion de arreglos

const devolverArreglo = ([Asus,EVGA,Gigabyte,PNY,Msi,Zotac]) => {
    return [Asus,EVGA,Gigabyte,PNY,Msi,Zotac];
}

const [Asus,EVGA,Gigabyte,...resto] = devolverArreglo(['No hay stock','TARJETA DE VIDEO EVGA GEFORCE 210 ','TARJETA DE VIDEO GIGABYTE GEFORCE GT730 2GB ','No hay stock','TARJETA DE VIDEO MSI GT710 1GB DDR3N GT 710 ','No hay stock']);

console.log(Asus);
console.log(EVGA);
console.log(Gigabyte);
console.log(resto);

//funciones

const tarjetas = [{
    marca:'Asus',
    stock:"No hay stock"
},{
    marca:'EVGA',
    stock:"TARJETA DE VIDEO EVGA GEFORCE 210"
},{
    marca:'Gigabyte',
    stock:"TARJETA DE VIDEO GIGABYTE GEFORCE GT730 2GB"
},{
    marca:'PNY',
    stock:"No hay stock"
},{
    marca:'Msi',
    stock:"TARJETA DE VIDEO MSI GT710 1GB DDR3N GT 710 "
},{
    marca:'Zotac',
    stock:"No hay stock"
}];

const hayStock = tarjetas.some((tarjeta)=> tarjeta.stock !='No hay stock');

console.log(hayStock);

// promesas e import export

import { obtenerProductosmarca } from '../src/tarea/import_export2.js'

const obtenerProductoByMarcaAsync = (marca) => {

    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            const producto = obtenerProductosmarca(marca);
            if(producto) {
                resolve(producto)
            }else{
                reject('dicha marca no existe')
            }
        },1000)
    })
}

obtenerProductoByMarcaAsync('pepsi').then(
    m => {
        console.log(`el producto es: ${m.descripcion} , la marca es : ${m.marca} , el stock es: ${m.stock} y la unidad en la que se vende es : ${m.unidad}`)
    }

).catch(console.log);

obtenerProductoByMarcaAsync('cocacola').then(
    m => {
        console.log(`el producto es: ${m.descripcion} , la marca es : ${m.marca} , el stock es: ${m.stock} y la unidad en la que se vende es : ${m.unidad}`)
    }

).catch(console.log);

obtenerProductoByMarcaAsync('pilot').then(
    m => {
        console.log(`el producto es: ${m.descripcion} , la marca es : ${m.marca} , el stock es: ${m.stock} y la unidad en la que se vende es : ${m.unidad}`)
    }

).catch(console.log);


// api_fecth

const apiKey ='kggHJl86Ek6lIgPKxh0BkN095pJYH8Cw';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`).
then(response => response.json()).
then(({data}) =>{

    const {webp} = data.images.fixed_height_small

    const imagen = document.createElement('img')

    imagen.src = webp;

    document.body.append(imagen);
})