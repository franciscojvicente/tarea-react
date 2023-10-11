import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';
import empleados from '../data/data'; // Importa los datos desde data.js

const EmpleadoList = () => {
  return (
    <div className="empleado-list-container">
      <h1 className="empleado-list-title">Lista de Empleados</h1>
      <div className="empleado-list-row">
        {empleados.map((empleado) => (
          <EmpleadoAvatar
            key={empleado.id}
            pic={empleado.pic}
            fullName={empleado.fullName}
            title={empleado.title}
            department={empleado.department}
          />
        ))}
      </div>
    </div>
  );
};

export default EmpleadoList;