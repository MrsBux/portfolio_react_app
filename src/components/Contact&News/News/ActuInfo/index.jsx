import React, { useState } from "react";
import useAuthStore from "../../../../stores/authStore.js";
import Btn from "../../../btn/boutons.jsx";
import "../../../../style/css/actuinfo.css";
import apiRoutes from "../../../../utils/apiRoutes.js";
import format from "date-fns/format";

function ActuInfo({ id, title, description, date, closeModal, updateNews }) {
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");
  const { isAdminLoggedIn, login, logout } = useAuthStore();

  const handleDelete = async (id) => {
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
      const response = await fetch(apiRoutes.singleActu(id), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      // Fermez le formulaire après l'ajout réussi
      updateNews();
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'actualité :", error);
    }
  };

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="actuinfomodal">
      <div className="actuinfomodal__btn">
        <div>{formattedDate}</div>
        <Btn
          name=" Fermer x"
          className="actuinfomodal__btn__b"
          onClick={() => {
            console.log("close click");
            closeModal();
          }}
        />{" "}
      </div>{" "}
      <div className="actuinfomodal__main">
        <h4 className="actuinfomodal__main__h">{title}</h4>
        <p>{description}</p>
      </div>
      <div
        className={`actuinfomodal__admin ${
          isAdminLoggedIn ? "logged" : "not-logged"
        }`}
      >
        <Btn
          key="BtnAdminButtonDelete"
          onClick={() => handleDelete(id)}
          name="Supprimer cette actualité"
          className="actuinfomodal__admin__btn"
        />
      </div>
    </div>
  );
}

export default ActuInfo;
