import React from "react";
import "../../style/css/home.css";
import Apropos from "../../components/Apropos/index.jsx";
import Navigation from "../../components/Navigation/index.jsx";
import Competences from "../../components/Competences/index.jsx";
import Services from "../../components/Services/index.jsx";
import ContactNews from "../../components/Contact&News/index.jsx";

function Home() {
  const sectionsPage = [
    { id: "apropos", name: "À Propos" },
    { id: "competences", name: "Compétences" },
    { id: "services", name: "Services & Test" },
    { id: "news", name: "Contact & News" },
  ];

  return (
    <main>
      <div className="navpagebar">
        <Navigation sectionsPage={sectionsPage} />
      </div>
      <section id="apropos" className="Apropos">
        <Apropos />
      </section>
      <section id="competences" className="competences">
        <Competences />
      </section>
      <section id="services" className="services">
        <Services />
      </section>
      <section id="news" className="contactetnews">
        <ContactNews />
      </section>
    </main>
  );
}

export default Home;
