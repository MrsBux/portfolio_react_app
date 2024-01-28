import React from "react";
import "../../../style/css/modalcompetences.css";
import iconClose from "../../../assets/icon-fermeture.webp";

export default function ModalContent({ closeModal, name, logoSrc }) {
  const uppercasedName = name.toUpperCase();

  const getCompetenceTypeArray = () => {
    switch (name) {
      case "Front-end":
        return [
          { competenceType: "HTML 5", barImgSrc: "", grade: "95%" },
          { competenceType: "CSS", barImgSrc: "", grade: "92%" },
          { competenceType: "SASS", barImgSrc: "", grade: "90%" },
          { competenceType: "REACT.JS", barImgSrc: "", grade: "80%" },
          { competenceType: "JAVASCRIPT", barImgSrc: "", grade: "80%" },
        ];
      case "Back-end":
        return [
          { competenceType: "JAVSCRIPT", barImgSrc: "", grade: "95%" },
          { competenceType: "NODE.JS", barImgSrc: "", grade: "92%" },
          { competenceType: "EXPRESS", barImgSrc: "", grade: "90%" },
        ];
      case "Outils":
        return [
          { competenceType: "GIT & GITHUB", barImgSrc: "", grade: "95%" },
          { competenceType: "MONGODB", barImgSrc: "", grade: "92%" },
          { competenceType: "VSC", barImgSrc: "", grade: "90%" },
          { competenceType: "POSTMAN", barImgSrc: "", grade: "80%" },
        ];
      default:
        return [];
    }
  };
  const competenceTypeArray = getCompetenceTypeArray();

  return (
    <div className="modalContent">
      <div className="modalContent__box">
        <div className="modalContent__box__btn">
          <button
            className="modalContent__box__btn__b"
            onClick={() => {
              {
                closeModal();
              }
            }}
          >
            Fermer x
          </button>
        </div>
        <div className="modalContent__box__top">
          <img
            src={logoSrc}
            alt="logo"
            className="modalContent__box__top__img"
          />
          <h3 className="modalContent__box__top__title">{uppercasedName}</h3>
        </div>

        <div className="modalContent__box__table">
          <ul>
            {competenceTypeArray.map((cptype, index) => (
              <li
                key={`cptype_${index}`}
                className="modalContent__box__table__li"
              >
                <h4 className="modalContent__box__table__li__title">
                  {cptype.competenceType}
                </h4>

                <progress
                  value={parseInt(cptype.grade, 10)}
                  max="100"
                  className="modalContent__box__table__li__progress-bar"
                ></progress>

                <p>{cptype.grade}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
