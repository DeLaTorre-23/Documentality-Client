import React from 'react';
import axios from 'axios';

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {};
  }

  componentDidMount() {
    axios
      .get('<https://documentality.herokuapp.com/documentaries>')
      .then(response => {
        // Assign he result to the state
        this.setState({
          documentaries: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This overrides the render() method of the superclass
  // No need to call super() though, as it does nothing by default
  render() {
    // If the state isn't initialized, this will throw on runtime
    // before tha data is initially loaded
    const { documentaries } = this.state;

    // Before the movies have been loaded
    if (!documentaries) return <div className="main-view"/>

    return (
     <div className="main-view">
     { documentaries.map(documentaries => (
       <div ClassName="movie-card" key={documentaries._id}>{documentaries.Title}</div>
     ))}
     </div>
    );
  }
}