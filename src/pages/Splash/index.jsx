import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/IV.webp";
import "../../style/css/splash.css";

function Splash() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLogoClick = () => {
    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect, navigate]);

  return (
    <main>
      <div className="splashbox" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
    </main>
  );
}

export default Splash;
