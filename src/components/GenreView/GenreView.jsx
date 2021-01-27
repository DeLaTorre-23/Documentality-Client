import React, { Component } from "react";
import PropTypes from "prop-types";

//import ErrorView from "./ErrorView/ErrorView";

import Button from "react-bootstrap";

import { Link } from "react-router-dom";

import "./GenreView.scss";
export class GenreView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { genre, documentaries } = this.props;

    //if (!genre) return <ErrorView />;

    return (
      <div className="genreView">
        <h2>Genre Info</h2>
        <hr />
        <div className="cardBodyInfo">
          <div className="genreName">
            <span className="labelBold">Name: </span>
            <span className="value">{`/genre.Name`}</span>
          </div>
          <br />
          <div className="genreDescription">
            <span className="labelBold">Description: </span>
            <span className="value">{genre.Description}</span>
          </div>
          <div className="genreDocumentaries">
            <span className="labelBold">More Documentaries: </span>
            {documentaries.map((m) => (
              <div className="documentary" key={m.Title}>
                {m.Title}
              </div>
            ))}
          </div>
          <br />
        </div>
        <Link to={"/home"}>
          <Button variant="danger" className="btnBack">
            Go Back Me
          </Button>
        </Link>
      </div>
    );
  }
}

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
};
