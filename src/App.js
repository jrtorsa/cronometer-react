import Card from './components/Timer/Card';
import Create from './components/Create/Create';
import AddTimer from './components/AddTimer/AddTimer';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cronomentros</h1>
      <hr />
      <Card />
      <Create />
      <AddTimer />
    </div>
  );
}

export default App;
