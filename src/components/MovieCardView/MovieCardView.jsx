import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './MovieCardView.scss';

export class MovieCardView extends React.Component {
  render() {
    // This is given to the <MovieCardView/> component by the outer world
    // which, in this case, is 'MainView', as 'MainView' is what's
    // connected to your database via the movies endpoint of your API
    const { documentary, onClick } = this.props;

    return (
     // <div onClick={() => onClick(documentary)} className="MovieCardView">{documentary.Title}</div>
      <Card className="movieCard" >
        {/*<Card.Body>
          <Card.Title>{documentary.Title + ' - ' + documentary.Released}</Card.Title>
          <Card.Text>{documentary.Description}</Card.Text>     
        </Card.Body>*/}
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
    );
  }
}

MovieCardView.propTypes = {
  documentary: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};