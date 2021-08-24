import React from 'react';
import './Create.scss';

const Create = () => {
  return (
    <div className="create">
      <div className="create-container">
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="project">Project</label>
        <br />
        <input type="text" />
        <div className="create-buttons">
          <button className="create-btn">Create</button>
          <button className="create-cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
