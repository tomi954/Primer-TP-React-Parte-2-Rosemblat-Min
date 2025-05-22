import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ onAgregarCita }) => {
 
  const [error, setError] = useState(false);

  const tomarValores = (e) => {
    e.preventDefault();
    
    const mascota = e.target.mascota.value;
    const propietario = e.target.propietario.value;
    const fecha = e.target.fecha.value;
    const hora = e.target.hora.value;
    const sintomas = e.target.sintomas.value;

    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      setError(true);
      return;
    }

    setError(false);

    const nuevaCita = {
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    };

    onAgregarCita(nuevaCita);

    e.target.reset();
  };

  return (
    <div>
      <h2>Crear mi Cita</h2>
      {error && <div className="error">Todos los campos son obligatorios</div>}
      <form onSubmit={tomarValores}>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota" 
          className="u-full-width" 
          placeholder="Nombre Mascota" 
        />
        
        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario" 
          className="u-full-width" 
          placeholder="Nombre dueño de la mascota" 
        />
        
        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha" 
          className="u-full-width" 
        />
        
        <label>Hora</label>
        <input 
          type="time" 
          name="hora" 
          className="u-full-width" 
        />
        
        <label>Síntomas</label>
        <textarea 
          name="sintomas" 
          className="u-full-width"
        ></textarea>
        
        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;