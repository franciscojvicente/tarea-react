import React from 'react';

const Colores = ({ savedColors, onDelete,}) => {
  return (
    <div className="color-container">
      <div className="color-columns">
        {savedColors.map((c, index) => (
          <div key={index} className="color-box-container">
            <div className="color-box" style={{ backgroundColor: c }}></div>
            <div className="color-name">{c}</div>
            <button
              className="buttonDeleteColores"
              onClick={() => onDelete(index)} // Usa la función onDelete para eliminar el color
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colores;