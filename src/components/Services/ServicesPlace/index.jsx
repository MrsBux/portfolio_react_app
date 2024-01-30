import React from "react";
import { Link } from "react-router-dom";
import LogoService from "./logoService/index.jsx";
import Btn from "../../btn/boutons.jsx";
import "../../../style/css/servicesplace.css";
import logoDev from "../../../assets/service1.webp";
import logoOpt from "../../../assets/service2.webp";
import logoSEO from "../../../assets/service3.webp";
import logoRD from "../../../assets/service4.webp";
import logoAss from "../../../assets/service5.webp";
import logoECom from "../../../assets/service6.webp";

function ServicesPlace() {
  const logoServiceArray = [
    { logoSrc: logoDev, serviceName: "Création et Développement Web" },
    {
      logoSrc: logoOpt,
      serviceName: "Optimisation des perfomances de sites web",
    },
    { logoSrc: logoSEO, serviceName: "Optimisation SEO" },
    { logoSrc: logoRD, serviceName: "Accessibilité et Responsive Design" },
    { logoSrc: logoAss, serviceName: "Maintenance et Assistance" },
    { logoSrc: logoECom, serviceName: "Création de site e-commerce" },
  ];

  return (
    <div className="service">
      <h2 className="service__title"> SERVICES </h2>
      <div className="service__container">
        {logoServiceArray.map((service, index) => (
          <LogoService
            key={index}
            logoSrc={service.logoSrc}
            serviceName={service.serviceName}
          />
        ))}
      </div>
      <Link to="/services" className="service__bt">
        <Btn
          key={"btnindex"}
          name={"En savoir plus"}
          className="service__bt__btn"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}

export default ServicesPlace;
