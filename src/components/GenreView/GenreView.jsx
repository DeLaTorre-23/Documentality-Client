import React from "react";
import PropTypes from "prop-types";

import { ErrorView } from "../ErrorView/ErrorView";
import { Link } from "react-router-dom";

import "./GenreView.scss";
export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {
      genre: {},
      error: false,
    };
  }

  componentDidMount() {
    let genre = this.props.documentaries.find(
      (m) => m.Genre.Name === this.props.match.params.name
    );

    {
      /*
    let filterDocumentaries = () => {
      this.setState({
        filterDocumentaries: filterDocumentaries,
      });
      let genre = this.props.documentaries
        .find((m) => m.Genre.Name === this.props.match.params.name)
        .Genre.then(() => {
          let documentaries = documentaries.filter(
            (m) => m.Director.Name === this.props.match.params.name
          );
        });
      setDocumentaries();
    };
    */
    }

    if (genre) {
      //if genre exists set state
      this.setState({ genre: genre.Genre });
    } else {
      // if not exist set true
      this.setState({ error: true });
    }
  }
  render() {
    const { documentaries } = this.props;
    const { genre, error } = this.state;

    if (error) return <ErrorView />;

    return (
      <div className="genreView">
        <h2>Genre Info</h2>
        <hr />
        <div className="cardBodyInfo">
          <div className="genreName">
            <span className="labelBold">Name: </span>
            <span className="value">{genre.Name}</span>
          </div>
          <br />

          <div className="genreDescription">
            <span className="labelBold">Description: </span>
            <span className="value">{genre.Description}</span>
          </div>

          <hr className="lastHr" />
          <div className="genreDocumentaries">
            <span className="labelBold">More Documentaries: </span>
            {documentaries.map((m) => (
              <div className="documentary" key={m.Title}>
                <Link to={`/documentaries/${m.Title}`}>{m.Title}</Link>
              </div>
            ))}
          </div>
          <br />
        </div>

        <Link to={`/`} className="btn btn-danger btnBack">
          Go Back Me
        </Link>
      </div>
    );
  }
}

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
};
