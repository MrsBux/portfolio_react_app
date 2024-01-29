import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Services from "./pages/Services/index";
import Gallery from "./pages/Gallery/index";
import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home/index.jsx";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import ActuInfo from "./components/Contact&News/News/ActuInfo/index.jsx";
import "./style/css/index.css";
import Splash from "./pages/Splash/index.jsx";
import useAuthStore from "./stores/authStore.js";

const App = () => {
  const { login } = useAuthStore();

  useEffect(() => {
    // Vérifiez si un token est présent dans le stockage local
    const storedToken = window.localStorage.getItem("token");

    if (storedToken) {
      // S'il y a un token, connectez automatiquement l'utilisateur
      login();
    }
  }, []); // Le tableau vide en tant que dépendance signifie que cela s'exécute une seule fois au montage

  return (
    <div className="all">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/actus/:id" element={<ActuInfo />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
