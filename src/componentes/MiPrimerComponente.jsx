import React from 'react'

function MiPrimerComponente(props) {
    return (
        <div>
            <h1>Mi primer componente</h1>
            <p>Nombre: {props.nombre}</p>
            <p>Apellidos: {props.apellidos}</p>
            <p>Edad: {props.edad}</p>
        </div>
    )
}
export default MiPrimerComponente