import React from 'react';
import logements from './logements.json';

function App() {
  return (
    <div className="App">
      <h1>Logements</h1>
      <ul>
        {logements.map(logement => (
          <li key={logement.id}>{logement.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

