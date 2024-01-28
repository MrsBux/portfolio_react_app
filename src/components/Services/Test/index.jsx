import React, { useState } from "react";
import "../../../style/css/test.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Btn from "../../btn/boutons";

function Test() {
  const [formData, setFormData] = useState({
    url: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/formtest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulaire soumis avec succès !");

        setFormData({
          url: "",
          email: "",
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
    <div className="testContainer">
      <h3 className="testContainer__title">
        TESTEZ LA PERFORMANCE DE VOTRE SITE WEB GRATUITEMENT{" "}
      </h3>
      <Form className="testContainer__form" onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Label htmlFor="url">
            {" "}
            Entrez l'adresse d'un site web pour tester sa performance !{" "}
          </Form.Label>
          <Form.Control
            id="url"
            type="text"
            name="url"
            value={formData.url}
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label htmlFor="email">
            {" "}
            Entrez votre adresse mail pour recevoir les résultats !{" "}
          </Form.Label>
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
        <Btn
          key={"btntest"}
          name={"Testez votre site !"}
          className="testContainer__form__btn"
          type="submit"
          onClick={() => {
            console.log("Clic sur le bouton !");
          }}
        />
      </Form>
    </div>
  );
}

export default Test;
