import React from "react";
import ServicesPlace from "./ServicesPlace";
import Test from "./Test";
import "../../style/css/services.css";

function Services() {
  return (
    <div className="servicesbox">
      <div className="servicesbox__place">
        <ServicesPlace />
      </div>{" "}
      <div className="servicesbox__test">
        <Test />{" "}
      </div>
    </div>
  );
}

export default Services;
