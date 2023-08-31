/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Button, Row,Col} from 'react-bootstrap';
const Accueil = () => {
  return (
    <div className="" id='acceil'>
       <div className='col'>
        <section className="hero  py-5 text-center">
          <Container> {/* Utilisez le composant Container ici */}
            <h1>Bienvenue sur Rehelti</h1>
            <p className="lead">
              Découvrez comment notre application mobile de covoiturage peut vous aider à voyager de manière plus pratique et économique.
            </p>
            <Button variant="danger">Télécharger l'application</Button>
          </Container>
        </section>
      </div>
      <section  className="features bg-white py-5">
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
          </Row>
        </Container>
      </section>
      <div className='acceuil-form'>
         <div className="flex-container">
            <div className="text-container">
            <div className='title-form'>
              
            </div>
            </div>
            <div className="form-container">
            </div>
          </div>
      </div>
      <div className='p-5  comparer'>
        <p>Venez comparer et combiner votre trajet pour des billets pas chers ! Vos compagnies préférées nous font confiance. Tictactrip vous propose leurs meilleures offres :</p>
        <div className='row'>
          <div className='col-sm-4 d-flex  justify-content-center align-items-center'>
            <img src='./carapp.png'></img>
            <h2>CarApp</h2>  
          </div>
          <div className='col-sm-4 d-flex  justify-content-center align-items-center'>
            <img src='./marqoubi.jpg'></img>
            <h2>Marqoubi</h2>  
          </div>
          <div className='col-sm-4 d-flex  justify-content-center align-items-center'>
            <img src='./sehdini.png'></img>
            <h2>Sehdini</h2>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
