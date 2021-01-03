import React from 'react';

export class MovieCardView extends React.Component {
  render() {
    // This is given to the <MovieCardView/> component by the outer world
    // which, in this case, is 'MainView', as 'MainView' is what's
    // connected to your database via the movies endpoint of your API
    const { documentary, onClick } = this.props;

    return (
      <div onClick={() => onClick(documentary)} className="MovieCardView">{documentary.Title}</div>
    );
  }
}