import { useState } from 'react';
import AddTimer from './components/AddTimer/AddTimer';

function App() {
  const [view, setView] = useState(false);

  const show = () => {
    setView(!view);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cronomentros</h1>
      <hr />
      <AddTimer view={view} show={show} />
    </div>
  );
}

export default App;
