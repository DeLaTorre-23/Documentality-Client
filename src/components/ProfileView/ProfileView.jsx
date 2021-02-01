import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

import "./ProfileView.scss";
export class ProfileView extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* SLIDER Favorite Movies */}
        <div className="center">
          <h3 className="user-name">James</h3>
        </div>

        <Container className="body-container">
          <div className="body-info">
            <div className="user-avatar">
              <img className="img-avatar" src="#" />
            </div>

            <div className="user-info">
              <div className="user-email">
                <span className="labelBold">Email: </span>
                <span className="value">x</span>
              </div>

              <div className="user-birthday">
                <span className="labelBold">Birth date: </span>
                <span className="value">x</span>
              </div>

              <div className="user-Password">
                <span className="labelBold">Password: </span>
                <span className="value">x</span>
              </div>
            </div>
          </div>

          <hr />
          <div className="btn-container">
            <Button className="btnDelete" variant="warning">
              Edit account
            </Button>

            <Button className="btnAddFavorite" variant="primary">
              Favorite List
            </Button>

            <Button className="btnDelete" variant="danger">
              Delete account
            </Button>
          </div>
          <hr />
          <div className="btnBack-container">
            <Link to={`/`}>
              <Button className="btnBack" variant="dark">
                Go Back Me
              </Button>
            </Link>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
