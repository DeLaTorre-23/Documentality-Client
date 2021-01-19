import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/";

import "./NavBarView.scss";
export class NavBarView extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Documentaries">Movies</Nav.Link>
            <Nav.Link href="#Genre">Genre</Nav.Link>
            <Nav.Link href="#Director">Director</Nav.Link>
            <Nav.Link href="#Login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
