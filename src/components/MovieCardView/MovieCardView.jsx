import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Link to={`/documentaries/${documentary.Title}`}>
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

              <Button className="btnMovieCardView" variant="primary">
                {documentary.Title}
              </Button>
            </Card.Body>
          </Card>
        </Link>
      </React.Fragment>
    );
  }
}

{
  /*
  <Card
        onClick={() => onClick(documentary)}
        border='danger'
        style={{ width: '200', height: 'auto' }}
      >
        <Card.Header>{documentary.Title}</Card.Header>
        <img
          className='moviePoster'
          src={documentary.ImagePath}
          alt='movie poster'
        />
      </Card>
    */
}

{
  /*
    // <div onClick={() => onClick(documentary)} className="MovieCardView">{documentary.Title}</div>
      <Card 
        className="movieCard" 
        onClick={() => onClick(documentary)} >
        {/*<Card.Body>
          <Card.Title>{documentary.Title + ' - ' + documentary.Released}</Card.Title>
          <Card.Text>{documentary.Description}</Card.Text>     
        </Card.Body>*/
}
{
  /*
        <Card.Body className="movieCardBody">
          <Card.Img variant="top" src={documentary.ImagePath} />
          <Button
                className="btnMovieCardView"
                variant='primary'
                onClick={() => onClick(documentary)}
              >  
                {documentary.Title}
          </Button>
        </Card.Body>
      </Card>   
    */
}

MovieCardView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
