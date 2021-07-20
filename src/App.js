import { useState } from "react";
import AddTimerButton from "./components/AddTimerButton";
import EditCard from "./components/EditCard";
import PageHeader from "./components/PageHeader";
import TimeCard from "./components/TimeCard";

function App() {
  const [show, setShow] = useState(true)
  const [newTimer, setNewTimer] = useState([{title: '', project: ''}])

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
      <TimeCard show={show} setShow={setShow} newTimer={newTimer} />
      <EditCard show={show} setShow={setShow} handleChange={handleChange} newTimer={newTimer} />
      <AddTimerButton setShow={setShow} />
    </>
  );
}

export default App;
