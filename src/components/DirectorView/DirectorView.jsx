import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

import "./DirectorView.scss";
export class DirectorView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

    const addFavorite = () => {
      console.log("Added in Favorite List");
    };

    return (
      <div className="movieView">
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
            <span className="value">{documentary.Genre.Name}</span>
          </div>

          <div className="movieDirector">
            <span className="labelBold">Director: </span>
            <span className="value">{documentary.Director.Name}</span>
          </div>

          <div className="btnMovieView">
            {/* Reload all the page*/}
            {/* <a href="window.history.back();">Go Back</a>*/}

            {/* Don't reload the page, just go back*/}
            <Button
              className="btnBack"
              onClick={this.props.removeDocumentaryFromSelected}
              variant="danger"
            >
              Go Back Me
            </Button>
            <Button className="btnAddFavorite" onClick={addFavorite}>
              Add to Favorites
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

MovieView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
