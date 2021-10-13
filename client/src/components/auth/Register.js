import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '',  }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <Segment basic>
      <Header as='h1' textAlign='center'>Register</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="First Name"
          required
          name='first_name'
          value={user.first_name}
          placeholder='First Name'
          onChange={(e, { value }) => setUser({ ...user, first_name: value })}
        />
        <Form.Input
          label="Last Name"
          required
          name='last_name'
          value={user.last_name}
          placeholder='Last Name'
          onChange={(e, { value }) => setUser({ ...user, last_name: value })}
      />
        <Form.Input
          label="Email"
          required
          autoFocus
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
        <Form.Input
          label="Password Confirmation"
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, passwordConfirmation: value })}
        />
        <Form.Input
          label="Age"
          required
          name='age'
          value={user.age}
          placeholder='Age'
          onChange={(e, { value }) => setUser({ ...user, age: parseInt(value) })}
        />        
        <Form.Input
          label="Height"
          required
          name='height'
          value={user.height}
          placeholder='height'
          onChange={(e, { value }) => setUser({ ...user, height: value })}
        />
        <Form.Input
          label="Weight"
          required
          name='weight'
          value={user.weight}
          placeholder='weight'
          onChange={(e, { value }) => setUser({ ...user, weight: parseFloat(value) })}
        />
        <Form.Input
          label="Blood"
          required
          name='blood'
          value={user.blood}
          placeholder='blood'
          onChange={(e, { value }) => setUser({ ...user, blood: value })}
        />
        <Form.Input
          label="Gender"
          required
          name='gender'
          value={user.gender}
          placeholder='gender'
          onChange={(e, { value }) => setUser({ ...user, gender: value })}
        />
        <Form.Input
          label="Address"
          required
          name='address'
          value={user.address}
          placeholder='address'
          onChange={(e, { value }) => setUser({ ...user, address: value })}
        />
        <Form.Input
          label="Phone"
          required
          name='phone'
          value={user.phone}
          placeholder='phone'
          onChange={(e, { value }) => setUser({ ...user, phone: value })}
        />
        <Segment textAlign='center' basic>
          <Button primary type='submit'>Submit</Button>
        </Segment>
      </Form>
    </Segment>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)

export default ConnectedRegister;