/*
    71. Component Add Category

        Se agrega un input, para escribir informacion en el 

        Se agrega el evento onSubmit en el form sin hacer el refresh de toda la pagina

        Se agregaron eventos para el manejo de la informacion del input
*/

import React, {useState} from 'react'

const AddCategory = props => {

    //La caja de texto debe tener un estado para saber lo que la persona esta escribiendo
    //inputValue por default tiene el valor de 'Hola Mundo'
    const [inputValue, setInputValue] = useState('Escribe aqui tu consulta...');

    //Funcion que obtienen el valor del evento que lo invoca, en este caso seria el evento del input text
    const handleInputChange = (e) => { 
        //Obtienen el valor tecleado
        //console.log(e.target.value);

        //Para que el input se actualice con el valor del teclado se tiene que usar el segundo 
        //parametro del hook setInputValue quedando de la siguiente manera
        setInputValue(e.target.value);
    }

    //Borra el contenido del input cuando tiene el foco
    const handleFocusValue = (e) => { 
        setInputValue('');
    }

    const handleSubmit = (e) => {
        // preventDefault es para que no se refresque toda la pagina.
        // De esta manera se evita este comportamiento antiguo en las paginas
        e.preventDefault();  
        console.log('Dio clic en el Enter')
    }


    /*  El fragment es usado para agrupar elementos html, cuando se usa el form ya no es necesario
        ocupar fragment por que el form tambien agrupa.

        Se agrega el form para agregar el evento del enter.
    */
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange } 
                onFocus={ handleFocusValue }/>
        </form>
    )
}

export default AddCategory
