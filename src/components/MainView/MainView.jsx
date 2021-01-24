import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginView } from "../LoginView/LoginView";
import { SingUpView } from "../SingUpView/SingUpView";
import { NavBarView } from "../NavBarView/NavBarView";
import { MovieCardView } from "../MovieCardView/MovieCardView";
import { MovieView } from "../MovieView/MovieView";
import { ProfileView } from "../ProfileView/ProfileView";

import { Container } from "react-bootstrap";

import "./MainView.scss";

export class MainView extends Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      documentaries: [],
      /*selectedDocumentary: null,*/
      user: null,
      singUp: null,
    };

    this.removeDocumentaryFromSelected = this.removeDocumentaryFromSelected.bind(
      this
    );
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getDocumentaries(accessToken);
      this.getUserData(accessToken, user);
    }
  }

  /* When a user successfully logs in, this function updates 
  the `user` property in state to that *particular user*/
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getUserData(authData.token, authData.user.Username);
    //this.getDocumentaries(authData.token);
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
        localStorage.clear();
      });
  }

  getUserData(userToken, user) {
    axios
      .get("https://documentality.herokuapp.com/users/${user}", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        let userData = response.data;
        this.setState({
          user: userData.Username,
          userToken: userToken,
          favoriteMovies: userData.FavoriteMovies,
          email: userData.Email,
          birthday: userData.Birthday,
        });
        this.getDocumentaries(this.state.userToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  /*onDocumentaryClick(documentary) {
    this.setState({
      selectedDocumentary: documentary,
    });
  }

  removeDocumentaryFromSelected() {
    this.setState({
      selectedDocumentary: null,
    });
  }*/

  render() {
    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries, /*selectedDocumentary,*/ user } = this.state;

    // Before the movies have been loaded
    if (!documentaries) return <div className="MainView" />;

    return (
      <div className="mainWrap">
        <header>
          <NavBarView user={user} />
        </header>

        <Router>
          <Container className="mainView">
            <Route
              exact
              path="/"
              render={() => {
                // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
                if (!user)
                  return (
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  );
                return documentaries.map((m) => (
                  <MovieCardView
                    user={user}
                    userToken={this.state.userToken}
                    key={m._id}
                    documentary={m}
                    addFavorite={
                      this.state.favoriteDocumentaries.includes(m._id)
                        ? false
                        : true
                    }
                  />
                ));
              }}
            />
            <Route path="/singUp" render={() => <SingUpView />} />

            <Route
              path="/documentaries/:documentaryId"
              render={({ match }) => (
                <MovieView
                  documentary={documentaries.find(
                    (m) => m._id === match.params.documentaryId
                  )}
                  user={user}
                  userToken={
                    this.state.favoriteDocumentaries.includes(
                      match.params.documentaryId
                    )
                      ? false
                      : true
                  }
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
              render={({ match }) => (
                <GenreView
                  genre={
                    documentaries.find(
                      (m) => m.Genre.Name === match.params.name
                    ).Genre
                  }
                  documentaries={documentaries.filter(
                    (m) => m.Genre.Name === match.params.name
                  )}
                />
              )}
            />

            <Route
              path="/singUp"
              render={({ match }) => (
                <ProfileView
                  user={user}
                  userToken={this.state.suerToken}
                  documentaries={documentaries}
                />
              )}
            />
          </Container>
        </Router>
      </div>
    );
  }
}

{
  /* 
<Row className=" justify-content-md-center">
              {/*If the state of `selectedDocumentary` is not null, that selected movie will be returned otherwise, all *movies will be returned */
}
{
  /*{selectedDocumentary ? (
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
*/
}
