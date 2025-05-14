import React from 'react';
import './Listado.css';
import Cita from './Cita';
<link rel="stylesheet" href="Listado.css" />

function Listado() 
{
    return (
            <div className="one-half column">
                <h2>Crear mi Cita</h2>
                <Cita/>
            </div>
    );
}
export default Listado