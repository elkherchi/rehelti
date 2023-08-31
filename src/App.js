import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Fonctionnalite from './component/Fonctionnalites';
import Footer from './component/Footer';
import Presentation from './component/Presentation';
import Accueil from './component/Acceuil';
import Connexion from './component/connexion';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/fonctionnalites" element={<Fonctionnalite />} />
          <Route path="/" element={<Accueil />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
