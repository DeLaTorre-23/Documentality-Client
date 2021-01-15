import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';

export function SingUpView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (  
    <Form>
      <FormGroup controlId="formUsername.ControlInput">
        <FormLabel>Username:</FormLabel>
        <FormControl 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="Username" 
        />
      </FormGroup>

      <FormGroup controlId="formPassword.ControlInput">
        <FormLabel>Password:</FormLabel>
        <FormControl 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password" 
        />
      </FormGroup>
      
      <Button className="btnFormLogin" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
      <FormText className="text-muted">
        We'll never share your email with anyone else.
      </FormText>
    </Form>
  );
}

{/* DEFAULT
  <Form>
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </Form>
*/}

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