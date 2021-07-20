import { useState } from "react";
import AddTimerButton from "./components/AddTimerButton";
import EditCard from "./components/EditCard";
import PageHeader from "./components/PageHeader";
import TimeCard from "./components/TimeCard";

function App() {
  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const [showTimerCard, setShowTimerCard] = useState(true);
  const [newTimer, setNewTimer] = useState([{title: '', project: ''}])

  const toggleCards = () => {
    if (!showTimerCard) {
      setShowTimerCard(true);
      setShowUpdateCard(false);
    } else {
      setShowTimerCard(false);
      setShowUpdateCard(true);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target
    setNewTimer(
      {[name]: value}
    )
  }

  const createNewTimer = () => {

  }
  
  return (
    <>
      <PageHeader />
      <TimeCard showTimerCard={showTimerCard} toggleCards={toggleCards} newTimer={newTimer} />
      <EditCard showUpdateCard={showUpdateCard} toggleCards={toggleCards} handleChange={handleChange} newTimer={newTimer} />
      <AddTimerButton setShowUpdateCard={setShowUpdateCard} />
    </>
  );
}

export default App;
