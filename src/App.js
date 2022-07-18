import "./App.css";
import { useState } from 'react';


function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
      <button
        disabled={counter === 0}
        onClick={() => setCounter(counter - 1)}
        data-testid="counter-decrement-button">
        Decrement 1
      </button>
      <button onClick={() => setCounter((prev) => prev + 1)} data-testid="counter-increment-button">Increment 1</button>
    </div>
  );
}

export default App;