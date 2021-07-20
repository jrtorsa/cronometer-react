import { useState } from "react";
import AddTimerButton from "./components/AddTimerButton";
import EditCard from "./components/EditCard";
import PageHeader from "./components/PageHeader";
import TimeCard from "./components/TimeCard";

function App() {
  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const [showTimerCard, setShowTimerCard] = useState(true);
  const [newTimer, setNewTimer] = useState([])

  const toggleCards = () => {
    if (!showTimerCard) {
      setShowTimerCard(true);
      setShowUpdateCard(false);
    } else {
      setShowTimerCard(false);
      setShowUpdateCard(true);
    }
  };

  
  return (
    <>
      <PageHeader />
      <TimeCard showTimerCard={showTimerCard} toggleCards={toggleCards} newTimer={newTimer} />
      <EditCard showUpdateCard={showUpdateCard} toggleCards={toggleCards} />
      <AddTimerButton setShowUpdateCard={setShowUpdateCard} />
    </>
  );
}

export default App;
