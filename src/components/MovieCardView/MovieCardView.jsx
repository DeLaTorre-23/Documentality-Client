import React from 'react';
import {Card, Button} from 'react-bootstrap'

export class MovieCardView extends React.Component {
  render() {
    // This is given to the <MovieCardView/> component by the outer world
    // which, in this case, is 'MainView', as 'MainView' is what's
    // connected to your database via the movies endpoint of your API
    const { documentary, onClick } = this.props;

    return (
     // <div onClick={() => onClick(documentary)} className="MovieCardView">{documentary.Title}</div>
      <Card style={{ width: '22rem' }} className="movieCard mb-3">
        <Card.Img variant="top" src={documentary.ImagePath} />
        <Card.Body>
          <Card.Title>{documentary.Title /*+ ' - ' + documentary.Released*/}</Card.Title>
          {/*<Card.Text>{documentary.Description}</Card.Text>*/}
          <Button  
            onClick={() => onClick(documentary)}
            variant="link"
            className="expandDocumentary"
          >  
            Details
          </Button> 
        </Card.Body>
      </Card>            
    );
  }
}