import React from 'react';
import './Listado.css';
import Cita from './Cita';

const Listado = ({ citas, onEliminarCita }) => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <Cita 
          key={index}
          index={index}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          onEliminar={onEliminarCita}
        />
      ))}
    </div>
  );
};

export default Listado;