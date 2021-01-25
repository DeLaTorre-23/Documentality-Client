import React from "react";
import axios from "axios";

import { LoginView } from "../LoginView/LoginView";
import { NavBarView } from "../NavBarView/NavBarView";
// import { SingUpView } from "../SingUpView/SingUpView";
import { MovieCardView } from "../MovieCardView/MovieCardView";
import { MovieView } from "../MovieView/MovieView";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import "./MainView.scss";

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      documentaries: null,
      selectedDocumentary: null,
      user: null,
      singUp: null,
      addFavorite: {},
    };

    this.removeDocumentaryFromSelected = this.removeDocumentaryFromSelected.bind(
      this
    );
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

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  onDocumentaryClick(documentary) {
    this.setState({
      selectedDocumentary: documentary,
    });
  }

  removeDocumentaryFromSelected() {
    this.setState({
      selectedDocumentary: null,
    });
  }

  // This overrides the render() method of the superclass
  // No need to call super() though, as it does nothing by default
  render() {
    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries, selectedDocumentary, user, loggedOut } = this.state;

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (!documentaries) return <div className="MainView" />;

    return (
      <React.Fragment>
        <div className="mainWrap">
          <header>
            <NavBarView documentary={loggedOut} />
          </header>

          <Container className="mainView">
            <Row className=" justify-content-md-center">
              {/*If the state of `selectedDocumentary` is not null, that selected movie will be returned otherwise, all *movies will be returned */}
              {selectedDocumentary ? (
                <MovieView
                  documentary={selectedDocumentary}
                  removeDocumentaryFromSelected={
                    this.removeDocumentaryFromSelected
                  }
                  //goBack={() => this.onMovieClick(null)}
                  //singUp={singUp}
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
        </div>
      </React.Fragment>
    );
  }
}
