/*
    79. useFetchGifs - obtener imágenes y bandera de carga
    
    No se hizo nada
*/


/*
    Esta funcion cmo tal, no regresa los Gifs, regresa una promesa que resuelve la 
    coleccion de las imagenes.
*/
 export  const getGifs = async( category ) => {

    //const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=20&api_key=qbylOKiqx31WgKZXbW7vaHtVD1hI7jmf';
    //Cambiar las comillas simples por Ballticks
    //En la url setter el parametro de busqueda, para que sea dinamica la consulta
    //Ponemos encodeURI para convertir espacios o caracteres especiales en caracteres
    //validos para html
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=qbylOKiqx31WgKZXbW7vaHtVD1hI7jmf`;
    const resp = await fetch(url);
    const { data } = await resp.json();
       
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    } )
    //console.log(gifs);
    //setImage(gifs)
    return gifs;

}