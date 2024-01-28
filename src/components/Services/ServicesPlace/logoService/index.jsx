import React, { useState } from "react";
import "../../../../style/css/logoservice.css";

function LogoService({ logoSrc, serviceName }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`logoservice ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="logoService">
        <div className="logoService__front">
          <img src={logoSrc} alt={`Logo ${serviceName}`} />
        </div>
        <div className="logoService__back">
          <p className="logoService__back__p">{serviceName}</p>
        </div>
      </div>
    </div>
  );
}

export default LogoService;
