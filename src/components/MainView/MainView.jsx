import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginView } from "../LoginView/LoginView";
import { SingUpView } from "../SingUpView/SingUpView";
import { MovieCardView } from "../MovieCardView/MovieCardView";
import { MovieView } from "../MovieView/MovieView";
import { DirectorView } from "../DirectorView/DirectorView";
import { GenreView } from "../GenreView/GenreView";
import { NavbarView } from "../NavbarView/NavbarView";
import { FooterView } from "../FooterView/FooterView";
//import { ErrorView } from "../ErrorView/ErrorView";

import { Container } from "react-bootstrap";

import "./MainView.scss";

export class MainView extends Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      documentaries: [],
      //selectedDocumentary: null,
      user: null,
      //singUp: null,
      //addFavorite: {},
    };
  }

  /* A GET request is made to the 'documentaries' endpoint (of DOCumentality API using Axios) 
  by passing the bearer authorization */
  getDocumentaries(token) {
    axios
      .get("https://documentality.herokuapp.com/documentaries", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          // Its bring data from the response/API
          documentaries: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getDocumentaries(accessToken);
    }
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getDocumentaries(authData.token);
  }

  // This overrides the render() method of the superclass
  // No need to call super() though, as it does nothing by default
  render() {
    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries, user, loggedOut } = this.state;

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (!documentaries) return <div className="MainView" />;

    return (
      <Router>
        <header>
          <NavbarView documentary={loggedOut} />
        </header>
        <Route path="/SingUp" render={({ match }) => <SingUpView />} />
        <Container className="center">
          <Route
            exact
            path="/"
            render={() =>
              documentaries.map((m) => (
                <MovieCardView key={m.Title} documentary={m} />
              ))
            }
          />
          <Route
            exact
            path="/home"
            render={() =>
              documentaries.map((m) => (
                <MovieCardView key={m.Title} documentary={m} />
              ))
            }
          />

          {/*/documentaries/:Title*/}
          <Route
            path="/documentaries/:documentaryTitle"
            render={({ match }) => (
              <MovieView
                documentary={documentaries.find(
                  (m) => m.Title === match.params.documentaryTitle
                )}
              />
            )}
          />
          <Route
            path="/directors/:name"
            render={({ match }) => {
              if (!documentaries) return <div className="mainView" />;
              return (
                <DirectorView
                  director={
                    documentaries.find(
                      (m) => m.Director.Name === match.params.name
                    ).Director
                  }
                  documentaries={documentaries.filter(
                    (m) => m.Director.Name === match.params.name
                  )}
                />
              );
            }}
          />
          <Route
            path="/genres/:name"
            render={({ match }) => {
              if (!documentaries) return <div className="mainView" />;
              return (
                <GenreView
                  director={
                    documentaries.find(
                      (m) => m.Genre.Name === match.params.name
                    ).Genre
                  }
                  documentaries={documentaries.filter(
                    (m) => m.Genre.Name === match.params.name
                  )}
                />
              );
            }}
          />
        </Container>
        {/*
        <Switch>
          <Route component={ErrorView} />
        </Switch>
        */}

        <FooterView />
      </Router>
    );
  }
}

{
  /*
<Container className="mainView">
  <Row className=" justify-content-md-center">
    {If the state of `selectedDocumentary` is not null, that selected movie will be returned otherwise, all *movies will be returned }
    {selectedDocumentary ? (
      <MovieView
        documentary={selectedDocumentary}
        removeDocumentaryFromSelected={
          this.removeDocumentaryFromSelected
        }
      />
    ) : (
      documentaries.map((documentary) => (
        <Col>
          <MovieCardView
            key={documentary._id}
            documentary={documentary}
            onClick={(documentary) =>
              this.onDocumentaryClick(documentary)
            }
          />
        </Col>
      ))
    )}
  </Row>
</Container>
*/
}
