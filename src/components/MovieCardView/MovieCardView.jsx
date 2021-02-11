import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./MovieCardView.scss";

export class MovieCardView extends Component {
  render() {
    //console.log(this.props.documentary);
    // This is given to the <MovieCardView/> component by the outer world
    // which, in this case, is 'MainView', as 'MainView' is what's
    // connected to your database via the movies endpoint of your API
    const { documentaries } = this.props;
    //console.log(this.props);

    return (
      <Card className="movieCard">
        <Card.Body className="movieCardBody">
          <Card.Img
            className="movieCardImg"
            variant="top"
            src={documentaries.ImagePath}
          />
          <Link
            className="btnMovieCardView btn btn-primary btn-block"
            to={`/documentaries/${documentaries.Title}`}
          >
            {documentaries.Title}
          </Link>
          {this.props.profile && (
            <Button
              variant="danger"
              onClick={() => this.props.updateFavorites(documentaries._id)}
              block
            >
              Remove
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

MovieCardView.propTypes = {
  documentaries: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
