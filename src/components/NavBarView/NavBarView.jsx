import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logoDOC.svg";

import "./NavbarView.scss";

export class NavbarView extends Component {
  render() {
    const handleLoggedOut = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.open("/", "_self");
    };

    return (
      <Navbar
        className="navbarWrap"
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
            <NavLink to={`/`} className="navLink btn" variant="link">
              Documentaries
            </NavLink>

            <NavLink to={`/genres`} className="navLink btn" variant="link">
              Genres
            </NavLink>

            <NavLink to={`/directors`} className="navLink btn" variant="link">
              Directors
            </NavLink>

            <NavLink to={`/users`} className="navLink btn" variant="link">
              Profile
            </NavLink>

            <NavLink
              to={`/login`}
              className="navLink btn"
              variant="link"
              onClick={handleLoggedOut}
            >
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
