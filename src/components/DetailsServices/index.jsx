import Btn from "../btn/boutons.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "../../style/css/detailsservices.css";
import LogoService from "../Services/ServicesPlace/logoService/index.jsx";
import logoDev from "../../assets/service1.webp";
import logoOpt from "../../assets/service2.webp";
import logoSEO from "../../assets/service3.webp";
import logoRD from "../../assets/service4.webp";
import logoAss from "../../assets/service5.webp";
import logoECom from "../../assets/service6.webp";

function DetailsServices({}) {
  return (
    <div className="servicesdbox">
      <div className="servicesdbox1">
        <div className="servicesdbox1__logo">
          <LogoService
            key={"logodev1"}
            logoSrc={logoDev}
            serviceName={"Création et Développement Web"}
          />
        </div>
        <div className="servicesdbox1__details">
          <p className="servicesdbox1__details__p">
            "Optimisez votre présence en ligne avec mes compétences spécialisées
            en création et développement web. Maîtrisant les langages
            incontournables tels qu'HTML, CSS, JavaScript, ainsi que les
            environnements React et Node, je conçois des solutions techniques
            sur mesure. Que vous souhaitiez un site web attractif, une
            application interactive ou une plateforme personnalisée, je
            simplifie le processus tout en garantissant une approche
            techniquement solide. Transformez votre projet web en une réalité
            numérique ."
          </p>
          <Link to="/gallery">
            <Btn
              key={"btndservices"}
              name={"Voir les projets "}
              className="servicesdbox1__details__btn"
              onClick={() => {
                console.log("Clic sur le bouton !");
              }}
            />
          </Link>
        </div>
      </div>

      <div className="servicesdbox2">
        <div className="servicesdbox2__logo">
          <LogoService
            key={"logodev2"}
            logoSrc={logoOpt}
            serviceName={"Optimisation des perfomances de sites web"}
          />
        </div>
        <div className="servicesdbox2__details">
          <p className="servicesdbox2__details__p">
            "Optimisez votre site web avec mon service dédié à l'optimisation
            des performances, incluant des audits approfondis. Grâce à une
            analyse rigoureuse, je m'engage à améliorer la vitesse, la
            réactivité et l'efficacité globale de votre plateforme en ligne. Mon
            approche comprend une optimisation minutieuse du code, la gestion
            des ressources multimédias et l'application de pratiques avancées.
            Fournissant une documentation complète et des rapports détaillés, je
            vous offre une visibilité claire sur les améliorations apportées."
          </p>
          <Link to="/gallery">
            <Btn
              key={"btndservices"}
              name={"Voir les projets "}
              className="servicesdbox2__details__btn"
              onClick={() => {
                console.log("Clic sur le bouton !");
              }}
            />
          </Link>
        </div>
      </div>

      <div className="servicesdbox3">
        <div className="servicesdbox3__logo">
          <LogoService
            key={"logodev3"}
            logoSrc={logoSEO}
            serviceName={"Optimisation SEO"}
          />
        </div>
        <div className="servicesdbox3__details">
          <p className="servicesdbox3__details__p">
            "Augmentez la performance de votre site web grâce à mon service
            d'Optimisation SEO. En utilisant des outils tels que Google
            Analytics et d'autres solutions spécialisées, je m'attache à affiner
            la structure, le contenu et la stratégie SEO de votre site.
            L'objectif est clair : améliorer votre visibilité sur les moteurs de
            recherche et attirer un trafic qualifié. Grâce à des analyses
            approfondies, je propose des ajustements basés sur des données
            concrètes recueillies via ces outils. Vous bénéficiez également
            d'une documentation détaillée et de rapports transparents pour
            suivre de près les améliorations apportées. Renforcez votre présence
            en ligne et maximisez l'impact de votre site web avec une expertise
            SEO."
          </p>
          <Link to="/gallery">
            <Btn
              key={"btndservices"}
              name={"Voir les projets "}
              className="servicesdbox3__details__btn"
              onClick={() => {
                console.log("Clic sur le bouton !");
              }}
            />
          </Link>
        </div>
      </div>

      <div className="servicesdbox4">
        <div className="servicesdbox4__logo">
          <LogoService
            key={"logodev4"}
            logoSrc={logoRD}
            serviceName={"Accessibilité et Responsive Design"}
          />
        </div>
        <div className="servicesdbox4__details">
          <p className="servicesdbox4__details__p">
            "Optimisez l'accessibilité et le design responsive de votre site
            web, que ce soit dans le cadre d'une création ou d'une optimisation
            pour un site existant. Ma démarche se focalise sur l'accessibilité,
            veillant à ce que votre site soit utilisable par tous,
            indépendamment des capacités ou des appareils. Le design responsive
            assure une expérience fluide sur divers écrans, du bureau aux
            smartphones. En respectant des normes strictes et en adoptant des
            pratiques de conception adaptative, je m'assure que votre site est à
            la fois inclusif et performant. Offrez une expérience optimale à
            tous vos visiteurs, que vous lanciez un nouveau projet web ou
            amélioriez une plateforme existante."
          </p>
          <Link to="/gallery">
            <Btn
              key={"btndservices"}
              name={"Voir les projets "}
              className="servicesdbox4__details__btn"
              onClick={() => {
                console.log("Clic sur le bouton !");
              }}
            />
          </Link>
        </div>
      </div>

      <div className="servicesdbox5">
        <div className="servicesdbox5__logo">
          <LogoService
            key={"logodev5"}
            logoSrc={logoAss}
            serviceName={"Assistance et maintenance de vos sites web"}
          />
        </div>
        <div className="servicesdbox5__details">
          <p className="servicesdbox5__details__p">
            "Assurez la pérennité de votre site web avec mes services
            d'assistance et de maintenance. Que votre site soit fraîchement créé
            ou déjà en ligne, je propose un accompagnement continu. Mon service
            inclut des vérifications régulières, des mises à jour de sécurité et
            une assistance pour toute problématique technique. Vous pouvez ainsi
            vous concentrer sur votre activité en toute tranquillité, en sachant
            que votre site est pris en charge. Profitez d'une assistance fiable
            et d'une maintenance proactive pour garantir la performance et la
            sécurité de votre présence en ligne."
          </p>
          <Link to="/gallery">
            <Btn
              key={"btndservices"}
              name={"Voir les projets "}
              className="servicesdbox5__details__btn"
              onClick={() => {
                console.log("Clic sur le bouton !");
              }}
            />
          </Link>
        </div>
      </div>

      <div className="servicesdbox6">
        <div className="servicesdbox6__logo">
          <LogoService
            key={"logodev6"}
            logoSrc={logoECom}
            serviceName={"Création de site Ecommerce"}
          />
        </div>
        <div className="servicesdbox6__details">
          <p className="servicesdbox6__details__p">
            "Optez pour la réussite de votre boutique en ligne avec mes services
            de Création de Site E-commerce. Que vous lanciez votre première
            boutique en ligne ou souhaitiez améliorer une plateforme existante,
            je m'engage à concevoir un site sur mesure. Ma démarche intègre une
            analyse approfondie de vos besoins, la mise en place d'une interface
            conviviale, et des fonctionnalités de paiement sécurisées. Je veille
            à ce que votre site e-commerce soit aussi attractif que performant,
            offrant une expérience d'achat fluide. Bénéficiez d'un site
            e-commerce optimisé pour maximiser votre visibilité et stimuler vos
            ventes en ligne."
          </p>
          <Link to="/gallery">
            <Btn
              key={"btndservices"}
              name={"Voir les projets "}
              className="servicesdbox6__details__btn"
              onClick={() => {
                console.log("Clic sur le bouton !");
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsServices;
