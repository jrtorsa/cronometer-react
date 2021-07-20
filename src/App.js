import AddTimerButton from './components/AddTimerButton';
import EditCard from './components/EditCard';
import PageHeader from './components/PageHeader'
import TimeCard from './components/TimeCard';


function App() {
  return (
    <>
      <PageHeader />
      <TimeCard />
      <EditCard/>
      <AddTimerButton />
    </>
  );
}

export default App;
