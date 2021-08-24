import React, { useState } from 'react';
import './Create.scss';

const Create = (props) => {
  const [data, setData] = useState([]);
  const [timer, setTimer] = useState({
    title: '',
    project: '',
    id: 0,
  });
  const [error, setError] = useState(false);
  const [cancelBtn, setCancelBtn] = useState(true);

  const { title, project } = timer;

  const handleChange = (e) => {
    setTimer({
      ...timer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !project.trim()) {
      setError(true);
      return;
    }
    setError(false);

    setData([...data, { ...timer, id: data.length + 1 }]);

    setTimer({
      title: '',
      project: '',
    });
  };

  const cancelBtnFn = () => {
    setCancelBtn(false);
  };

  console.log(data);

  return cancelBtn ? (
    <div className="create">
      <div className="create-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="project">Project</label>
          <br />
          <input
            type="text"
            name="project"
            value={project}
            onChange={handleChange}
          />

          {error ? (
            <p className="create-error">Please introduce values!</p>
          ) : (
            ''
          )}
          <div className="create-buttons">
            <button className="create-btn" type="submit">
              Create
            </button>
            <button className="create-cancel-btn" onClick={cancelBtnFn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Create;
