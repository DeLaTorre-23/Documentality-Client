import React, { Component } from "react";
import PropTypes from "prop-types";

//import ErrorView from "./ErrorView/ErrorView";

import Button from "react-bootstrap/Button";

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
            <React.Fragment>
              <span className="value">
                {director.Birth && (
                  <React.Fragment>{director.Birth}</React.Fragment>
                )}
                {!director.Birth && <React.Fragment>{"-"}</React.Fragment>}
              </span>
            </React.Fragment>
          </div>
          <hr className="lastHr" />
          <div className="directorDocumentaries">
            <span className="labelBold">More Documentaries: </span>
            {documentaries.map((m) => (
              <div className="documentary" key={m._id}>
                {m.Title}
              </div>
            ))}
          </div>
          <br />
        </div>
        <Link to={"/"}>
          <Button variant="danger" className="btnBack">
            Go Back Me
          </Button>
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
