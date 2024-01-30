import React from "react";
import { Link } from "react-router-dom";
import "../../../../style/css/actuitem.css";
import format from "date-fns/format";

function ActuItem({ id, title, description, date, onClick }) {
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <article>
      <div className="actu">
        <div className="actu__box" onClick={onClick}>
          <h2 className="actu__box__title">{title}</h2>
          <div className="actu__box__description">
            <p className="actu__box__description__p"></p>{" "}
          </div>
        </div>
        <div className="actu__date">
          <p className="actu__date__p">{formattedDate}</p>
        </div>
      </div>
    </article>
  );
}

export default ActuItem;
