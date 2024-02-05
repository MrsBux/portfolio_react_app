import React from "react";
import "../../../../style/css/cartp.css";

function CartP({ imgsrc, title, onClick }) {
  return (
    <div className="cartP" onClick={onClick}>
      <div className="cartP__container">
        <div className="cartP__container__lay">
          <img
            src={imgsrc}
            alt="logement"
            className="cartP__container__lay__img"
          ></img>

          <div className="cartP__container__lay__gradient-overlay"></div>
        </div>{" "}
        <div className="cartP__container__title">
          <h3> {title}</h3>
        </div>
      </div>
    </div>
  );
}

export default CartP;
