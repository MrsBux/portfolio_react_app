import Navigation from "../../components/Navigation/index.jsx";
import { useEffect } from "react";

import DetailsServices from "../../components/DetailsServices/index.jsx";
import Methode from "../../components/Methode/index.jsx";
import Menu from "../../components/Menu/index.jsx";
import "../../style/css/servicesp.css";

function Services() {
  useEffect(() => {
    // Scroll vers le haut une fois que la page est montée
    window.scrollTo(0, 0);
  }, []);

  const sectionsPage = [
    { id: "services", name: "Services" },
    { id: "methodologie", name: "Méthodologie" },
    { id: "faq", name: "FAQ" },
  ];

  const faqArray = [
    {
      numberKey: "0",
      title: "Quels sont les langages essentiels pour le développement web ?",
      text: "Les langages de programmation clés sont HTML pour la structure, CSS pour la mise en page, et JavaScript pour l'interactivité.",
    },
    {
      numberKey: "1",
      title:
        "Quelles stratégies adopter pour optimiser la performance d'un site web ?",
      text: "Adoptez des techniques d'optimisation telles que la compression des images, le regroupement des fichiers CSS/JS, et la mise en cache pour réduire efficacement les temps de chargement. Ces pratiques contribuent non seulement à une expérience utilisateur améliorée mais permettent également de gérer les coûts et les délais de manière pratique.",
    },
    {
      numberKey: "2",
      title:
        "Quels facteurs influent sur les coûts de développement d'un site web ?",
      text: "Les coûts de développement dépendent de plusieurs facteurs, tels que la complexité des fonctionnalités, le design personnalisé, et l'intégration de fonctionnalités tierces. Par exemple, pour un site vitrine simple, le tarif peut varier autour de 800 euros, tandis qu'un site e-commerce simple peut nécessiter un budget d'environ 2500 euros.",
    },
    {
      numberKey: "3",
      title: "Comment estimer le délai de livraison d'un projet web ?",
      text: "L'estimation du délai dépend de la portée du projet, de la disponibilité des ressources, et des exigences spécifiques du client. Une communication claire et une planification minutieuse sont essentielles pour respecter les délais.",
    },
  ];

  return (
    <main>
      <section id="services" className="navpagebar">
        <Navigation sectionsPage={sectionsPage} />
      </section>
      <section id="methodologie" className="servbox">
        <h2 className="servbox__title">SERVICES</h2>
        <DetailsServices />
      </section>
      <section id="faq" className="methode">
        <h2 className="methode__title">NOTRE METHODE DE TRAVAIL</h2>
        <Methode />
      </section>
      <section className="faq">
        {faqArray.map((menu, index) => (
          <Menu
            key={menu.index}
            numberKey={menu.numberKey}
            title={menu.title}
            text={menu.text}
          />
        ))}
      </section>
    </main>
  );
}

export default Services;
