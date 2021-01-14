import React, { useState } from 'react';
import Form from 'react-bootstrap/form';

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
    
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

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

{/* FORM
  <Form >
    <Form.Group controlId="formUsername.ControlInput">
      <Form.Label>Email:</Form.Label>
      <Form.Control 
        type="text" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        placeholder="Enter Username" 
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formPassword.ControlInput">
      <Form.Label>Password:</Form.Label>
      <Form.Control 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password" 
      />
    </Form.Group>
    
    <Button className="btnFormLogin" type="submit" onClick={handleSubmit} >
      Submit
    </Button>
  </Form>
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