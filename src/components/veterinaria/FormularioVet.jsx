import React, { useState, useEffect } from "react";

function FormularioVet({ onAddCita }) {
  const [formData, setFormData] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [isDataComplete, setIsDataComplete] = useState(true);

  useEffect(() => {
    if (
      formData.mascota &&
      formData.dueño &&
      formData.fecha &&
      formData.hora &&
      formData.sintomas
    ) {
      setIsDataComplete(true);
    } else {
      setIsDataComplete(false);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDataComplete) {
      onAddCita(formData);
      setFormData({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });
    } else {
      alert("Completa todos los campos.");
    }
  };

  return (
    <div className="formulario-vet">
      <h2>Registrar Cita</h2>
      <form onSubmit={handleSubmit} className="cita-form">
    <div className="form-group">
      <label htmlFor="mascota">Nombre de Mascota:</label>
      <input
        type="text"
        id="mascota"
        name="mascota"
        value={formData.mascota}
        onChange={handleInputChange}
        className="input-field"
        placeholder="Nombre de la mascota"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="dueño">Nombre del Dueño:</label>
      <input
        type="text"
        id="dueño"
        name="dueño"
        value={formData.dueño}
        onChange={handleInputChange}
        className="input-field"
        placeholder="Nombre del dueño"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="fecha">Fecha:</label>
      <input
        type="text"
        id="fecha"
        name="fecha"
        value={formData.fecha}
        onChange={handleInputChange}
        className="input-field"
        placeholder="Fecha"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="hora">Hora:</label>
      <input
        type="text"
        id="hora"
        name="hora"
        value={formData.hora}
        onChange={handleInputChange}
        className="input-field"
        placeholder="Hora"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="sintomas">Síntomas:</label>
      <input
      type="text"
        id="sintomas"
        name="sintomas"
        value={formData.sintomas}
        onChange={handleInputChange}
        className="input-field"
        placeholder="Síntomas"
        required
      />
    </div>
    <button type="submit" disabled={!isDataComplete} className="submit-button">
      Agregar Nueva Cita
    </button>
  </form>
    </div>
  );
}

export default FormularioVet;