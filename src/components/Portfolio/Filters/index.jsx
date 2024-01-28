import React, { useState } from "react";
import "../../../style/css/filters.css";
import Btn from "../../btn/boutons";

function Filters() {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const filtersArray = [
    { name: "HTML5", className: "filtersbox__tag" },
    { name: "CSS", className: "filtersbox__tag" },
    { name: "SCSS", className: "filtersbox__tag" },
    { name: "GitHub", className: "filtersbox__tag" },
    { name: "Javascript", className: "filtersbox__tag" },
    {
      name: "Développement de site web front-end",
      className: "filtersbox__tag",
    },
    { name: "Développement d'une API backend", className: "filtersbox__tag" },
    { name: "Node.js", className: "filtersbox__tag" },
    { name: " Debbugage", className: "filtersbox__tag" },
    { name: "Optimisation SEO", className: "filtersbox__tag" },
    { name: "Planification de projet", className: "filtersbox__tag" },
    { name: "Projet courts (< 1semaine)", className: "filtersbox__tag" },
    { name: "Projet longs ( > 4semaines)", className: "filtersbox__tag" },
    { name: "Projet standards ( 2-4 semaines)", className: "filtersbox__tag" },
    { name: "Express.js", className: "filtersbox__tag" },
  ];

  const visibleFilters = showAllFilters
    ? filtersArray
    : filtersArray.slice(0, 5);

  return (
    <div className="filtersbox">
      <Btn
        key={`btnfiltertous`}
        name="Tous"
        className="filtersbox__tag__tous"
      />
      {visibleFilters.map((btn, index) => (
        <Btn
          key={`btnfilters_${index}`}
          name={btn.name}
          className={btn.className}
        />
      ))}
      {!showAllFilters ? (
        <Btn
          key="btnPlusDeFiltres"
          name="Plus de filtres"
          onClick={() => setShowAllFilters(true)}
          className="filtersbox__tag__plus"
        />
      ) : (
        <Btn
          key="btnVoirMoins"
          name="Voir moins"
          onClick={() => setShowAllFilters(false)}
          className="filtersbox__tag__moins"
        />
      )}
    </div>
  );
}

export default Filters;
