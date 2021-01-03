import React from 'react';

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

    return (
      <div className="MovieView">
        <img className="MoviePoster" src={documentary.ImagePath} />
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
            
        <div className="button">
          <span className="label">BackToMovies: </span>
          <span className="value">{documentary}</span>
        </div>     
      </div>
    );
  }
}