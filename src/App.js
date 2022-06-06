import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [count, setCount] = useState(0);
  const counteValue = 1;
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Counter</h1>
          <p>Add {counteValue} for each click</p>
          <p>{count}</p>
          <button 
            onClick={() => setCount(count + counteValue)}
            className="custom-button"
          >
            Click me
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
