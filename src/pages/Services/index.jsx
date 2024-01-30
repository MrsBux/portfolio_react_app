import Navigation from "../../components/Navigation/index.jsx";
import { useEffect } from "react";
import React from "react";
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
      title:
        "Quels sont les langages essentiels proposés par la Bux Web Compagnie pour le développement web ?",
      text: "Les langages de programmation qui sont proposés sont des langages clés : HTML pour la structure, CSS pour la mise en page, et JavaScript pour l'interactivité. De plus ds framework/libraries comme REACT.js, Bootstrap peuvent être utilisés également. Dans le cas de la création d'une API, le langage priviligié est Javascript, tout en utilisant Node.js, Express.js ainsi qu'une base de données comme MongoDB",
    },
    {
      numberKey: "1",
      title:
        "Quelles stratégies adopter pour optimiser la performance d'un site web et réussir à optimiser son placement dans les moteurs de recherches ?",
      text: "Pour optimiser la performance de votre site web et améliorer sa visibilité sur les moteurs de recherche, incorporer des mots-clés pertinents dans un contenu de qualité est essentiel. Mettre en place une structure de site claire et une navigation rapide pour une expérience utilisateur optimale est recommandé. En complément, obtenir des backlinks de qualité renforce la crédibilité du site, contribuant ainsi à son positionnement optimal sur les moteurs de recherche et à la promotion des services offerts par votre entreprise.",
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
      text: "Pour estimer le délai de livraison d'un projet web, il est nécessaire de prendre en compte la portée du projet, la disponibilité des ressources et les exigences spécifiques du client. Une communication claire et une planification minutieuse sont essentielles pour respecter les délais. En règle générale, on peut estimer environ deux semaines pour la réalisation d'un site one page simple, tandis qu'un site e-commerce complexe peut nécessiter jusqu'à deux mois. Ces estimations peuvent varier en fonction des spécificités de chaque projet et des ajustements nécessaires.",
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
            key={menu.title}
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
