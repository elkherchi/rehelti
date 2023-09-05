import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { text: 'Accueil', to: '/' },
    { text: 'Présentation', to: '/presentation' },
    { text: 'Testimonials', to: '/testimonialsPage' },
    { text: 'Fonctionnalitees', to: '/fonctionnalites' },
    { text: 'Contact', to: '/connexion' },
  ];

  const defaultActiveLink = menuItems.findIndex(item => item.to === location.pathname);
  const [activeLink, setActiveLink] = useState(defaultActiveLink >= 0 ? defaultActiveLink : 0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header className="en-tete bg-primary">
      <div id="header-background" className="header-content">
        <div className="logo">
          <img src="/011.png" alt="Logo" />
        </div>
        <nav className="navbar">
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleLinkClick(index)}
                className={activeLink === index ? 'active' : ''}
              >
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
