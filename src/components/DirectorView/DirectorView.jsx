import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import "./DirectorView.scss";

export class DirectorView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentaries, director } = this.props;

    if (!director) return null;

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
          <span className="value">{director.Birth}</span>
        </div>
        <br />
        <div className="directorDeath">
          <span className="label">Death: </span>
          <span className="value">{director.Death}</span>
        </div>
        <br />
        <div className="directorDocumentaries">
          <span className="label">Documentaries: </span>
          {documentaries.map((m) => (
            <div className="directorDocumentariesList" key={m._id}>
              {m.Title}
            </div>
          ))}
        </div>
        <Link to={"/"}>
          <Button className="btnBack" variant="link">
            Go Back
          </Button>
        </Link>
      </div>
    );
  }
}

DirectorView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.shape.isRequired,
      Birth: PropTypes.string.shape.isRequired,
      Death: PropTypes.string.shape.isRequired,
    }).isRequired,
  }),
};
