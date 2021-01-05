import React from 'react';
import axios from 'axios';

import { MovieCardView } from '../MovieCardView/MovieCardView';
import { MovieView } from '../MovieView/MovieView';

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      documentaries: null,
      selectedDocumentary: null
    };
  }

  componentDidMount() {
    axios
      .get('https://documentality.herokuapp.com/documentaries')
      .then(response => {
        // Assign the result to the state
        this.setState({
          documentaries: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onDocumentaryClick(documentary) {
    this.setState({
      selectedDocumentary: documentary
    });
  }

  // This overrides the render() method of the superclass
  // No need to call super() though, as it does nothing by default
  render() {
    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries, selectedDocumentary } = this.state;

    // Before the movies have been loaded
    if (!documentaries) return <div className="MainView"/>

    console.log(documentaries);

    return (
     <div className="MainView">
     {selectedDocumentary
      ? <MovieView documentary={selectedDocumentary}/>
      : documentaries.map(documentary => (
        <MovieCardView 
          key={documentary._id} 
          documentary={documentary} 
          onClick={documentary => this.onDocumentaryClick(documentary)}
        />
      )) 
     }
     </div>
    );
  }
}