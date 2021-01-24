import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./GenreView.scss";

export class GenreView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentaries, genre } = this.props;

    if (!genre) return null;

    return (
      <div className="genreView">
        <div className="genreName">
          <span className="label">Name: </span>
          <span className="value">{genre.Name}</span>
        </div>
        <br />
        <div className="genreDescription">
          <span className="label">Description: </span>
          <span className="value">{genre.Description}</span>
        </div>
        <br />
        <div className="genreDocumentaries">
          <span className="label">Documentaries: </span>
          {documentaries.map((m) => (
            <div className="genreDocumentariesList" key={m._id}>
              {m.Title}
            </div>
          ))}
        </div>
        <Link to={`/`}>
          <Button className="btnBack" variant="link">
            Go Back
          </Button>
        </Link>
      </div>
    );
  }
}

GenreView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.shape.isRequired,
    }).isRequired,
  }),
};
