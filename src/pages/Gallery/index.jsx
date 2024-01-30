import Contact from "../../components/Contact&News/Contact/index.jsx";
import React from "react";
import Portfolio from "../../components/Portfolio/index.jsx";
import Navigation from "../../components/Navigation/index.jsx";

import "../../style/css/gallery.css";

function Gallery() {
  const sectionsPage = [
    { id: "galerie", name: "Galerie" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <main>
      <div className="gallery">
        <div id="galerie" className="gallery__navpagebar">
          <Navigation sectionsPage={sectionsPage} />
        </div>
        <h1 className="gallery__title"> PORTFOLIO BUX WEB COMPAGNIE </h1>
        <section id="galerie" className="gallery__portfolio">
          <Portfolio />
        </section>
        <section id="contact" className="gallery__contactgallery">
          <Contact />
        </section>
      </div>
    </main>
  );
}

export default Gallery;
