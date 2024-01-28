import React from "react";
import CompetencesBox from "./CompetencesBox/index.jsx";
import logoFront from "../../assets/front.webp";
import logoBack from "../../assets/back.webp";
import logoTools from "../../assets/tools.webp";
import "../../style/css/competences.css";

function Competences() {
  const competencesArray = [
    {
      id: "frontend",
      logoSrc: logoFront,
      name: "Front-end",
    },
    { id: "backend", logoSrc: logoBack, name: "Back-end" },
    {
      id: "outils",
      logoSrc: logoTools,
      name: "Outils",
    },
  ];

  return (
    <div className="competencesArea">
      <h2 className="competencesArea__title">COMPETENCES</h2>
      <div className="competencesArea__cards">
        {competencesArray.map((competence, index) => (
          <CompetencesBox
            key={`competence_${index}`}
            name={competence.name}
            logoSrc={competence.logoSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Competences;
