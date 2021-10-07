
import { useEffect, useState } from 'react';
import './App.css';
import Device from './components/Device/Device';

function App() {
  const [steps, setStaps] = useState(0);

  const handel = () => {
    const newStepsCound = steps + 1;
    setStaps(newStepsCound)
  }

  useEffect(() => {
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h3> My Steps : {steps}</h3>
      <button onClick={handel}>Wolk</button>
      <Device name="phone" price="5000"></Device>

    </div>
  );
}

export default App;
