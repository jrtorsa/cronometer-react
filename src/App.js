import { useState } from "react";
import AddTimerButton from "./components/AddTimerButton";
import CreateCard from "./components/CreateCard";
import PageHeader from "./components/PageHeader";
import TimeCard from "./components/TimeCard";

function App() {
  const [cronometerList, setCronometerList] = useState([]);
  const [cronometerCounter, setCronometerCounter] = useState(0)
  const [show, setShow] = useState(false)

  const newCronometer = (cronometer) => {
    setCronometerList([...cronometerList, cronometer]);
  };

  const showElement = () => {
    setShow(!show)
  }
  
  const addCronometerCounter = () => {
    setCronometerList(cronometerCounter + 1)
  }

  return (
    <>
      <PageHeader />
      <div style={{ marginBottom: "30px" }}>
        <TimeCard showElement={showElement} cronometerList={cronometerList} />
      </div>
      <CreateCard show={show} showElement={showElement} newCronometer={newCronometer} cronometerList={cronometerList} />
      <AddTimerButton addCronometerCounter={addCronometerCounter} />
    </>
  );
}

export default App;
