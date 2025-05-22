import React, { useState } from 'react';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario onAgregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <Listado citas={citas} onEliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;