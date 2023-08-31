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
            </Col>
            <Col md={6} className="text-center">
              <h2>Comment Ça Fonctionne</h2>
              <p>Utilisez notre application pour rechercher des trajets disponibles, communiquer avec les conducteurs et partager vos propres trajets.</p>
            </Col>
          </Row>
        </Container>
        <p>Copyright © 2023 Rehelti. Tous droits réservés.</p>

      </footer>
      
    );
}

export default Footer;