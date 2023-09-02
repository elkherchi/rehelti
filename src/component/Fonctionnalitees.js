import React from "react";
import { Col, Container , Row } from "react-bootstrap";
const Fonctionnalités = () =>{
    return (
        <section className="feature">
            <Container>
                <h2 className="text-center mb-4">Fonctionnalités Clés</h2>
                <Row>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-search fa-3x mb-3"></i>
                    <h4>Recherche de Trajets</h4>
                    <p>Recherchez facilement des trajets disponibles pour votre destination.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-car fa-3x mb-3"></i>
                    <h4>Publication d'Annonces</h4>
                    <p>Publiez vos trajets et partagez-les avec d'autres utilisateurs.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-comments fa-3x mb-3"></i>
                    <h4>Messagerie Intégrée</h4>
                    <p>Communiquez facilement avec d'autres utilisateurs pour organiser vos covoiturages.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-dollar-sign fa-3x mb-3"></i>
                    <h4>Tarification Transparente</h4>
                    <p>Connaître le coût exact du trajet avant de réserver.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-calendar-alt fa-3x mb-3"></i>
                    <h4>Gestion des Horaires</h4>
                    <p>Planifiez vos trajets en fonction de votre emploi du temps.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-map-marker-alt fa-3x mb-3"></i>
                    <h4>Localisation en Temps Réel</h4>
                    <p>Suivez la localisation du conducteur en temps réel lors du trajet.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-check-circle fa-3x mb-3"></i>
                    <h4>Confirmation Instantanée</h4>
                    <p>Recevez une confirmation instantanée de votre réservation.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-user-friends fa-3x mb-3"></i>
                    <h4>Partage avec Amis</h4>
                    <p>Partagez vos trajets avec vos amis et bénéficiez de remises.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="text-center">
                    <i className="fas fa-globe fa-3x mb-3"></i>
                    <h4>Disponible Partout</h4>
                    <p>Accédez à notre service de covoiturage dans de nombreuses régions.</p>
                    </div>
                </Col>
                </Row>
            </Container>
            </section>

    )
}

export default Fonctionnalités;