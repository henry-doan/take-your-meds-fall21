import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

import { Card, Container, Grid, Button, Form, Image, GridColumn } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const ImageContainer = styled.div`
  display: grid;
  place-content: center;
  `
  const UserContainer = styled.div`
  display: grid;
  place-content: center;
  `
const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormValue] = useState({ 
        first_name: '', last_name: '', email: '', file: '', age: '', height: '',
        weight: '', gender: '', blood: '', address: '', phone: '' })

  useEffect( () => {
    const { first_name, last_name, email, image, age, height, weight, gender, blood, address, phone } = user.user 
    setFormValue({ first_name, last_name, email, image, age, height, weight, gender, blood, address, phone })
  }, [])

  const onDrop = (files) => {
    setFormValue({ ...formVals, file: files[0] })
  }

  const profileView = () => {
    return (
      <>
        {
          
          user.user ? 
          <>
          <ImageContainer>
            <Image src={ formVals.image || defaultImage } />
          </ImageContainer>
            <h1>{user.user.first_name} {user.user.last_name}</h1>         
          <Card>
            <Grid columns={3} textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  <h4>Age</h4> 
                  <p>{user.user.age}</p>
                </Grid.Column>
                <Grid.Column>
                  <h4>Blood</h4>
                  <p>{user.user.blood}</p>
                </Grid.Column>
                <Grid.Column>
                  <h4>Gender</h4>
                  <p>{user.user.gender}</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <h4>Height</h4>
                  <p>{user.user.height}</p>
                </Grid.Column>
                <Grid.Column>
                  <h4>Weight</h4>
                  <p>{user.user.weight}</p>
                </Grid.Column>
                <Grid.Column>
                  <h4>Med Count</h4>
                  <p>{user.user.med_count}</p>
                </Grid.Column>
              </Grid.Row>            
            </Grid>          
          </Card>
          <Grid>
            <UserContainer>
            <Card>
              <Grid.Row>
                <h4>Address</h4>
                <p>{user.user.address}</p>
            </Grid.Row>
            <br></br>
            <Grid.Row>
                <h4>Phone</h4>
                <p>{user.user.phone}</p>
            </Grid.Row>
            <br></br>
            </Card>
            </UserContainer>
          </Grid>
          </>
          :
          <p>Loading</p>
        }
      </>
    )
  }

  const editView = () => {
    return (

      <Form onSubmit={handleSubmit}>
        <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Form.Input
            name="first_name"
            value={formVals.first_name}
            onChange={(e, inputAttr) => setFormValue({...formVals, first_name: inputAttr.value})}
            label="First Name"
            required
          />
          <Form.Input
            name="last_name"
            value={formVals.last_name}
            onChange={(e, inputAttr) => setFormValue({...formVals, last_name: inputAttr.value})}
            label="Last Name"
            required
          />
          <Form.Input
            name="email"
            value={formVals.email}
            onChange={(e, inputAttr) => setFormValue({...formVals, email: inputAttr.value})}
            label="Email"
            required
          />
          <Form.Input
            name="age"
            value={formVals.age}
            onChange={(e, inputAttr) => setFormValue({...formVals, age: inputAttr.value})}
            label="Age"
            required
          />
          <Form.Input
            name="height"
            value={formVals.height}
            onChange={(e, inputAttr) => setFormValue({...formVals, height: inputAttr.value})}
            label="Height"
            required
          />
         </Grid.Column>
         <Grid.Column width={8}>
          <Form.Input
            name="weight"
            value={formVals.weight}
            onChange={(e, inputAttr) => setFormValue({...formVals, weight: inputAttr.value})}
            label="Weight"
            required
          />
          <Form.Input
            name="gender"
            value={formVals.gender}
            onChange={(e, inputAttr) => setFormValue({...formVals, gender: inputAttr.value})}
            label="Gender"
            required
          />
          <Form.Input
            name="blood"
            value={formVals.blood}
            onChange={(e, inputAttr) => setFormValue({...formVals, blood: inputAttr.value})}
            label="Blood Type"
            required
          />
          <Form.Input
            name="address"
            value={formVals.address}
            onChange={(e, inputAttr) => setFormValue({...formVals, address: inputAttr.value})}
            label="Address"
            required
          />
          <Form.Input
            name="phone"
            value={formVals.phone}
            onChange={(e, inputAttr) => setFormValue({...formVals, phone: inputAttr.value})}
            label="Phone"
            required
          />
         </Grid.Column>
         </Grid.Row>
        <Grid.Row>
<Grid.Column>
          <Button type="submit">Update</Button>
          <Button onClick={() => setEditing(!editing)}>
          {editing ? 'Cancel' : 'Edit'}
          </Button>
        </Grid.Column>
      
        </Grid.Row>
        </Grid>
      </Form>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.user.id, formVals)
    setEditing(false)
    setFormValue({...formVals, file: ""})
  }

  return (
    <>
    {
      user.user ?
      <>
      <Container>
        <br/>
          { editing ? editView() : profileView() }
          {editing ? <> </> : 
          
          <Button onClick={() => setEditing(!editing)}>
            edit
        </Button>

          }
      </Container>
      </>
      :
      <p></p>
    }
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProfile;