import React, { useState, useEffect } from "react";
import "../../../style/css/news.css";
import Btn from "../../btn/boutons.jsx";
import ActuItem from "./ActuItem/index.jsx";
import ActuInfo from "./ActuInfo/index.jsx";
import ActuForm from "./ActuForm/index.jsx";
import useAuthStore from "../../../stores/authStore.js";
import { useFetch } from "../../../utils/hooks/index.jsx";

function News() {
  const [showModalActu, setShowModalActu] = useState(false);
  const [showModalAdmin, setShowModalAdmin] = useState(false);
  const [selectedActu, setSelectedActu] = useState(null);
  const [visibleActus, setVisibleActus] = useState(3);
  const [actus, setActus] = useState([]); // Nouvel état pour stocker les données d'actus
  const { isAdminLoggedIn, login, logout } = useAuthStore();

  const {
    data: actusData,
    isLoading,
    error,
    fetchData, // Destructure the fetchData function from the hook
  } = useFetch("http://localhost:3000/api/actus");

  useEffect(() => {
    if (actusData) {
      setActus(actusData);
    }
  }, [actusData]);

  const updateNews = async () => {
    const currentLength = actus.length;
    await fetchData();

    // Mise à jour uniquement si la longueur actuelle des actualités a changé
    if (actus.length !== currentLength) {
      setActus(actusData);
    }
  };

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  const handleActuClick = (actu) => {
    console.log("Clic sur Actu", actu);
    setSelectedActu(actu);
    setShowModalActu(true);
  };

  const handleVoirPlusClick = () => {
    setVisibleActus(actus.length); // Affiche toutes les actus
  };

  const handleVoirMoinsClick = () => {
    setVisibleActus(3); // Revenir à l'état initial (afficher seulement les trois premières actus)
  };

  const renderModalActu = (actu) => {
    if (showModalActu && actu) {
      return (
        <div>
          <ActuInfo
            key={`${actu.id}-${actu.date}`}
            id={actu._id}
            closeModal={() => setShowModalActu(false)}
            title={actu.title}
            description={actu.description}
            date={actu.date}
          />{" "}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="news">
      <h2 className="news__title">ACTUALITES</h2>
      <div className="news__box">
        {actus.slice(0, visibleActus).map((actu) => (
          <ActuItem
            key={`${actu._id}-${actu.title}`}
            id={actu._id}
            title={actu.title}
            description={actu.description}
            date={actu.date}
            onClick={() => {
              handleActuClick(actu);
            }}
          />
        ))}
      </div>
      {actus.length > 3 && (
        <div className="news__btn">
          {visibleActus < actus.length ? (
            <Btn
              key={"btnnews"}
              name={"Voir plus ->"}
              className="news__btn__b"
              onClick={handleVoirPlusClick}
            />
          ) : (
            <Btn
              key={"btnnews"}
              name={"Voir moins <-"}
              className="news__btn__b"
              onClick={handleVoirMoinsClick}
            />
          )}
        </div>
      )}
      {renderModalActu(selectedActu)}
      <div
        className={`news__btnadmin ${
          isAdminLoggedIn ? "logged" : "not-logged"
        }`}
      >
        {" "}
        <Btn
          key="newactuadmin"
          name="Ajouter une actualité"
          onClick={() => {
            console.log("Clic sur le bouton");
            setShowModalAdmin(true);
          }}
          className="news__btnadmin__b"
        />{" "}
      </div>

      {showModalAdmin && (
        <div>
          <ActuForm
            closeModal={() => setShowModalAdmin(false)}
            updateNews={updateNews}
          />
        </div>
      )}
    </div>
  );
}

export default News;
