import React from 'react';
import Create from '../Create/Create';
import './AddTimer.scss';

const AddTimer = (props) => {
  const { view, show } = props;
  return (
    <>
      {view ? <Create /> : ''}
      <div className="add-timer">
        <button className="add-timer-btn">
          <i
            className="far fa-plus-square add-timer-btn"
            onClick={() => show()}></i>
        </button>
      </div>
    </>
  );
};

export default AddTimer;
