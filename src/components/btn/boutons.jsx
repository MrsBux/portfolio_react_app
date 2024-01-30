import "../../style/css/btn.css";
import React from "react";

function Btn({ name, className, onClick }) {
  return (
    <div className="btnbox">
      <button id="btn" className={className} onClick={onClick}>
        {" "}
        {name}{" "}
      </button>
    </div>
  );
}
export default Btn;
