import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./DirectorView.scss";
export class DirectorView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { director } = this.props;

    return (
      <div className="directorView">
        <div className="directorName">
          <span className="label">Name: </span>
          <span className="value">{director.Name}</span>
        </div>
        <br />
        <div className="directorBio">
          <span className="label">Description: </span>
          <span className="value">{director.Bio}</span>
        </div>
        <br />
        <div className="directorBirth">
          <span className="label">Birth: </span>
          <span className="value">{director.Birthyear}</span>
        </div>
        <br />
        <div className="director-movies">
          <span className="label">Documentaries: </span>
          {documentaries.map((m) => (
            <div className="documentary" key={m._id}>
              {m.Title}
            </div>
          ))}
        </div>
        <br />
        <Link to={"/"}>
          <Button variant="outline-danger">Back</Button>
        </Link>
      </div>
    );
  }
}

DirectorView.propTypes = {
  Director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
  }),
};
