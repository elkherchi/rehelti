import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row,Col,Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Accueil = () => {
  const navigate = useNavigate();
  const [villeDepart, setVilleDepart] = useState('');
  const [villeArrivee, setVilleArrivee] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/tragets?villeDepart=${villeDepart}&villeArrivee=${villeArrivee}`);
  };
  
  return (
    <div className="" id='acceil'>
      <div className='col'>
        <section className="hero  py-1 text-center">
          <Container> 
            <h1>Bienvenue sur Rehelti</h1>
            <h6 className="lead">
              Découvrez comment notre application mobile de covoiturage</h6>
            <h6> peut vous aider à voyager de manière plus pratique et économique.
            </h6>
            <Button variant="danger">Télécharger l'application</Button>
          </Container>
        </section>
      </div>
      <section className="image text-center">
          <Container> {/* Utilisez le composant Container ici */}
          <div className="flex-container">
            <div className="text-container">
              <div className='text-title'>
                <h3>Reservez vos billets de bus avec Rehelti covoiturage</h3>
                <p className="lead">Économique, écologique et convivial.</p>
              </div>
            </div>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <h4>Quel est votre Trajet ?</h4>
                <hr></hr>
                <label>Ville depart :</label>
                <input type="text" value={villeDepart} onChange={(e) => setVilleDepart(e.target.value)} required></input>
                <label>Destination:</label>
                <input type="text" value={villeArrivee} onChange={(e) => setVilleArrivee(e.target.value)} required></input>        
                <div class="kh">
                    <div>
                        <label>Date depart:</label>
                        <input type="date" required></input>
                    </div>
                    <div>
                        <label>Nombre Place:</label>
                        <input type="number" required></input>
                    </div>
                </div>
                <input type="submit" value="Recherche"></input>
                
              </form>
           </div>
          
          </div>
          </Container>
      </section>
      <section  className="feature">
      <Container>
          <h2 className="text-center mb-4">Fonctionnalités Clés</h2>
          <Row>
            <Col  className="mb-4">
              <div className="text-center">
                <i className="fas fa-search fa-3x mb-3"></i>
                <h4>Recherche de Trajets</h4>
                <p>Recherchez facilement des trajets disponibles pour votre destination.</p>
                
                <Link to={'/fonctionnalites'}><Button variant="danger">En Suivi Plus <i className="fas fa-arrow-right"></i></Button></Link>
                
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-car fa-3x mb-3"></i>
                <h4>Publication d'Annonces</h4>
                <p>Publiez vos trajets et partagez-les avec d'autres utilisateurs.</p>
                <Link to={'/fonctionnalites'}><Button variant="danger">En Suivi Plus <i className="fas fa-arrow-right"></i></Button></Link>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-comments fa-3x mb-3"></i>
                <h4>Messagerie Intégrée</h4>
                <p>Communiquez facilement avec d'autres utilisateurs pour organiser vos covoiturages.</p>
                <Link to={'/fonctionnalites'}><Button variant="danger">En Suivi Plus <i className="fas fa-arrow-right"></i></Button></Link>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
      <section className="how-it-works">
        <Container>
          <h2 className="text-center m-4">Comment Covoiturer avec Rehelti</h2>
          <div className="step-container">
            <div className="step">
              <div className="step-circle">01</div>
              <div className="step-content">
                <h2>Télécharger Rehelti</h2>
                <p>sur ton téléphone</p>
              </div>
            </div>
            <div className="step">
              <div className="step-circle">02</div>
              <div className="step-content">
                <h2>Crée ton compte</h2>
                <p>en renseignant tes formulaires</p>
              </div>
            </div>
            <div className="step">
              <div className="step-circle">03</div>
              <div className="step-content">
                <h2>C'est parti !</h2>
                <p>Covoiture avec qui tu veux dans l'application</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className='comparer'>
        <p>Venez comparer et combiner votre trajet pour des billets pas chers ! Vos compagnies préférées nous font confiance. Rehelti vous propose leurs meilleures offres :</p>
        <div className='row'>
          <Row className='col-sm-4'>
            <div>
              <img src='./carapp.png'></img>
              <h2>CarApp</h2> 
            </div> 
          </Row>
          <Row className='col-sm-4'>
            <div>
              <img src='./marqoubi.jpg'></img>
              <h2>Marqoubi</h2>  
            </div>
          </Row>
          <Row className='col-sm-4'>
            <div>
              <img src='./sehdini.png'></img>
              <h2>Sehdini</h2> 
            </div> 
          </Row>
        </div>
      </div>
      <section className="how-it">
        <Container>
          <h2>Découvrez vos avantages personnalisés</h2>
          <p>En covoitural,nous vous permettons de réduire les émissions polluantes,<br/>réaliser plus d'économies,gagner du temps,rencotrer de nouvelles personnes! </p>
          <div className="step-container">
            <div className="step">
              <Card className='card-av'>
                <Card.Header className='header-card'>Passager</Card.Header>
                <Card.Img variant="top" src="./011.png" alt="Image" className="mx-auto" />
                <Card.Body>
                  <Card.Title className='title-card'>Le confort de la voiture au prix d'un ticket de bus</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">+ Vos 10 permiers trajets sont offerts!</Card.Subtitle>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="step">
              <Card className='card-av'>
                <Card.Header className='header-card'>Conducteur</Card.Header>
                <Card.Img variant="top" src="./011.png" alt="Image" className="mx-auto" />
                <Card.Body>
                  <Card.Title className='title-card'>Le confort de la voiture au prix d'un ticket de bus</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted" > <b>+ 100 millions de prime covoiturage</b>selon elegibilite </Card.Subtitle>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      
    </div>
  );
}

export default Accueil;
