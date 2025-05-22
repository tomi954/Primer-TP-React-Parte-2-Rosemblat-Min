import './Cita.css';

const Cita = ({ mascota, propietario, fecha, hora, sintomas, index, onEliminar }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button 
        className="button eliminar u-full-width"
        onClick={() => onEliminar(index)}
      >
        Eliminar ×
      </button>
    </div>
  );
};

export default Cita;