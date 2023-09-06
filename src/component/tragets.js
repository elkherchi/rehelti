import React, { useEffect, useState } from 'react';
import { Container, Button,Card, Row,Col} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
const ResultatsTrajets = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const villeDepart = searchParams.get('villeDepart');
  const villeArrivee = searchParams.get('villeArrivee');
  const [resultats, setResultats] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    console.log(villeDepart, villeArrivee)
    fetch(`http://localhost:3001/tragets?villeDepart=${villeDepart}&villeArrivee=${villeArrivee}`)
      .then((response) => response.json())
      .then((data) =>setResultats(data))
      .catch((error) => console.error('Erreur lors de la récupération des données', error));
  }, [villeDepart, villeArrivee]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };
  return (
    <section className='text-center brech'>
        <Container>
            <Row className='resultat p-2'>
             <h1>Résultats de la recherche</h1>
             {showMessage && (
            <div className='showmessage p-2'>
                <span>Téléchargez votre application et créez un compte !</span>
            </div>
            )}
            </Row>
            <Col>
          {resultats.length === 0 ? (
            <Row className='recherchevide p-5 d-flex justify-content-center'>
              <p>Ce trajet n'est pas encore disponible</p>
            </Row>
          ) : (
            resultats.map((trajet) => (
              <Col key={trajet.id} className='p-2 recher'>
                <Card className='card'>
                  <Card.Body>
                    <Card.Title>{trajet.ville_depart} - {trajet.ville_Arrive}</Card.Title>
                    <Card.Text>
                      <Col>
                        <p>Date de départ : {trajet.date_depart}</p>
                        <p>Nombre de places disponibles : {trajet.nombre_place}</p>
                      </Col>
                    </Card.Text>
                    <Button onClick={handleSubmit}>Réserver</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Col>
        
        </Container>
    </section>
   
  );
};

export default ResultatsTrajets;
