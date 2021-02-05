import React, { useState, useEffect } from "react";
import axios from "axios";

import { MovieCardView } from "../MovieCardView/MovieCardView";
import { ProfileEditView } from "../ProfileEditView/ProfileEditView";

import { Button, Modal, Row, Container } from "react-bootstrap";

import "./ProfileView.scss";

export function ProfileView(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [password, setPassword] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);

  // i dont understand this condition
  //its pointless to the code
  //you should use lifecycle

  useEffect(() => {
    function getUser() {
      axios
        .get(`https://documentality.herokuapp.com/users/${props.user}`, {
          headers: { Authorization: `Bearer ${props.userToken}` },
        })
        .then((response) => {
          let userData = response.data;
          console.log(userData);
          setUsername(userData.Username);

          setEmail(userData.Email);
          setBirthday(new Date(userData.Birthday));
          setFavoriteList(userData.FavoriteList);
          favs(userData.FavoriteList);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUser();
  }, [props.documentaries]);

  // if (username === "") {
  //   axios
  //     .get(`https://documentality.herokuapp.com/users/${props.user}`, {
  //       headers: { Authorization: `Bearer ${props.userToken}` },
  //     })
  //     .then((response) => {
  //       let userData = response.data;
  //       setUsername(userData.Username);

  //       setEmail(userData.Email);
  //       setBirthday(new Date(userData.Birthday));
  //       setFavoriteList(userData.FavoriteList);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // if (username === "") return null;

  function deregister() {
    axios
      .delete(`https://documentality.herokuapp.com/users/${props.user}`, {
        headers: { Authorization: `Bearer ${props.userToken}` },
      })
      .then((response) => {
        console.log(response);
        localStorage.clear();
        window.open("/", "_self");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function favs(favList) {
    let f = [];
    favList.forEach((el) => {
      let temp = props.documentaries.find((e) => e._id == el);
      if (temp) {
        f.push(temp);
      }
    });
    // console.log(f);
    setFavorite(f);
  }

  // console.log("favorites", favorites);
  // console.log(props.documentaries);
  const updateFavorites = (documentaries) => {
    setFavoriteList(
      props.FavoriteList.filter((favDocs) => {
        return favDocs !== documentaries;
      })
    );
  };

  const editUser = () => {
    setEdit(!edit);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Accept Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deregister}>
            Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
      {/* SLIDER Favorite Movies */}

      <div className="nameProfileWrap">
        <h3 className="userName">{"Hi " + username + ","}</h3>
      </div>

      <Container className="bodyContainer">
        <div className="bodyInfo">
          {/*<div className="user-avatar">
            <img className="img-avatar" src="#" />
          </div>*/}

          <div className="userInfo">
            <div className="userEmail">
              <span className="labelBold">Email: </span>
              <span className="value">{email}</span>
            </div>
            <div className="userBirthday">
              <span className="labelBold">Birth date: </span>
              <span className="value">{birthday.toDateString()}</span>
            </div>
            <div className="userPassword">
              <span className="labelBold">Password: </span>
              <span className="value">{password}********</span>
            </div>

            {edit && (
              <React.Fragment>
                <div className="editContainer">
                  <hr />
                  <ProfileEditView
                    user={props.user}
                    userToken={props.userToken}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <hr />
        <div className="favoriteListContainer">
          <span className="label">Favorite List:</span>
          <Row className="favoriteDocumentaries">
            {!favorite.length ? (
              <h3 className="text-center w-100">No favorites yet</h3>
            ) : (
              favorite.map((m) => (
                <div className="EditViewContainer" key={m.Title}>
                  <MovieCardView
                    user={props.user}
                    userToken={props.userToken}
                    key={m.Title}
                    documentary={m}
                    removeFavorite={true}
                    updateFavorites={updateFavorites}
                  />
                </div>
              ))
            )}
          </Row>
        </div>
        <hr />
        <div className="btnContainer">
          <Button className="btnDelete" variant="danger" onClick={handleShow}>
            Delete account
          </Button>

          {/*
          
          */}

          <Button className="btnDelete" variant="warning" onClick={editUser}>
            Edit account
          </Button>
        </div>
        <hr />
        {/*<div className="btnBackContainer">
          <Link to={`/`}>
            <Button className="btnBack" variant="danger">
              Go Back Me
            </Button>
          </Link>
            </div>*/}
      </Container>
    </React.Fragment>
  );
}
