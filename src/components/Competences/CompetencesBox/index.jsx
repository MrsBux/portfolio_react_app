import React, { useState } from "react";
import Btn from "../../btn/boutons.jsx";
import ModalContent from "../ModalContent/index.jsx";
import { createPortal } from "react-dom";
import "../../../style/css/competencesCards.css";

function CompetencesBox({ logoSrc, name }) {
  const [showModal, setShowModal] = useState(false);

  const btnArray = [
    {
      name: "Voir plus ->",
      className: `competencescards__btn__${name}`,
      id: `competencescards__btnvoir__${name}`,
    },
  ];

  const renderModalContent = () => {
    if (showModal) {
      return (
        <div>
          <ModalContent
            closeModal={() => setShowModal(false)}
            name={name}
            logoSrc={logoSrc}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="competencescards">
      <img
        src={logoSrc}
        className={`competencescards__img`}
        alt={`logo ${name}`}
      />
      <h3 className={`competencescards__title`}>{name}</h3>
      <div className={`competencescards__btn`}>
        {btnArray.map((btn, index) => (
          <Btn
            key={`btn_${index}`}
            name={btn.name}
            className={btn.className}
            id={btn.id}
            onClick={() => {
              setShowModal(true);
            }}
          />
        ))}

        {showModal && createPortal(renderModalContent(), document.body)}
      </div>
    </div>
  );
}

export default CompetencesBox;
