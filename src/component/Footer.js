// import les modules

import { Link } from "react-router-dom";
import React  from "react";
import { Container , Row , Col } from "react-bootstrap";
const Footer = () => {

    return (
      <footer className="footer bg-dark text-light py-5">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <h2>Qui Sommes-Nous</h2>
              <p>Nous sommes une équipe passionnée qui croit en rendre les voyages plus faciles et économiques grâce à notre application de covoiturage Rehelti.</p>
              <Row className="text-center">
                  <ul className="list-unstyled d-flex justify-content-center google ">
                    <li className="m-2">
                      <a href="https://www.appstore.com/votre-application" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-app-store"></i> App Store
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="https://www.playstore.com/votre-application" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-google-play"></i> Google Play
                      </a>
                    </li>
                    {/* Ajoutez d'autres liens ici */}
                  </ul>
             </Row>
            </Col>
            <Col md={6} className="text-center">
              <h2>Comment Ça Fonctionne</h2>
              <p>Utilisez notre application pour rechercher des trajets disponibles, communiquer avec les conducteurs et partager vos propres trajets.</p>
              <Row className="text-center reseau">
                  <ul className="list-unstyled d-flex justify-content-center ">
                    <li>
                      <a href="https://www.facebook.com/votre-page-facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/votre-compte-twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/votre-compte-instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/votre-compte-linkedin" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/votre-chaine-youtube" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    {/* Ajoutez d'autres réseaux sociaux ici */}
                  </ul>
                </Row>
            </Col>
          </Row>
          
        </Container>
        <p>Copyright © 2023 Rehelti. Tous droits réservés.</p>
        <div>
          <img src="./supnum.jpg" />
          <img src="./011.png" />
        </div>
      </footer>
      
    );
}

export default Footer;