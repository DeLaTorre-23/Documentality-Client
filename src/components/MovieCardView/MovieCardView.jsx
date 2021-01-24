import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import "./MovieCardView.scss";

export class MovieCardView extends Component {
  render() {
    // This is given to the <MovieCardView/> component by the outer world
    // which, in this case, is 'MainView', as 'MainView' is what's
    // connected to your database via the movies endpoint of your API
    const { documentary } = this.props;

    return (
      <React.Fragment>
        <Card className="movieCard">
          <Card.Body className="movieCardBody">
            {/*
            <Card.Title>{documentary.Title + ' - ' + documentary.Released}</Card.Title>
            <Card.Text>{documentary.Description}</Card.Text>     
            */}
            <Card.Img
              className="movieCardImg"
              variant="top"
              src={documentary.ImagePath}
            />
            <Link to={`/documentaries/${documentary._id}`}>
              <Button className="btnMovieCardView" variant="primary">
                {documentary.Title}
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

MovieCardView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
