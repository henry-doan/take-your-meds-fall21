import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  }

  const LoginButton = styled.button`
  background-color: #50A646;
  font-size: 16px;
  color: white;
  font-family: Verdana;
  border-radius: 50px;
  border: none;
  display: inline-block;
  padding: 10px 10px;
  width: 50%;
  margin: 0 auto;
`
  
  return (
    <Segment basic>
      <Header as='h1' textAlign='center'>Login</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          autoFocus
          required         
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e, { value }) => setUser({ ...user, email: value })}
        />
        <Form.Input
          label="Password"
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, password: value })}
        />
        <Segment textAlign='center' basic>
          <LoginButton primary type='submit'>Submit</LoginButton>
        </Segment>
      </Form>
    </Segment>
  )
  
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedLogin;