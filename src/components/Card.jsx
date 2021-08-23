import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <span>Crear Nuevos Proyectos</span>
        <span>Make it Real</span>
        <span>00:21:17</span>
        <div className="buttons">
          <button>Gargabe</button>
          <button>Edit</button>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
