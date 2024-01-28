import React from "react";
import "../../style/css/navigation.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation({ sectionsPage }) {
  return (
    <div>
      <nav className="navbarpage">
        {sectionsPage.map((section, index) => (
          <a key={index} href={`#${section.id}`} className="navbarpage__link">
            {section.name}
          </a>
        ))}
      </nav>
      <div className="navbarmobile">
        <Navbar expand="lg" className="navbarpage">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {sectionsPage.map((section, index) => (
                <Nav.Link key={index} href={`#${section.id}`}>
                  {section.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
