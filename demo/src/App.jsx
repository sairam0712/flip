// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true); // Start animation
    setResult(""); // Clear previous result

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
      setResult(outcome);
      setIsFlipping(false); // Stop animation
    }, 1000); // Delay to simulate flipping time
  };

  return (
    <div className="App">
      <h1>Coin Flip</h1>

      <div
        className={`coin ${isFlipping ? "flipping" : ""}`}
        style={{
          backgroundColor: isFlipping ? "white" : result === "Heads" ? "green" : result === "Tails" ? "red" : "transparent",
          color: isFlipping ? "black" : "white", // Ensure the text is visible
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          fontSize: "24px"
        }}
      >
        {result || "?"}
      </div>
      
      <div> <button onClick={flipCoin}>Flip Coin</button></div>
    </div>
  );
}

export default App;
