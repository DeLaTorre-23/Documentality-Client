import React, { Component } from "react";

import axios from "axios";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./MovieView.scss";
export class MovieView extends Component {
  constructor(props) {
    super(props);

    let addFavorite = false;
    if (props.addFavorite) {
      addFavorite = true;
    }
    //don't set state like this its not good practice
    // i will allow it for now
    //username is empty so i will take it from the local storage
    this.state = {
      documentary: this.props.documentary,
      username: localStorage.getItem("user"), //this.props.user,
      userToken: this.props.userToken,
      addFavorite: addFavorite,
    };
  }

  addFavorite = () => {
    this.setState({
      addFavorite: false,
    });
    // in your own code your routes from your backend doesn't
    // match your url here
    // it received the id not the name of the movie
    //test it and tell me

    axios({
      method: "post",
      url: `https://documentality.herokuapp.com/users/${this.state.username}/Documentaries/${this.state.documentary._id}`,
      headers: { Authorization: `Bearer ${this.state.userToken}` },
      data: {},
    })
      .then((response) => {
        const data = response.data;
        console.log("New Documentary added");
      })
      .catch((e) => {
        console.log(e);
        console.log("Documentary not added");
      });
  };

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

    return (
      <Container className="movieView">
        <img className="moviePoster" src={documentary.ImagePath} />
        <div className="movieInfo">
          <div className="movieTitle">
            <span className="labelBold">Title: </span>
            <span className="value">{documentary.Title}</span>
          </div>

          <div className="movieDescription">
            <span className="labelBold">Description: </span>
            <span className="value">{documentary.Description}</span>
          </div>

          <div className="movieGenre">
            <span className="labelBold">Genre: </span>
            <Link to={`/genres/${documentary.Genre.Name}`}>
              <span className="value">
                <Button variant="link">{documentary.Genre.Name}</Button>
              </span>
            </Link>
          </div>

          <div className="movieDirector">
            <span className="labelBold">Director: </span>
            <Link to={`/directors/${documentary.Director.Name}`}>
              <span className="value">
                <Button variant="link">{documentary.Director.Name}</Button>
              </span>
            </Link>
          </div>

          <div className="btnMovieView">
            <Link to={`/`}>
              <Button className="btnBack" variant="danger">
                Go Back Me
              </Button>
            </Link>

            <Button className="btnAddFavorite" onClick={this.addFavorite}>
              Add to Favorites
            </Button>

            <Button
              className="btnDeleteFavorite"
              variant="warning"

              //onClick={this.deleteFavorite(documentaries)}
            >
              Remove from Favorites
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
