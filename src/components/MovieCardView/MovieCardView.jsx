import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCardView extends React.Component {
  render() {
    // This is given to the <MovieCardView/> component by the outer world
    // which, in this case, is 'MainView', as 'MainView' is what's
    // connected to your database via the movies endpoint of your API
    const { documentary, onClick } = this.props;

    return (
     // <div onClick={() => onClick(documentary)} className="MovieCardView">{documentary.Title}</div>
      <Card style={{ width: '14rem' }} className="movieCard text-center">
        <Card.Img variant="top" src={documentary.ImagePath} />
        {/*<Card.Body>
          <Card.Title>{documentary.Title + ' - ' + documentary.Released}</Card.Title>
          <Card.Text>{documentary.Description}</Card.Text>     
        </Card.Body>*/}
        <Card.Footer>
          <Button 
              variant='primary'
              onClick={() => onClick(documentary)}
              className="expandDocumentary MovieCardView"
            >  
              {documentary.Title}
            </Button>
        </Card.Footer>
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