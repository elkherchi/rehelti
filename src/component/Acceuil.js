import React, {useState} from 'react';
import { Container, Button, Row,Col} from 'react-bootstrap';
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
                <h4>Quel est votre Traget ?</h4>
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
                <Button variant="danger">En Suivi Plus <i className="fas fa-arrow-right"></i></Button>
                
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-car fa-3x mb-3"></i>
                <h4>Publication d'Annonces</h4>
                <p>Publiez vos trajets et partagez-les avec d'autres utilisateurs.</p>
                <Button variant="danger">En Suivi Plus <i className="fas fa-arrow-right"></i></Button>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-comments fa-3x mb-3"></i>
                <h4>Messagerie Intégrée</h4>
                <p>Communiquez facilement avec d'autres utilisateurs pour organiser vos covoiturages.</p>
                <Button variant="danger">En Suivi Plus <i className="fas fa-arrow-right"></i></Button>
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
    </div>
  );
}

export default Accueil;
