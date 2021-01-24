import React, { Component } from "react";
import axios from "axios";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import { NavLink } from "react-router-dom/NavLink";
import logo from "../../assets/logoDOC.png";

// import Logo from "../../assets/images/logoDoc.png";
import "./NavBarView.scss";
export class NavBarView extends Component {
  render() {
    const handleLoggedOut = (e) => {
      e.preventDefault();
      axios.get("https://documentality.herokuapp.com/login");

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    };

    return (
      <Navbar
        className="navBarWrap"
        collapseOnSelect
        expand="lg"
        sticky="top"
        //bg="dark"
        //variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <div className="logo">
            <img
              src={logo}
              className="logoImg d-inline-block align-top"
              alt="DOCumentality"
            />
            <span id="brand">
              <strong>DOC</strong>umentality
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBarLinks">
            <Nav.Link to={`/documentaries`}>Movies</Nav.Link>
            <Nav.Link to={`/genres`}>Genre</Nav.Link>
            <Nav.Link to={`/directors`}>Director</Nav.Link>
            <Nav.Link to={`/login`} onClick={handleLoggedOut}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
