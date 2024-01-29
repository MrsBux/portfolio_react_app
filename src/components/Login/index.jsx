import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Btn from "../btn/boutons.jsx";
import "../../style/css/loginf.css";
import useAuthStore from "../../stores/authStore.js";
import apiRoutes from "../../utils/apiRoutes.js";

function Loginf() {
  const { isAdminLoggedIn, login, logout } = useAuthStore();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté lors du montage du composant
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      // L'utilisateur est connecté, mettez à jour l'état d'authentification
      login(true);
    }
  }, []); // Le tableau vide en

  const handleconnect = async () => {
    try {
      console.log("Clic sur le bouton !");

      // Création d'une instance de FormData
      const formData = new FormData(document.querySelector("form"));

      // Récupération des valeurs des champs
      const email = formData.get("email");
      const password = formData.get("password");

      console.log("Données du formulaire avant envoi :", formData);

      // Votre logique de requête
      const responsemdp = await fetch(apiRoutes.login, {
        method: "POST",
        body: JSON.stringify({ email, password }), // Utilisez les variables
        headers: {
          "Content-Type": "application/json",
        },
      });

      //traduction de la réponse en json
      const responseBody = await responsemdp.json();

      console.log(responseBody);

      // condition IF pour succès ou echec de la connexion

      // si reponse de la requete = 200 alors c'est un sccès
      if (responsemdp.status === 200) {
        // stockage du token en local
        window.localStorage.setItem("token", responseBody.token);
        login(true);
        console.log({ isAdminLoggedIn });

        //renvoie vers la page d'accueil en mode login au bout de 100ms
        // setTimeout(function () {
        //   window.location.href = "index.html";
        // }, 100);
      } else {
        // sinon c'est un echec et alors renvoie d'une alerte
        alert("Mauvaise combinaison Email / Mot de passe");
      }
    } catch (error) {
      console.error("Erreur de requête:", error);
    }
  };

  const handleLogout = () => {
    // Fonction de déconnexion
    logout();
    // Réinitialiser d'autres données ou effectuer des actions de déconnexion supplémentaires si nécessaire
    window.localStorage.removeItem("token");
  };

  return (
    <div className="loginbox" onSubmit={(e) => e.preventDefault()}>
      <Form className="loginbox__form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Btn
          key={"btnlogin"}
          name={"Envoyer"}
          className="loginbox__form__btn"
          type="submit"
          onClick={() => {
            handleconnect();
          }}
        />
      </Form>

      {isAdminLoggedIn && (
        // Affiche le bouton de déconnexion si l'utilisateur est connecté
        <button className="logout-btn" onClick={handleLogout}>
          Déconnexion
        </button>
      )}
    </div>
  );
}

export default Loginf;
