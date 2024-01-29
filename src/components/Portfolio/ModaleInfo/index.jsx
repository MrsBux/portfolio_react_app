import React, { useState } from "react";
import "../../../style/css/projectinfo.css";
import Btn from "../../btn/boutons.jsx";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuthStore from "../../../stores/authStore.js";

function ModaleInfo({
  id,
  titre,
  descourte,
  imagesArray,
  description,
  repoGit,
  langages,
  categorie,
  duree,
  URLprojet,
  closeModal,
  updateProject,
}) {
  const { isAdminLoggedIn, login, logout } = useAuthStore();

  const handleDeleteProject = async (id) => {
    const token = window.localStorage.getItem("token");

    // Vérification si un token est disponible
    if (!token) {
      throw new Error("Token manquant");
    }
    try {
      if (!id) {
        throw new Error("ID de l'actualité non défini.");
      }

      // Envoyer la demande de suppression au serveur
      const response = await fetch(
        `https://apiportfolio-10b0ce5793e3.herokuapp.com/api/projects/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      // Fermez le formulaire après l'ajout réussi
      updateProject();
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
    }
  };

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className="modaleinfobox"
      id="modalinfo"
      aria-hidden="true"
      role="dialog"
    >
      <div className="modaleinfobox__btn">
        <Btn
          name=" Fermer x"
          className="modaleinfobox__btn__button"
          onClick={() => {
            console.log("close click");
            closeModal();
          }}
        />
      </div>
      <div className="modaleinfobox__main">
        <h3 className="modaleinfobox__main__title">{titre}</h3>
        <p className="modaleinfobox__main__p">{descourte}</p>
        <div className="modaleinfobox__main__carousel">
          <Carousel fade data-bs-theme="dark">
            {imagesArray.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
                <Carousel.Caption>
                  <h3>{image.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="modaleinfobox__details">
        <div className="modaleinfobox__details__1">
          <div className="modaleinfobox__details__1__description">
            <h4 className="modaleinfobox__details__1__h">Description</h4>
            <div className="modaleinfobox__details__1__box">
              <p className="modaleinfobox__details__1__box__p">{description}</p>
            </div>
          </div>{" "}
          <div className="modaleinfobox__details__1__lien">
            <h4 className="modaleinfobox__details__1__h">
              Répertoire Git Projet
            </h4>
            <div className="modaleinfobox__details__1__box">
              {" "}
              <a href={repoGit}> Repo GIT</a>
            </div>
          </div>
        </div>

        <div className="modaleinfobox__details__2">
          <div className="modaleinfobox__details__2__langages">
            <h4 className="modaleinfobox__details__2__h">Langages</h4>
            <div className="modaleinfobox__details__2__box">
              <p className="modaleinfobox__details__2__box__p">{langages} </p>
            </div>
          </div>

          <div className="modaleinfobox__details__2__categorie">
            <h4 className="modaleinfobox__details__2__h">Catégories</h4>
            <div className="modaleinfobox__details__2__box">
              <p className="modaleinfobox__details__2__box__p">{categorie} </p>{" "}
            </div>
          </div>

          <div className="modaleinfobox__details__2__duree">
            <h4 className="modaleinfobox__details__2__h">
              Durée du projet en semaines
            </h4>
            <div className="modaleinfobox__details__2__box">
              <p className="modaleinfobox__details__2__box__p">{duree} </p>
            </div>
          </div>

          <div className="modaleinfobox__details__2__lien">
            <h4 className="modaleinfobox__details__2__h">Lien du projet</h4>
            <div className="modaleinfobox__details__2__box">
              <a href={URLprojet}>Projet déployé</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modaleinfobox__admin ${
          isAdminLoggedIn ? "logged" : "not-logged"
        }`}
      >
        <Btn
          key="BtnAdminButtonDelete"
          name="Supprimer le projet"
          onClick={() => handleDeleteProject(id)}
          className="modaleinfobox__admin__btn"
        />
      </div>
    </div>
  );
}

export default ModaleInfo;
