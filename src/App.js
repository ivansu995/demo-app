import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [count, setCount] = useState(0);
  const counterValue = 1;
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Counter</h1>
          <p>Add or subtract {counterValue} for each click</p>
          <p>{count}</p>
          
          <button 
            onClick={() => setCount(count + counterValue)}
            className="plus-button"
          >
            Click me
          </button>

          <button
            onClick={() => setCount(count - counterValue)}
            className="minus-button"
          >
            Dont click me
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
