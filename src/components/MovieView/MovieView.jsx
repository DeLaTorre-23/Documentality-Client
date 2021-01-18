import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button'

import './MovieView.scss';
export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

    return (
      <div className="movieView">
        <img className="moviePoster"  src={documentary.ImagePath} />
        <div className="movieInfo" >
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
            <span className="value">{documentary.Genre.Name}</span>
          </div>

          <div className="movieDirector">
            <span className="labelBold">Director: </span>
            <span className="value">{documentary.Director.Name}</span>
          </div>   

          <div className="btnMovieView">
            {/* Reload all the page*/}
            {/* <a href="window.history.back();">Go Back</a>*/}

            {/* Don't reload the page, just go back*/}
            <Button className="btnBack" onClick={this.props.removeDocumentaryFromSelected} variant="danger">Go Back Me</Button>
            <Button className="btnAddFavorite" onClick={this.addFavorite}>Add to Favorites</Button>
          </div>     
        </div>      
      </div>
    );
  }
}

MovieView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

{/*(
  <div className="MovieView">
    <img className="MoviePoster" style={{ width: '18rem' }} src={documentary.ImagePath} />
    <div className="MovieTitle">
      <span className="label">Title: </span>
      <span className="value">{documentary.Title}</span>
    </div>

    <div className="MovieDescription">
      <span className="label">Description: </span>
      <span className="value">{documentary.Description}</span>
    </div>

    <div className="MovieGenre">
      <span className="label">Genre: </span>
      <span className="value">{documentary.Genre.Name}</span>
    </div>

    <div className="MovieDirector">
      <span className="label">Director: </span>
      <span className="value">{documentary.Director.Name}</span>
    </div>   

    <div className="BtnBack">
      {/* Reload all the page*/}
      {/* <a href="window.history.back();">Go Back</a>*/}

      {/* Don't reload the page, just go back*/}
      {/*<Button onClick={this.props.removeDocumentaryFromSelected} variant="danger">Go Back Me</Button>
    </div>     
  </div>
);*/}
