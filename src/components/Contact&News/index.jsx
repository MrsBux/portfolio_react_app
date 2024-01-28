import React from "react";
import Contact from "./Contact/index.jsx";
import News from "./News/index.jsx";
import "../../style/css/contactnews.css";

function ContactNews() {
  return (
    <div className="contactnews">
      <div className="contactnews__contact">
        <Contact />
      </div>{" "}
      <div className="contactnews__news">
        <News />{" "}
      </div>
    </div>
  );
}

export default ContactNews;
