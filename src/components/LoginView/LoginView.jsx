import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './LoginView.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (  
    <React.Fragment>
      <Form className="loginForm">
      <h1 className='loginTitle text-primary text-center'>Sing In</h1>
        <Form.Group controlId="usernameInputForm">
          {/*<Form.Label>Username:</Form.Label>*/}
          <Form.Control 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="passwordInputForm">
          {/*<Form.Label>Password:</Form.Label>*/}
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </Form.Group>
        
        <Button 
          className="btnLoginForm" 
          type="submit" 
          onClick={handleSubmit} >
          Login
        </Button>
        <Form.Text className="text-muted">
          If you forgot your password, contact us.
        </Form.Text>
      </Form>
    </React.Fragment>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

{/*
 <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <MDBIcon icon="user"></MDBIcon>
        </span>
      </div>
      <input 
        type="text" 
        className="form-control-username" 
        placeholder="Username" 
        aria-label="Username" 
        aria-describedby="basic-addon"
        value={username} 
        onChange={e => setUsername(e.target.value)}
      />
      
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
        <MDBIcon icon="lock"></MDBIcon>
        </span>
      </div>
      <input 
        type="password" 
        className="form-control-password" 
        placeholder="Password" 
        aria-label="Password" 
        aria-describedby="basic-addon"
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      
      <div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
*/}

{/* INPUT
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
*/}