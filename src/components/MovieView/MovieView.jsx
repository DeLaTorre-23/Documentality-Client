import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./MovieView.scss";
export class MovieView extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

    const addFavorite = () => {
      console.log("Added in Favorite List");
    };

    return (
      <Container className="movieView">
        <img className="moviePoster" src={documentary.ImagePath} />
        <div className="movieInfo">
          <div className="movieTitle">
            <span className="labelBold">Title: </span>
            <span className="value">{documentary.Title}</span>
          </div>

          <div className="movieDescription">
            <span className="labelBold">Description: </span>
            <span className="value">{documentary.Description}</span>
          </div>

          <div className="movieGenre">
            <span className="labelBold">Genre: </span>
            <Link to={`/genres/${documentary.Genre.Name}`}>
              <span className="value">
                <Button variant="link">{documentary.Genre.Name}</Button>
              </span>
            </Link>
          </div>

          <div className="movieDirector">
            <span className="labelBold">Director: </span>
            <Link to={`/directors/${documentary.Director.Name}`}>
              <span className="value">
                <Button variant="link">{documentary.Director.Name}</Button>
              </span>
            </Link>
          </div>

          <div className="btnMovieView">
            <Link to={`/home`}>
              <Button className="btnBack" variant="danger">
                Go Back Me
              </Button>
            </Link>

            <Button className="btnAddFavorite" onClick={addFavorite}>
              Add to Favorites
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

MovieView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

{
  /*
  <div className='movie-view'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={movie.imagePath} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <span className='label text-danger'>Description: </span>
              <span className='value'>{movie.description}</span>
            </Card.Text>
            <Card.Text>
              <span className='label text-danger'>Genre: </span>
              <span className='value'>{movie.genre.name}</span>
            </Card.Text>
            <Card.Text>
              <span className='label text-danger'>Director: </span>
              <span className='value'>{movie.director.name}</span>
            </Card.Text>
            <Button onClick={() => onClick()} variant='primary'>
              Back
            </Button>
          </Card.Body>
        </Card>
      </div>
*/
}
