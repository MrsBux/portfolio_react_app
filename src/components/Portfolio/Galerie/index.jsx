import React, { useState, useEffect } from "react";
import ModaleInfo from "../ModaleInfo/index.jsx";
import "../../../style/css/galerie.css";
import essai1 from "../../../assets/back.webp";
import essai2 from "../../../assets/front.webp";
import CartP from "./CartP/index.jsx";
import Btn from "../../btn/boutons.jsx";
import ModaleAdmin from "../ModaleAdmin/index.jsx";
import useAuthStore from "../../../stores/authStore.js";
import { useFetch } from "../../../utils/hooks/index.jsx";

function Galerie() {
  const [showModalProject, setShowModalProject] = useState(false);
  const [showModalAdmin, setShowModalAdmin] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProject, setVisibleProject] = useState(8);
  const [projects, setProjects] = useState([]); // Nouvel état pour stocker les données d'actus
  const { isAdminLoggedIn, login, logout } = useAuthStore();

  const {
    data: projectArray,
    isLoading,
    error,
    fetchData, // Destructure the fetchData function from the hook
  } = useFetch("https://apiportfolio-10b0ce5793e3.herokuapp.com/api/projects");

  useEffect(() => {
    if (projectArray) {
      setProjects(projectArray);
    }
  }, [projectArray]);

  const updateProject = async () => {
    const currentLength = projects.length;
    await fetchData();

    // Mise à jour uniquement si la longueur actuelle des actualités a changé
    if (projects.length !== currentLength) {
      setProjects(projectArray);
    }
  };

  useEffect(() => {
    if (showModalProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Nettoyer l'effet lors du démontage du composant
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModalProject]);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  const handleCartPClick = (project) => {
    console.log("Clic sur CartP", project);
    setSelectedProject(project);
    setShowModalProject(true);
  };

  const renderModalContentProject = (project) => {
    if (showModalProject && project) {
      return (
        <div>
          <ModaleInfo
            closeModal={() => setShowModalProject(false)}
            id={project._id}
            titre={project.title}
            descourte={project.descriptionCourte}
            imagesArray={project.images}
            description={project.descriptionLongue}
            repoGit={project.lienRepoGit}
            langages={project.langages}
            categorie={project.categories}
            duree={project.duree}
            URLprojet={project.lienProjet}
            updateProject={updateProject}
          />
        </div>
      );
    }
    return null;
  };

  console.log("Project Array", projectArray);

  const renderModalAdmin = () => {
    if (showModalAdmin) {
      return (
        <ModaleAdmin
          closeModal={() => setShowModalAdmin(false)}
          updateProject={updateProject}
        />
      );
    }
    return null;
  };

  const handleVoirMoinsClick = () => {
    setVisibleProject(8); // Revenir à l'état initial (afficher seulement les trois premières actus)
  };

  const handleVoirPlusClick = () => {
    // Affiche plus de projets lors du clic sur "Voir plus"
    setVisibleProject(projectArray ? projectArray.length : 8);
  };

  return (
    <div className={`galeriebox ${showModalProject ? "modal-open" : ""}`}>
      {projectArray &&
        projectArray.slice(0, visibleProject).map((project, index) => (
          <CartP
            key={index}
            id={project._id}
            imgsrc={project.coverURL}
            title={project.title}
            onClick={() => {
              handleCartPClick(project);
              console.log("URL de l'image :", project.coverURL);
            }}
          />
        ))}

      <div className="galeriebox__btn">
        {projectArray && projectArray.length > visibleProject && (
          <Btn
            key="btnPlusDeFiltres"
            name="Plus de projets"
            onClick={handleVoirPlusClick}
            className="galeriebox__btn__plusmoins"
          />
        )}
        {visibleProject > 8 && (
          <Btn
            key="btnVoirMoins"
            name="Voir moins"
            onClick={handleVoirMoinsClick}
            className="galeriebox__btn__plusmoins"
          />
        )}
        <div
          className={`galeriebox__btn__modaladmin ${
            isAdminLoggedIn ? "logged" : "not-logged"
          }`}
        >
          <Btn
            key="ShowmodalAdmin"
            name="Ajouter un nouveau projet"
            onClick={() => {
              console.log("Click bouton");
              setShowModalAdmin(true);
            }}
            className="galeriebox__btn__modaladmin"
          />
        </div>
      </div>
      {renderModalContentProject(selectedProject)}
      {renderModalAdmin()}
    </div>
  );
}

export default Galerie;
