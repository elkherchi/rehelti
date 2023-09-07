import React, { useEffect, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import 'animate.css';

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/temoignages')
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error('Erreur lors de la récupération des témoignages', error));
  }, []);

  const filterTestimonials = () => {
    return testimonials.filter((testimonial) =>
      testimonial.nom.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <section className='témoignages'>
      <div className="d-flex justify-content-between align-items-center p-2 mb-2 bg-danger title-testimonials">
        <div>
          <h1>Témoignages</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Recherche par nom"
            className="form-control"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-dark">Ajouter</button>
        </div>
      </div>
      <Container className="text-center">
        <Row className="justify-content-center m-5">
          {
            testimonials.length === 0 ? (
              <Row className='recherchevide p-5 d-flex justify-content-center'>
                <p>Ne pas aucore existe des temoignages</p>
              </Row>
            ) :(
          filterTestimonials().map((testimonial) => (
            <Card key={testimonial.id} className="mb-4 animate__animated animate__fadeInUp">
              <Card.Body>
                <Card.Text className='citation-impactante'>{testimonial.texte}</Card.Text>
                <Card.Title>{testimonial.nom}</Card.Title>
              </Card.Body>
            </Card>
          )))
        
      }
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsPage;
