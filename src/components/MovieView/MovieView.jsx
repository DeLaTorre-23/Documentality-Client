import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./MovieView.scss";

export class MovieView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

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
            <span className="value">
              <Link to={`/genres/${documentary.Genre.Name}`}>
                <Button className="btnGenreCardView" variant="link">
                  {documentary.Genre.Name}
                </Button>
              </Link>
            </span>
          </div>

          <div className="movieDirector">
            <span className="labelBold">Director: </span>
            <span className="value">
              <Link to={`/directors/${documentary.Director.Name}`}>
                <Button className="btnDirectorCardView" variant="link">
                  {documentary.Director.Name}
                </Button>
              </Link>
            </span>
          </div>

          <div className="btnMovieView">
            {/* Reload all the page*/}
            {/* <a href="window.history.back();">Go Back</a>*/}

            {/* Don't reload the page, just go back*/}
            <Link to={`/`}>
              <Button className="btnBack" variant="link">
                Go Back
              </Button>
            </Link>
            <Button className="btnAddFavorite" onClick={this.addFavorite}>
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
  onClick: PropTypes.func.isRequired,
};
