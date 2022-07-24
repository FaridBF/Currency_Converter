import './App.css';

import { useState } from 'react';

import rates from './data.js';

function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [result, setResult] = useState(0);

  const dollar = rates.USD;

  // for (const indice in rates) {
  //   console.log(`${indice}: ${rates[indice]}`);
  // }

  return (
    <div className='App'>
      <h1>EUR to USD</h1>
      <input
        type='number'
        required
        value={initialValue}
        placeholder='Veuillez saisir un nombre'
        onChange={(e) => setInitialValue(e.target.value)}
      />
      €
      <br />
      <button
        onClick={() => {
          setResult(dollar * initialValue);
        }}
      >
        Convertir
      </button>
      <p>{result}</p>
      <br />
      {/* <input
        type='number'
        required
        value={result}
        placeholder='Veuillez saisir un nombre'
        onChange={(e) => {
          setResult(e.target.value);
        }}
      /> */}
    </div>
  );
}

export default App;
