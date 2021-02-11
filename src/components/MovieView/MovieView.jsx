import React, { Component } from "react";

import axios from "axios";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./MovieView.scss";
export class MovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documentary: this.props.documentary,
      username: localStorage.getItem("user"), //this.props.user,
      userToken: localStorage.getItem("token"),
      addFavorite: addFavorite,
      updateFavorites: [],
      favorite: [],
    };

    let addFavorite = false;
    if (props.addFavorite) {
      addFavorite = true;
    }

    let updateFavorites = false;
    if (props.updateFavorites) {
      updateFavorites = true;
    }
  }

  addFavorite = () => {
    this.setState({
      addFavorite: false,
    });
    axios({
      method: "post",
      url: `https://documentality.herokuapp.com/users/${this.state.username}/Documentaries/${this.props.documentary._id}`,
      headers: { Authorization: `Bearer ${this.state.userToken}` },
    })
      .then((response) => {
        const data = response.data;
        console.log("New Documentary added");
        //console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("Documentary not added");
      });
  };

  updateFavorites = (documentaries) => {
    axios({
      method: "delete",
      url: `https://documentality.herokuapp.com/users/${this.state.username}/Documentaries/${this.props.documentary._id}`,
      headers: { Authorization: `Bearer ${this.state.userToken}` },
      data: {},
    })
      .then((res) => {
        if (res.status == 200) {
          let updatedFavs = favorite.filter((favDocs) => {
            return favDocs._id !== documentaries;
          });
          setFavorite(updatedFavs);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("Movie Not Removed");
      });
  };

  favs = (favList) => {
    let f = [];
    favList.forEach((el) => {
      let temp = props.documentaries.find((e) => e._id == el);
      if (temp) {
        f.push(temp);
      }
    });
    // console.log(f);
    setFavorite(f);
  };

  render() {
    const { documentary } = this.props;

    if (!documentary) return null;

    return (
      <Container className="movieView">
        {/*msg && "unable to remove"*/}
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
            {/*
            <Button
              className="btnDeleteFavorite"
              variant="warning"
              onClick={() => this.updateFavorites(documentary._id)}
              block
            >
              Remove from Favorites
            </Button>
            */}

            <Button
              className="btnAddFavorite"
              onClick={() => this.addFavorite(documentary._id)}
            >
              Add to Favorites
            </Button>
          </div>
          <Link to={`/`} className="btn btn-danger btnBack ">
            Go Back Me
          </Link>
        </div>
      </Container>
    );
  }
}

{
  /*
 updateFavorites = (documentaries) => {
    this.setState({
      setMsg: false,
    });

    axios({
      method: "delete",
      url: `https://documentality.herokuapp.com/users/${this.props.username}/Documentaries/${this.props.documentary._id}`,
      headers: { Authorization: `Bearer ${this.state.userToken}` },
    })
      .then((res) => {
        console.log(data);
        let favList = favorite.filter((favDocs) => {
          return favDocs._id !== documentary;
        });
        setFavorite(favList);
      })
      .catch((e) => {
        setMsg(true);

        setTimeout(() => {
          setMsg(false);
        }, 2000);
      });
  };

*/
}
