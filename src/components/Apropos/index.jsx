import "../../style/css/apropos.css";
import selfie from "../../assets/IMG_20231028_190955.webp";
import Btn from "../btn/boutons";
const remoteImageURL =
  "https://raw.githubusercontent.com/MrsBux/cv/main/selfie.png";

function Apropos() {
  const downloadCV = () => {
    // URL externe du fichier PDF
    const externalPDFUrl = "https://raw.github.com/MrsBux/cv/main/cv.pdf";
    // Créer un élément de lien temporaire
    const link = document.createElement("a");
    link.href = externalPDFUrl;
    link.target = "_blank"; // Ouvrir dans une nouvelle fenêtre/onglet
    link.download = "cv.pdf"; // Nom du fichier téléchargé

    // Ajouter le lien à la page et simuler un clic pour déclencher le téléchargement
    document.body.appendChild(link);
    link.click();

    // Nettoyer et supprimer le lien
    document.body.removeChild(link);
  };

  const btnArray = [
    {
      name: "Me contacter",
      className: "aproposbox__infos__btn__b",
      id: "btnaproposmecontecter",
      onClick: () =>
        (window.location.href = "mailto:camille.siessecuscusa@gmail.com"),
    },
    {
      name: "Télécharger le CV",
      className: "aproposbox__infos__btn__b",
      id: "btnaporpostcv",
      onClick: downloadCV,
    },
  ];

  return (
    <div className="aproposbox">
      <div className="aproposbox__infos">
        <h2>A PROPOS</h2>
        <p className="aproposbox__infos__p">
          Titulaire d'un cursus universitaire scientifique, j'ai enseigné
          pendant plusieurs années avant de me réorienter. Ma formation chez
          OpenClassroom m'a permis d'acquérir des compétences solides en
          développement web, maîtrisant les langages tels qu'HTML, CSS,
          JavaScript, et les environnements comme React et Node. Je maîtrise
          pleinement des outils essentiels tels que Git, Visual Studio Code et
          Wakelet, cruciaux dans le contexte contemporain du développement web.
          Mon champ de compétences inclut également la manipulation d'API pour
          concevoir des solutions numériques complètes. Ma curiosité naturelle
          est un atout que je déploie au service de projets, clients et
          rencontres. Mon engagement se manifeste par la création de solutions
          sur mesure en collaboration étroite avec mes clients, répondant ainsi
          à leurs besoins spécifiques
        </p>
        <div className="aproposbox__infos__btn">
          {btnArray.map((btn, index) => (
            <Btn
              key={`btn_${index}`}
              name={btn.name}
              className={btn.className}
              onClick={btn.onClick}
            />
          ))}
        </div>
      </div>
      <div className="aproposbox__img">
        <img
          src={remoteImageURL}
          className="aproposbox__img__selfie"
          alt="selfi"
        ></img>
      </div>
    </div>
  );
}

export default Apropos;
