import productos_marca from '../tarea/productos.js';

export const obtenerProductosmarca = (marca) => productos_marca.find( productos => productos.marca === marca);