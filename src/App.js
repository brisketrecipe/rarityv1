import React, { useState } from 'react';
import './App.css';
import database from './database2';
import logo from './logo.png';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleCheckClick = () => {
    const entry = database.find(
      (entry) =>
        entry.id === input || entry.name === input
    );
    if (entry) {
      setResult(`The rarity rank of Frackin Frog #${entry.name} is ${entry.rarityRank}/1800.`);
    } else {
      setResult(`No entry found with ID or name: ${input}`);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCheckClick();
  }

  return (
    <div className="app">
      <div className="centered-column"> {/* this is the new div */}
        <img src={logo} alt="logo" className="logo"/>
        <div className="form-container">
          <h2>Frack Rarity Check</h2> {/* Added line to display "Check Rarity" */}
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={input} 
              onChange={handleInputChange} 
            />
            <button type="submit">Check</button>
          </form>
          {result && <p>{result}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
