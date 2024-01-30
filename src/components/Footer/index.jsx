import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "../../style/css/footer.css";
import logoLogin from "../../assets/icon_login.webp";
import logoGit from "../../assets/icon__git.webp";
import logoInsta from "../../assets/icon_insta.webp";
import logoLinkedin from "../../assets/icon_linkedin.webp";
import logoMail from "../../assets/icon__mail.webp";
import ligneV from "../../assets/lign_v.webp";

function Footer() {
  return (
    <footer>
      {/* <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BUX WEB COMPAGNIE",
            "url": "https://www.buxwebcompagnie.com",
            "logo": "URL_DE_VOTRE_LOGO",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+33614 869 348",
                "contactType": "customer service"
              }
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "25 rue Vacquerie",
                "addressLocality": "Bédarrides",
                "postalCode": "84370",
                "addressCountry": "France"
              }
            ]
          }
        `}</script>
      </Helmet> */}
      <div className="footerBox">
        <nav className="footerBox__login">
          <Link to="/login">
            <img src={logoLogin} alt="logo login admin"></img>
          </Link>
        </nav>

        <div className="footerBox__link">
          <div className="footerBox__link__a">
            <a
              className="footerBox__link__a"
              href="mailto:camille.siessecuscusa@gmail.com"
            >
              <img
                className="footerBox__link__a__img"
                src={logoMail}
                alt="logo/lien login mail"
              ></img>
            </a>
            <a
              className="footerBox__link__a"
              href="https://github.com/MrsBux?tab=repositories"
            >
              <img
                className="footerBox__link__a__img"
                src={logoGit}
                alt="logo/lien repo git"
              ></img>
            </a>
            <img
              className="footerBox__link__a__img"
              src={ligneV}
              alt="séparation logo"
            ></img>
            <a
              className="footerBox__link__a"
              href="https://www.linkedin.com/in/camille-siesse-cuscusa-373658296/?originalSubdomain=fr"
            >
              <img
                className="footerBox__link__a__img"
                src={logoLinkedin}
                alt="logo/lien linkedin"
              ></img>
            </a>
            <a
              className="footerBox__link__a"
              href="https://www.instagram.com/buxwebcompagnie/"
            >
              <img
                className="footerBox__link__a__img"
                src={logoInsta}
                alt="logo/lien insta"
              ></img>
            </a>
          </div>
          <div className="footerBox__link__copyright">
            <p className="footerBox__link__copyright__p">
              {" "}
              © BUX WEB COMPAGNIE 2024
            </p>
          </div>
        </div>
        <div className="footerBox__coordonates">
          <p className="footerBox__coordonates__mail">
            {" "}
            contact@buxwebcompagnie.com <br />
            camille.siessecuscusa@gmail.com{" "}
          </p>
          <p className="footerBox__coordonates__adresse">
            {" "}
            25 rue Vacquerie 84370 Bédarrides <br /> France{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
