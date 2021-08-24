import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="title">Crear Nuevos Proyectos</div>
        <div className="sub-title">Make it Real</div>
        <div className="timer">00:21:17</div>
        <div className="buttons">
          <button className="trash">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button className="edit">
            <i class="far fa-edit"></i>
          </button>
        </div>
        <button className="start-stop">Start</button>
      </div>
    </div>
  );
};

export default Card;
