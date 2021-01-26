import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./SingUpView.scss";

export function SingUpView(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  //const [phone, setPhone] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    /* Send an authentication request made for the 'login' endpoint of DOCumentality API using Axios */
    axios
      .post("https://documentality.herokuapp.com/singUp", {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch((e) => {
        console.log("Error registering the user");
      });
  };

  return (
    <React.Fragment>
      <Router>
        <Form className="singUpForm">
          <h1 className="singUpTitle text-primary text-center">
            Create an account!
          </h1>

          <Form.Group controlId="usernameSingUpForm">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              Username just allow alphanumeric characters.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="emailSingUpForm">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="birthdaySingUpForm">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="date"
              placeholder="DD/MM/YYYY"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="passwordInputForm">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Password must be between 8-12 alphanumeric characters.
            </Form.Text>
          </Form.Group>

          <Link to={`/home`}>
            <Button
              className="btnSingUpForm"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Link>
          <Form.Text className="text-muted">
            We will never trade your data.
          </Form.Text>
        </Form>
      </Router>
    </React.Fragment>
  );
}

SingUpView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.instanceOf(Date).isRequired,
    password: PropTypes.string.isRequired,
  }),
};
