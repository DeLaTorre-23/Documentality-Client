import React, { Component } from "react";
import PropTypes from "prop-types";

import { ErrorView } from "../ErrorView/ErrorView";

import { Link } from "react-router-dom";

import "./DirectorView.scss";
export class DirectorView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { director, documentaries } = this.props;

    if (!director) return <ErrorView />;

    return (
      <div className="directorView">
        <h2>Director Info</h2>
        <hr />
        <div className="cardBodyInfo">
          <div className="directorName">
            <span className="labelBold">Name: </span>
            <span className="value">{director.Name}</span>
          </div>
          <br />

          <div className="directorBio">
            <span className="labelBold">Description: </span>
            <span className="value">{director.Bio}</span>
          </div>
          <br />

          <div className="directorBirth">
            <span className="labelBold">Birth: </span>
            <span>{director.Birth.length ? director.Birth : " - "}</span>
          </div>

          <hr className="lastHr" />
          <div className="directorDocumentaries">
            <span className="labelBold">More Documentaries: </span>
            {documentaries.map((documentaries) => (
              <div className="documentary" key={documentaries.Title}>
                <Link
                  to={`/documentaries/${documentaries.Title}`}
                  className="link"
                >
                  {documentaries.Title}
                </Link>
              </div>
            ))}
          </div>
          <br />
        </div>
        {/*<Link to={`/documentaries/${documentary.Title}`}>*/}
        <Link to={`/`} className="btn btn-danger btnBack">
          Go Back Me
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
