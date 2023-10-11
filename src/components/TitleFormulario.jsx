import React, { useState } from 'react';
import Formulario from './Formulario.jsx';

function TitleFormulario(){
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
      });
    
      const [isDataComplete, setIsDataComplete] = useState(true);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (
          formData.nombre &&
          formData.apellido &&
          formData.dni &&
          formData.email
        ) {
          alert('Datos enviados');
          setIsDataComplete(true);
        } else {
          alert('Completar todos los datos');
          setIsDataComplete(false);
        }
      };
    
return (
    <div className="App">
      <div className="titulo">Formulario</div>
      <Formulario
        formData={formData}
        isDataComplete={isDataComplete}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default TitleFormulario;