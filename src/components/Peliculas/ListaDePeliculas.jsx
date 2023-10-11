import React, { useState, useEffect } from "react";
import Peliculas from "./Peliculas";

function ListaDePeliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const storedPeliculas = localStorage.getItem("peliculas");
    if (storedPeliculas) {
      setPeliculas(JSON.parse(storedPeliculas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const handleAddPeliculas = (newPeliculas) => {
    setPeliculas([...peliculas, newPeliculas]);
  };

  const handleDeletePeliculas = (index) => {
    const updatedPeliculas = peliculas.filter((_, i) => i !== index);
    setPeliculas(updatedPeliculas);
  };

  return (
    <div className="App">
      <h1 className="titulo">Alta de Peliculas</h1>
      <Peliculas onAddCita={handleAddPeliculas} />
      <div className="citas">
  <h2>Peliculas dadas de alta </h2>
  {peliculas.length === 0 ? (
    <p className="no-citas">No hay películas dadas de alta.</p>
  ) : (
    <ul className="citas-list">
      {peliculas.map((pelicula, index) => (
        <li key={index} className="cita-item">
          <div className="cita-details">
            <p>
              <strong>Nombre:</strong> {pelicula.nombre}
            </p>
            <p>
              <strong>Descripción:</strong> {pelicula.descripcion}
            </p>
            <p>
              <strong>Genero:</strong> {pelicula.genero}
            </p>
          </div>
          <button className="eliminar-button" onClick={() => handleDeletePeliculas(index)}>
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

export default ListaDePeliculas;