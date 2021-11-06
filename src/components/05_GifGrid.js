/*
   74. useEffect
            
   Este hook normalmente es usado para la inicialización de variables, llamadas a APIs o para 
   limpiar un componente antes de desmontarlo del DOM.

   Es el equivalente funcional a componentDidMount, componentDidUpdate, y componentWillUnmount en 
   los componentes de clase.

   La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto 
   cuando el componente se renderiza por primera vez, y después cada vez que el componente se 
   actualice. Ejemplo

        useEffect( () => {
            getGifs();
        })

    También es posible especificar cuándo se debe ejecutar esta función con un segundo argumento 
    opcional que le podemos pasar.
    Para ello basta con añadir un segundo parámetro a la función, con la lista de los elementos de
    los que depende. Si el valor de uno de estos elementos que hemos indicado cambia, la función se 
    va a ejecutar con la siguiente actualización. Ejemplo:

        useEffect( () => {
            getGifs();
        }, [count])

    Otra posibilidad que nos permite este hook es la de especificar que se ejecute sólo una vez. 
    Esto resulta muy útil si sólo queremos hacer una llamada AJAX para rellenar el estado de la 
    aplicación.

        useEffect( () => {
            getGifs();
        }, [])    
*/


import React, {useState, useEffect} from 'react'

const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    //Para que no se este invocando de manera ciclica todos los elementos de const GifGrid
    //Hay que mandar el sugundo parametro el cual es una lista de dependencias
    //Lo que hace la siguiente estructura es ejecutar el getGifs() solo cuando este
    //componente es renderizado por primera vez
    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=qbylOKiqx31WgKZXbW7vaHtVD1hI7jmf';
        const resp = await fetch(url);
        const { data } = await resp.json(); //Se desestructura la respuesta y solo se obtiene el campo data
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                image: img.images.downsized_medium.url
            }
        } )

        console.log(gifs);
    }

    /*
        Cada vez que se da clic en el boton se invoca el metodo getGifs() de la linea de
        abajo, y actualiza el valor del <h3>{ count }</h3>, pero al mismo tiempo vuelve 
        a consultar toda lo que esta dentro de const getGifs , incluyendo los 10
        gifs cada que se da clic en el boton. Lo cual no es optimo. 
        La solucion a lo anterior es el UseEfect
        UseEfect ejecuta cirto codigo de manera condicional, se agrega en el import de 
        react.
    */
    //getGifs();

    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={ () => setCount (count+1)} value="Count"></button>
        </div>
    )
}


export default GifGrid
