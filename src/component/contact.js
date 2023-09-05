//import le module important
import React, {useState} from "react";
import validator from "validator";
import { Row , Container , Col } from "react-bootstrap";
const Contact =  () =>{

    const [email, setemail] = useState('');
    const [sujet, setsujet] = useState('');
    const [message, setmessage] = useState('');
    const [nom, setnom] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [emailpass , setemailpass] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validator.isEmail(email)) {
            alert('Adresse e-mail invalide');
            return;
          }
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, sujet, message , nom }),
          });
        
          if (response.ok) {
            alert('E-mail envoyé avec succès à l\'administrateur');
          } else {
            alert('Erreur lors de l\'envoi de l\'e-mail');
          }      
    };
    const envoyernotifie = async (e) => {
      e.preventDefault();
      fetch(`'http://localhost:3001/notification?emailpass=${emailpass}`)
      .then((response) => response.json())
      .then((data) => {
        setEmailExists(data.success === "L'e-mail existe dans la base de données");
      })
      // .catch((error) => console.error('Erreur lors de la récupération des données', error));
    };
    return (
       <div>
         <section className="text-center contact">
          <Container >
            <Row>
                <Col className="p-5 text-center">
                 <div>
                    <h1>
                        ABONNEZ VOUS A NOS MISES A JOUR
                    </h1>
                 </div>
                 <hr></hr>
                <p>
                    Donnez nous votre email et vous recevrez des notifications<br/>
                     a chaque evolution de l'application, Ne vous inquitez pas<br/>
                      nous detestons les spams autant que vous.
                </p>
                <Col className="contact-form">
                <div >
                <input
                  type="email"
                    placeholder="Entrer votre adress email"
                    value={emailpass}
                    onChange={(e) => {
                      setemailpass(e.target.value);
                      setEmailExists(false);
                    }}
                  />
                  {emailExists && (
                    <div className="alert alert-danger bg-danger" >L'e-mail existe déjà.</div>
                  )}                
                  </div>
                <div>
                    <button onClick={envoyernotifie}>S'INSCRIRE</button>
                </div>
                </Col>
                </Col>
            </Row>
          </Container>
        </section>
        <section className="text-center contact-serveur">
           <Container>
           <Row>
                <Col>
                <h1>CONTACTEZ-NOUS</h1>
                <hr />
                <p>
                Une question, un retour, une suggestion?Nous avons besoin de vous.
                <br /> 
                Donnez-nous votre opinion sur Wever. Contactez-nous à n'importe quel moment.
                </p>
                </Col>
             </Row>
             <div className="contact-serveur-form">
                <Col>
                <div>
                    <input placeholder="Votre Nom" value={nom} onChange={(e) => setnom(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Votre adress email" value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div>
                    <input placeholder="Sujet" value={sujet} onChange={(e) => setsujet(e.target.value)} />
                </div>
                <div>
                    <textarea placeholder="Message" value={message} onChange={(e) => setmessage(e.target.value)} rows={4}></textarea>
                </div>
                <div>
                    <button onClick={handleSubmit}>ENVOYER LE MESSAGE</button>
                </div>
                </Col>
             </div>
           </Container>
        </section>
       </div>
        
    )
}

export default Contact;