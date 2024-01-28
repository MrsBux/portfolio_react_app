import React from "react";
import "../../style/css/methode.css";
import logoMethode from "../../assets/methode.webp";

function Methode() {
  return (
    <div className="methodebox">
      <p className="methodebox__p">
        {" "}
        "Notre méthodologie de travail agile avec nos clients se caractérise par
        une approche collaborative et itérative, favorisant une communication
        transparente et régulière. En nous adaptant rapidement aux changements
        et en privilégiant la livraison incrémentielle, nous nous assurons de
        répondre de manière efficace aux besoins évolutifs de nos clients tout
        en garantissant la qualité des résultats finaux.
      </p>
      <img src={logoMethode} alt="Boucle méthode de travail"></img>
    </div>
  );
}

export default Methode;
