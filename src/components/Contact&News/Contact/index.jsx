import React, { useState } from "react";
import "../../../style/css/contact.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Btn from "../../btn/boutons";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apiportfolio-10b0ce5793e3.herokuapp.com/api/formcontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Formulaire soumis avec succès !");

        setFormData({
          nom: "",
          prenom: "",
          email: "",
          message: "",
        });

        // Vous pouvez éventuellement effectuer des actions supplémentaires ici
      } else {
        console.error(
          "Erreur lors de la soumission du formulaire :",
          response.status
        );
      }
    } catch (error) {
      console.error(
        "Erreur lors de la soumission du formulaire :",
        error.message
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="contact">
      <h2 className="contact__title">VOUS AVEZ UN PROJET ? UNE QUESTION ? </h2>
      <h3 className="contact__subtitle">
        Ecrivez-nous & on vous répond en 48h !
      </h3>
      <Form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form__nomprenom">
          <Form.Group className="form-group">
            <Form.Label htmlFor="nom"> </Form.Label>
            <Form.Control
              id="nom"
              type="text"
              placeholder="Nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label htmlFor="prenom"> </Form.Label>
            <Form.Control
              id="prenom"
              type="text"
              placeholder="Prénom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <Form.Group className="form-group">
          <Form.Label htmlFor="email"> </Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Entrez votre adresse e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email" //
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label htmlFor="message"> </Form.Label>
          <Form.Control
            id="message"
            type="text"
            placeholder="Votre message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off" //
          />
        </Form.Group>
        <div>
          <Btn
            key={"btncontact"}
            name={"Envoyer"}
            className="contact__form__btn"
            type="submit"
          />
        </div>
      </Form>
    </div>
  );
}

export default Contact;
