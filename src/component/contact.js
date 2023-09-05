//import le module important
import React from "react";
import { Row , Container , Col } from "react-bootstrap";
const Contact = () =>{
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
                <div>
                    <input placeholder="Entrer votre adress email" />
                </div>
                <div>
                    <button>S'INSCRIRE</button>
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
                    <input placeholder="Votre Nom" />
                </div>
                <div>
                    <input placeholder="Votre adress email" />
                </div>
                <div>
                    <input placeholder="Sujet" />
                </div>
                <div>
                    <textarea placeholder="Message" rows={4}></textarea>
                </div>
                <div>
                    <button>ENVOYER LE MESSAGE</button>
                </div>
                </Col>
             </div>
           </Container>
        </section>
       </div>
        
    )
}

export default Contact;