import React, { Component } from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { LoginView } from "../LoginView/LoginView";
import { SignUpView } from "../SignUpView/SignUpView";
import { ProfileView } from "../ProfileView/ProfileView";
import { MovieCardView } from "../MovieCardView/MovieCardView";
import { MovieView } from "../MovieView/MovieView";
import { DirectorView } from "../DirectorView/DirectorView";
import { GenreView } from "../GenreView/GenreView";
import { NavbarView } from "../NavbarView/NavbarView";
import { FooterView } from "../FooterView/FooterView";
//import { Slider } from "../Slider/Slider";
import { ErrorView } from "../ErrorView/ErrorView";

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
    const { documentaries, user } = this.state;
    // console.log(documentaries);
    const genres = documentaries.map((mov) => mov.Genre);

    const directors = documentaries.map((mov) => mov.Director);

    // console.log(genres);
    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
    //if (!user)
    // return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    // if (!documentaries) return <div className="MainView" />;

    return (
      <React.Fragment>
        {user ? (
          <Router>
            <React.Fragment>
              <header>
                <NavbarView />
              </header>
              {/*<Slider />*/}
            </React.Fragment>

            <Container className="center">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => {
                    return documentaries.map((m) => (
                      <MovieCardView key={m.Title} documentary={m} />
                    ));
                  }}
                />

                <Route exact path="/profile" render={() => <ProfileView />} />

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
                  exact
                  path="/directors"
                  render={() => {
                    return directors.map((elm, idx) => (
                      <div key={idx}>
                        <li>{elm.Name}</li>
                      </div>
                    ));
                  }}
                />
                <Route
                  path="/genres"
                  render={() => {
                    return genres.map((elm, idx) => (
                      <div key={idx}>
                        <li>
                          {elm.Name} - {elm.Description}
                        </li>
                      </div>
                    ));
                  }}
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
                        directors={documentaries}
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
                        genre={
                          documentaries.find(
                            (m) => m.Genre.Name === match.params.name
                          ).Genre
                        }
                        genres={documentaries}
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
                        genre={
                          documentaries.find(
                            (m) => m.Genre.Name === match.params.name
                          ).Genre
                        }
                        genres={documentaries}
                      />
                    );
                  }}
                />

                <Route path="*" component={ErrorView} />
              </Switch>
            </Container>

            <FooterView />
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route exact path="/signup" render={() => <SignUpView />} />
              <Route
                exact
                path="/"
                render={() => (
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                )}
              />
            </Switch>
          </Router>
        )}
      </React.Fragment>
    );
  }
}
