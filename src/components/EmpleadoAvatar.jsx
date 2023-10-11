import React from 'react';

const EmpleadoAvatar = ({ pic, fullName, title, department }) => {
  return (
    <div className="empleado-card">
      <img src={pic} className="empleado-img" alt={fullName} />
      <div>
        <h5 className="empleado-name">{fullName}</h5>
        <h6 className="empleado-title">{title}</h6>
        <p className="empleado-department">{department}</p>
      </div>
    </div>
  );
};

export default EmpleadoAvatar;