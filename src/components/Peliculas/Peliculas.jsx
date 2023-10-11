import React, { useState, useEffect } from "react";

function Peliculas({ onAddCita }) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });

  const [isDataComplete, setIsDataComplete] = useState(true);

  useEffect(() => {
    if (formData.nombre && formData.descripcion && formData.genero) {
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
        nombre: "",
        descripcion: "",
        genero: "",
      });
    } else {
      alert("Completa todos los campos.");
    }
  };

  return (
    <div className="formulario-vet">
      <form onSubmit={handleSubmit} className="cita-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre de la película:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Nombre de la película"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripcion:</label>
          <textarea
            type="text"
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Descripción"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Género:</label>
          <select
            name="genero"
            id="genero"
            value={formData.fecha}
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!isDataComplete}
          className="submit-button"
        >
          Agregar Nueva Película
        </button>
      </form>
    </div>
  );
}

export default Peliculas;