

const apiKey ='kggHJl86Ek6lIgPKxh0BkN095pJYH8Cw';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`).
then(response => response.json()).
then(({data}) =>{

    const {url} = data.images.original

    const imagen = document.createElement('img')

    imagen.src = url;

    document.body.append(imagen);
})

//axios