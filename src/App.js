import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import TestimonialsPage from './component/TestimonialsPage';
import Footer from './component/Footer';
import Presentation from './component/Presentation';
import Accueil from './component/Acceuil';
import Contact from './component/contact';
import ResultatsTrajets from './component/tragets';
import Fonctionnalités from './component/Fonctionnalitees';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonialsPage" element={<TestimonialsPage />} />
          <Route path="/fonctionnalites" element={<Fonctionnalités />} />
          <Route path="/tragets" Component={ResultatsTrajets} />
          <Route path="/" element={<Accueil />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
