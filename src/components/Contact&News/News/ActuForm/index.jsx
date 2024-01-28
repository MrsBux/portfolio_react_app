import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Btn from "../../../btn/boutons";
import "../../../../style/css/actuform.css";

function ActuForm({ closeModal, updateNews }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Récupération du token depuis le stockage local
      const token = window.localStorage.getItem("token");

      // Vérification si un token est disponible
      if (!token) {
        throw new Error("Token manquant");
      }

      // Envoi des données au serveur avec le token d'authentification
      const response = await fetch(
        "https://apiportfolio-10b0ce5793e3.herokuapp.com/api/actus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ajout du token d'authentification
          },
          body: JSON.stringify({ title, description, date }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      updateNews();

      // Fermez le formulaire après l'ajout réussi
      closeModal();
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'actualité :", error);
    }
  };

  return (
    <div className="actuform">
      <div className="actuform__btn">
        <Btn
          name=" Fermer x"
          className="actuinfomodal__btn__b"
          onClick={() => {
            console.log("close click");
            closeModal();
          }}
        />
      </div>
      <h2 className="actuform__title"> AJOUTER UNE NOUVELLE ACTUALITE</h2>
      <Form className="actuform__form" onSubmit={handleSubmit}>
        <Form.Group className="title">
          <Form.Label> </Form.Label>
          <Form.Control
            id="input"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="description">
          <Form.Label> </Form.Label>
          <Form.Control
            id="input"
            as="textarea"
            rows={3}
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="date">
          <Form.Label> </Form.Label>
          <Form.Control
            id="input"
            type="date"
            placeholder="Enter the date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <div className="actuform__btn">
          <Btn
            key={"btnnewactu"}
            name={"Ajouter"}
            className="actuform__btn__b"
            type="submit"
          />
        </div>
      </Form>
    </div>
  );
}

export default ActuForm;
