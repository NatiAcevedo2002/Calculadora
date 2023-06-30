import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const handleSum = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <div className="input-group">
        <input
          type="number"
          className="input-field"
          value={num1}
          onChange={handleNum1Change}
        />
        <span>+</span>
        <input
          type="number"
          className="input-field"
          value={num2}
          onChange={handleNum2Change}
        />
        <button className="btn" onClick={handleSum}>
          Sumar
        </button>
      </div>
      <p className="result">Resultado: {result}</p>
    </div>
  );
}

export default App;
