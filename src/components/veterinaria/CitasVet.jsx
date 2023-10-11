import React, { useState, useEffect } from "react";
import FormularioVet from "./FormularioVet";

function CitasVet() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const storedCitas = localStorage.getItem("citas");
    if (storedCitas) {
      setCitas(JSON.parse(storedCitas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const handleAddCita = (newCita) => {
    setCitas([...citas, newCita]);
  };

  const handleDeleteCita = (index) => {
    const updatedCitas = citas.filter((_, i) => i !== index);
    setCitas(updatedCitas);
  };

  return (
    <div className="App">
      <h1 className="titulo">Administrador de Citas Veterinarias</h1>
      <FormularioVet onAddCita={handleAddCita} />
      <div className="citas">
  <h2>Citas Agendadas</h2>
  {citas.length === 0 ? (
    <p className="no-citas">No hay citas agendadas.</p>
  ) : (
    <ul className="citas-list">
      {citas.map((cita, index) => (
        <li key={index} className="cita-item">
          <div className="cita-details">
            <p>
              <strong>Mascota:</strong> {cita.mascota}
            </p>
            <p>
              <strong>Dueño:</strong> {cita.dueño}
            </p>
            <p>
              <strong>Fecha:</strong> {cita.fecha}
            </p>
            <p>
              <strong>Hora:</strong> {cita.hora}
            </p>
            <p>
              <strong>Síntomas:</strong> {cita.sintomas}
            </p>
          </div>
          <button className="eliminar-button" onClick={() => handleDeleteCita(index)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )}
</div>
    </div>
  );
}

export default CitasVet;