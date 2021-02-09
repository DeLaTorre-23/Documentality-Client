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

    return (
      <React.Fragment>
        <Link to={`/documentaries/${documentaries.Title}`}>
          <Card className="movieCard">
            <Card.Body className="movieCardBody">
              {/*
              <Card.Title>{documentary.Title + ' - ' + documentary.Released}</Card.Title>
              <Card.Text>{documentary.Description}</Card.Text>     
              */}
              <Card.Img
                className="movieCardImg"
                variant="top"
                src={documentaries.ImagePath}
              />

              <Button className="btnMovieCardView" variant="primary">
                {documentaries.Title}
              </Button>
            </Card.Body>
          </Card>
        </Link>
      </React.Fragment>
    );
  }
}

// MovieCardView.propTypes = {
//   documentary: PropTypes.shape({
//     Title: PropTypes.string.isRequired,
//     ImagePath: PropTypes.string.isRequired,
//   }).isRequired,
// };
