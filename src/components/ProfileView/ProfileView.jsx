import React, { Component } from "react";
import { NavbarView } from "../NavbarView/NavbarView";
import { FooterView } from "../FooterView/FooterView";

export class ProfileView extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarView />
        <Container className="center">
          {/* SLIDER Favorite Movies */}
          <h2>Hello User</h2>
        </Container>
        <FooterView />
      </React.Fragment>
    );
  }
}
