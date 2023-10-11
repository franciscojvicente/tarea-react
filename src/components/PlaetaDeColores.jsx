import React, { useState, useEffect } from 'react';
import Colores from './Colores';

function PaletaDeColores() {
  const [color, setColor] = useState('');
  const [savedColors, setSavedColors] = useState(
    JSON.parse(localStorage.getItem('colors')) || []
  );

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSaveColor = () => {
    if (color.trim() === '') {
      return;
    }

    const newColors = [...savedColors, color];
    setSavedColors(newColors);
    localStorage.setItem('colors', JSON.stringify(newColors));
    setColor('');
  };

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(savedColors));
  }, [savedColors]);

  const handleDeleteColor = (index) => {
    const updatedColors = [...savedColors];
    updatedColors.splice(index, 1);
    setSavedColors(updatedColors);
    localStorage.setItem('colors', JSON.stringify(updatedColors));
  };

  return (
    <>
      <div className='todoContainer'>
        <h1>Administrar Colores</h1>
        <input
          type="text"
          placeholder="Ingresar un color ej Blue"
          value={color}
          onChange={handleColorChange}
          className="todoInput"
        />
        <button className="buttonCreate" onClick={handleSaveColor}>Guardar</button>
      </div>
      <Colores
             savedColors={savedColors}
             onDelete={handleDeleteColor}
      />
    </>
  );
}

export default PaletaDeColores;