import Accordion from "react-bootstrap/Accordion";
import React from "react";
import "../../style/css/menu.css";

function Menu({ numberKey, title, text }) {
  return (
    <Accordion className="menu" flush>
      <Accordion.Item eventKey={numberKey}>
        <Accordion.Header id="menu_title">{title}</Accordion.Header>
        <Accordion.Body className="menu_name">{text}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Menu;
