import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { setDocumentaries } from "../../actions/actions";

import { LoginView } from "../LoginView/LoginView";
import { SignUpView } from "../SignUpView/SignUpView";
import { ProfileView } from "../ProfileView/ProfileView";
import MoviesList from "../MoviesList/MoviesList";
import { MovieView } from "../MovieView/MovieView";
import { DirectorView } from "../DirectorView/DirectorView";
import { GenreView } from "../GenreView/GenreView";
import { NavbarView } from "../NavbarView/NavbarView";
import { FooterView } from "../FooterView/FooterView";
import AllGenresView from "../GenreView/AllGenresView";
import AllDirectorsView from "../DirectorView/AllDirectorsView";
//import { Slider } from "../Slider/Slider";
import { ErrorView } from "../ErrorView/ErrorView";

import { Container } from "react-bootstrap";

import "./MainView.scss";

export class MainView extends Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      user: null,
    };
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

  /* A GET request is made to the 'documentaries' endpoint (of DOCumentality API using Axios) 
  by passing the bearer authorization */
  getDocumentaries(token) {
    axios
      .get("https://documentality.herokuapp.com/documentaries", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setDocumentaries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUserData(userToken, user) {
    axios
      .get(`https://documentality.herokuapp.com/users/${props.user}`, {
        headers: { Authorization: `Bearer ${props.userToken}` },
      })
      .then((response) => {
        let userData = response.data;
        this.setState({
          user: userData.Username,
          userToken: userToken,
          favoriteList: userData.FavoriteList,
          email: userData.Email,
          birthday: userData.Birthday,
          // password: userData.Password,
        });
        // console.log(userData);
        this.getDocumentaries(this.state.userToken);
      })
      .catch(function (error) {
        console.log(error);
      });
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

  render() {
    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries } = this.props;
    const { user } = this.state;

    // console.log(documentaries);
    const genres = documentaries.map((mov) => mov.Genre);
    const directors = documentaries.map((mov) => mov.Director);

    return (
      <React.Fragment>
        {!user ? (
          <Router>
            <Switch>
              <Route exact path="/signup" render={() => <SignUpView />} />
              <Route
                exact
                path="/"
                render={() => (
                  // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                )}
              />
            </Switch>
          </Router>
        ) : (
          <Router>
            <header>
              <NavbarView user={user} />
            </header>

            <Container className="center">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => {
                    return <MoviesList documentaries={documentaries} />;
                  }}
                />

                <Route
                  exact
                  path="/users"
                  render={() => (
                    <React.Fragment>
                      <ProfileView
                        user={user}
                        userToken={this.state.userToken}
                        documentaries={documentaries}
                      />
                    </React.Fragment>
                  )}
                />

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
                  exact
                  path="/directors"
                  render={() => {
                    return <AllDirectorsView />;
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
                        documentaries={documentaries.filter(
                          (m) => m.Director.Name === match.params.name
                        )}
                      />
                    );
                  }}
                />

                <Route
                  exact
                  path="/genres"
                  render={() => {
                    return <AllGenresView />;
                  }}
                />

                <Route
                  path="/genres/:name"
                  render={(props) => {
                    if (!documentaries.length)
                      return <div className="mainView" />;
                    return (
                      <GenreView documentaries={documentaries} {...props} />
                    );
                  }}
                />

                <Route path="*" component={ErrorView} />
              </Switch>
            </Container>

            <FooterView />
          </Router>
        )}
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return { documentaries: state.documentaries };
};

export default connect(mapStateToProps, { setDocumentaries })(MainView);
