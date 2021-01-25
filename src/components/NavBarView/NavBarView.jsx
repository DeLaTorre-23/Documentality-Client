import React, { Component } from "react";
import axios from "axios";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <Link to={`/home`}>
              <Button className="navLink" variant="link">
                Movies
              </Button>
            </Link>
            <Link to={`/genres`}>
              <Button className="navLink" variant="link">
                Genre
              </Button>
            </Link>
            <Link to={`/directors`}>
              <Button className="navLink" variant="link">
                Director
              </Button>
            </Link>
            <Link to={`/loginView`} onClick={handleLoggedOut}>
              <Button className="navLink" variant="link">
                Logout
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
