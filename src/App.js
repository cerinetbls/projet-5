import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logements from './logements.json';

// Composant Accueil
const Home = () => (
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil</p>
  </div>
);

// Composant Logements
const Logements = () => (
  <div>
    <h1>Logements</h1>
    <ul>
      {logements.map(logement => (
        <li key={logement.id}>{logement.title}</li>
      ))}
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/logements">Logements</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Logements />} />
      </Routes>
    </div>
  );
}

export default App;

