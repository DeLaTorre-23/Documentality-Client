import React from 'react';
import axios from 'axios';

import { LoginView } from '../LoginView/LoginView';
import { SingUpView } from '../SingUpView/SingUpView';
import { MovieCardView } from '../MovieCardView/MovieCardView';
import { MovieView } from '../MovieView/MovieView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      documentaries: null,
      selectedDocumentary: null,
      user: null,
      singUpSelected: null
    };

    this.removeDocumentaryFromSelected = this.removeDocumentaryFromSelected.bind(this)
  }

  componentDidMount() {
    axios
    .get('https://documentality.herokuapp.com/documentaries')
    .then(response => {
      // Assign the result to the state
      this.setState({
        documentaries: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  onDocumentaryClick(documentary) {
    this.setState({
      selectedDocumentary: documentary
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  removeDocumentaryFromSelected() {
    this.setState({
      selectedDocumentary: null
    });
  }

  onSingUp() {
    this.setState({
      singUpSelected: true
    })
}

  // This overrides the render() method of the superclass
  // No need to call super() though, as it does nothing by default
  render() {

    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries, selectedDocumentary, user, singUpSelected } = this.state;

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    //If there is no user and singUpRegistration is True, the SingUpView is rendered.
    if (!user && !singUpSelected) return <SingUpView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (!documentaries) return <div className="MainView"/>;

    return (
      <Row className=" MainView justify-content-md-center">
        {/*If the state of `selectedDocumentary` is not null, that selected movie will be returned otherwise, all *movies will be returned */}     
        {selectedDocumentary
          ? (
            <Col md={8}>
              <MovieView 
                documentary={selectedDocumentary} 
                removeDocumentaryFromSelected={this.removeDocumentaryFromSelected}
                //goBack={() => this.onMovieClick(null)}
                singUpSelected={singUpSelected}
              />
            </Col>
            )
          : documentaries.map(documentary => (
            <Col md={3}>
              <MovieCardView 
                key={documentary._id} 
                documentary={documentary} 
                onClick={documentary => this.onDocumentaryClick(documentary)}
              />
            </Col>
          ))
        }
      </Row>    
    ); 
  }
}