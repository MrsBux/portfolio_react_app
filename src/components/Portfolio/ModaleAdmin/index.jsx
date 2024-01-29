import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Btn from "../../btn/boutons.jsx";
import "../../../style/css/modaleadmin.css";

function ModaleAdmin({ closeModal, updateProject }) {
  const [title, setTitle] = useState("");
  const [descriptionCourte, setDescriptionCourte] = useState("");
  const [descriptionLongue, setDescriptionLongue] = useState("");
  const [coverURL, setCoverURL] = useState(null);
  const [images, setImages] = useState([]);
  const [lienRepoGit, setLienRepoGit] = useState("");
  const [langages, setLangages] = useState("");
  const [categories, setCategories] = useState("");
  const [date, setDate] = useState("");
  const [duree, setDuree] = useState("");
  const [lienProjet, setLienProjet] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e, setField) => {
    const file = e.target.files[0];
    setField(file);
  };

  const handleImagesChange = (e) => {
    const fileList = Array.from(e.target.files);
    const newImages = fileList.map((file) => ({
      src: file,
      alt: file.name,
    }));
    setImages([...images, ...newImages]);
    e.target.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = window.localStorage.getItem("token");

      if (!token) {
        throw new Error("Token manquant");
      }

      const formDataToSend = new FormData();
      formDataToSend.append("title", title);
      formDataToSend.append("descriptionCourte", descriptionCourte);
      formDataToSend.append("descriptionLongue", descriptionLongue);
      formDataToSend.append("coverURL", coverURL);
      for (const image of images) {
        formDataToSend.append("images", image.src);
      }
      formDataToSend.append("lienRepoGit", lienRepoGit);
      formDataToSend.append("langages", langages);
      formDataToSend.append("categories", categories);
      formDataToSend.append("date", date);
      formDataToSend.append("duree", duree);
      formDataToSend.append("lienProjet", lienProjet);

      console.log("FormData avant envoi :", formDataToSend);

      const response = await fetch(
        "https://apiportfolio-10b0ce5793e3.herokuapp.com/api/projects",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `Erreur HTTP! Statut : ${response.status}. Détails : ${errorText}`
        );
      }
      updateProject();
      closeModal();
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet :", error);
      console.error("Erreur serveur :", error.message);
    }
  };

  return (
    <div className="Modaladmin">
      <div className="Modaladmin__btn">
        <Btn
          name=" Fermer x"
          className="Modaladmin__btn__button"
          onClick={() => {
            console.log("close click");
            closeModal();
          }}
        />
      </div>
      <h3 className="Modaladmin__title">AJOUTER UN PROJET </h3>
      <Form
        className="Modaladmin__form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="Modaladmin__form__main">
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Saisir le titre"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description Courte</Form.Label>
            <Form.Control
              type="text"
              value={descriptionCourte}
              placeholder="Saisir la description courte"
              onChange={(e) => setDescriptionCourte(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="Modaladmin__form__img">
          {/* cover */}
          <Form.Group controlId="coverURL">
            <Form.Label>Image de Couverture</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => handleFileChange(e, setCoverURL)}
              name="coverURL"
            />
            {coverURL && (
              <img
                src={coverURL}
                alt={coverURL}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  marginTop: "10px",
                }}
              />
            )}
          </Form.Group>

          <Form.Group controlId="projectImages">
            <Form.Label>Images</Form.Label>
            <Form.Control
              ref={fileInputRef}
              type="file"
              multiple
              onChange={(e) => handleImagesChange(e)}
            />
            <div className="image-preview-container">
              {images.map((image, index) => (
                <div key={index} className="image-preview">
                  <img
                    src={image.src}
                    alt={`Image Preview ${index + 1}`}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      marginTop: "10px",
                    }}
                  />
                  <p>{image.alt}</p>
                </div>
              ))}
            </div>
          </Form.Group>
        </div>

        <div className="Modaladmin__form__details"></div>

        <div className="Modaladmin__form__details">
          <div className="Modaladmin__form__details__1">
            <Form.Group>
              <Form.Label>Description Longue</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="Saisir la description longue"
                value={descriptionLongue}
                onChange={(e) => setDescriptionLongue(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Lien du Répertoire Git</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saisir le lien du Répertoire Git"
                value={lienRepoGit}
                onChange={(e) => setLienRepoGit(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="Modaladmin__form__details__2">
            <Form.Group>
              <Form.Label>Langages</Form.Label>
              <Form.Control
                type="text"
                value={langages}
                placeholder="Saisir les langages (séparés par des virgules)"
                onChange={(e) => setLangages(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Catégories</Form.Label>
              <Form.Control
                value={categories}
                type="text"
                placeholder="Saisir les catégories (séparées par des virgules)"
                onChange={(e) => setCategories(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date (MM/YYYY)</Form.Label>
              <Form.Control
                type="date"
                value={date}
                placeholder="Saisir la date au format MM/YYYY"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Durée (en semaines)</Form.Label>
              <Form.Control
                type="number"
                value={duree}
                placeholder="Saisir la durée en semaines"
                onChange={(e) => setDuree(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Lien du Projet</Form.Label>
              <Form.Control
                type="text"
                value={lienProjet}
                placeholder="Saisir le lien du projet"
                onChange={(e) => setLienProjet(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>

        <Btn
          key={"btncontact"}
          name={"Envoyer"}
          className="contact__form__btn"
          type="submit"
          onClick={() => {
            console.log("Clic sur le bouton !");
          }}
        />
      </Form>
    </div>
  );
}

export default ModaleAdmin;
