import React from "react";
import axios from "axios";

import { LoginView } from "../LoginView/LoginView";
import { SingUpView } from "../SingUpView/SingUpView";
import { MovieCardView } from "../MovieCardView/MovieCardView";
import { MovieView } from "../MovieView/MovieView";
import { NavBarView } from "../NavBarView/NavBarView";

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
    };

    this.removeDocumentaryFromSelected = this.removeDocumentaryFromSelected.bind(
      this
    );
  }

  componentDidMount() {
    axios
      .get("https://documentality.herokuapp.com/documentaries")
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

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  onDocumentaryClick(documentary) {
    this.setState({
      selectedDocumentary: documentary,
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  onRegister(register) {
    this.setState({
      register,
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
    const { documentaries, selectedDocumentary, user, register } = this.state;

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    //If there is no user and singUpRegistration is True, the SingUpView is rendered.
    if (!register)
      return (
        <SingUpView onRegister={(register) => this.onRegister(register)} />
      );

    // Before the movies have been loaded
    if (!documentaries) return <div className="MainView" />;

    return (
      <React.Fragment>
        <div className="mainWrap">
          <header>{/*<NavBarView />*/}</header>

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
