import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./LoginView.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Send an authentication request made for the 'login' endpoint of DOCumentality API using Axios */
    axios
      .post("https://documentality.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("No such user");
      });
  };

  return (
    <React.Fragment>
      <Form className="loginForm">
        <h1 className="loginTitle text-center">Sing In</h1>

        <Form.Group controlId="usernameInputForm">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="passwordInputForm">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="btnLoginForm" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <Form.Text className="text-muted">
          If you forgot your password,
          <Button className="linkPassword" variant="link">
            contact us
          </Button>
          .
        </Form.Text>
        <Form.Text className="text-muted">
          Don't have an account?
          <Link to={`/singUp`}>
            <Button className="linkRegister" variant="link">
              Register here
            </Button>
          </Link>
          .
        </Form.Text>
      </Form>
    </React.Fragment>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};

{
  /* INPUT
  <div>
    <div className="containerUsername">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <i className="usernameIcon"></i>
        </InputGroup.Prepend>
        <FormControl
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="Username"
          aria-label="Username"
          aria-describedby="usernameIcon"
        />
      </InputGroup>
    </div>
    <div className="containerPassword">
    <InputGroup className="mb-9" value={password}>
        <InputGroup.Prepend>
          <i className="passwordIcon"></i>
        </InputGroup.Prepend>
        <FormControl
          value={password} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="Password"
          aria-label="Password"
          aria-describedby="passwordIcon"
        />
      </InputGroup>
    </div>
  </div>
*/
}
