import { useState, useEffect } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Icon, Header, Card, Container, Grid, Button, Form, Image, GridColumn,} from "semantic-ui-react";
import styled from "styled-components";

const defaultImage = "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png";


const StyledH1 = styled.h1`
  font-size: 40px;
  margin-bottom: 0;
  display: grid;
  place-content: center;
`
const StyledP = styled.p`
  font-size: 40px;
  margin-bottom: 0;
  display: inline-block;
  place-content: right;
  font-family: Verdana;
`


// const UnderlineProfile = styled.h1`
// text-decoration: underline;
// text-decoration-color: #80B641;
// text-decoration-thickness: 20%;
// text-underline-offset
// `


const ImageContainer = styled.div`
  display: grid;
  place-content: center;

`;
const UserContainer = styled.div`
  display: grid;
  place-content: center;
`;
const NameContainer = styled.div`
  display: grid;
  place-content: center;
`;
const CardContainer = styled.div`
  display: grid;
  place-content: center;
`;
const ButtonContainer = styled.div`
  display: grid;
  place-content: center;
`;

const UnderlineProfile = styled.h1`
text-decoration: underline;
text-decoration-color: #80B641;
text-decoration-thickness: 20%;
text-underline-offset
`

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false);
  const [formVals, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    file: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    blood: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const {
      first_name,
      last_name,
      email,
      image,
      age,
      height,
      weight,
      gender,
      blood,
      address,
      phone,
    } = user.user;3
    setFormValue({
      first_name,
      last_name,
      email,
      image,
      age,
      height,
      weight,
      gender,
      blood,
      address,
      phone,
    });
  }, []);


  const onDrop = (files) => {
    setFormValue({ ...formVals, file: files[0] });
  };

  const profileView = () => {
    return (
      <div>      
        {user.user ? (
          <>

            <UnderlineProfile className="profile-title">
              Profile
            </UnderlineProfile>
            <ImageContainer>
              <Image
                className="profile-pic"
                circular
                size="tiny"
                src={formVals.image || defaultImage}
              />
            </ImageContainer>
           <NameContainer>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header className="profile-name" as="h3">
                      {user.user.first_name} {user.user.last_name}
                <Icon name="pencil alternate" size="small" onClick={() => setEditing(!editing)}/>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </NameContainer>

            <CardContainer>
              <Card className="profile-info-card">
                <Grid item xs={4} columns={3} textAlign="center">
                  <Grid.Row className="bordered-row">
                    <Grid.Column className="bordered-stat">
                      <h4>Age</h4>
                      <p>{user.user.age}</p>
                    </Grid.Column>
                    <Grid.Column className="bordered-stat">
                      <h4>Blood</h4>
                      <p>{user.user.blood}</p>
                    </Grid.Column>
                    <Grid.Column>
                      <h4>Gender</h4>
                      <p>{user.user.gender}</p>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column className="bordered-stat">
                      <h4>Height</h4>
                      <p>{user.user.height}</p>
                    </Grid.Column>
                    <Grid.Column>
                      <h4>Weight</h4>
                      <p>{user.user.weight}</p>
                    </Grid.Column>
                    <Grid.Column className="bordered-med-count" >
                      <h4>Med Count</h4>
                      <p>{"10"}</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card>
              <Grid>
                <UserContainer className="profile-info-container">
                  <Card className="profile-info-card">
                    <Grid.Row className="bordered-row">
                      <h4>Address</h4>
                      <p>{user.user.address}</p>
                    </Grid.Row>
                    <Grid.Row className="bordered-row">
                      <h4>Phone</h4>
                      <p>{user.user.phone}</p>
                    </Grid.Row>
                    <Grid.Row className="bordered-row">
                      <h4>Email</h4>
                      <p>{user.user.email}</p>
                    </Grid.Row>
                  </Card>
                </UserContainer>
              </Grid>
            </CardContainer>

          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  };

  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form.Input
                name="first_name"
                value={formVals.first_name}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, first_name: inputAttr.value })
                }
                label="First Name"
                required
              />
              <Form.Input
                name="last_name"
                value={formVals.last_name}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, last_name: inputAttr.value })
                }
                label="Last Name"
                required
              />
              <Form.Input
                name="email"
                value={formVals.email}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, email: inputAttr.value })
                }
                label="Email"
                required
              />
              <Form.Input
                name="age"
                value={formVals.age}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, age: inputAttr.value })
                }
                label="Age"
                required
              />
              <Form.Input
                name="height"
                value={formVals.height}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, height: inputAttr.value })
                }
                label="Height"
                required
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Input
                name="weight"
                value={formVals.weight}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, weight: inputAttr.value })
                }
                label="Weight"
                required
              />
              <Form.Input
                name="gender"
                value={formVals.gender}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, gender: inputAttr.value })
                }
                label="Gender"
                required
              />
              <Form.Input
                name="blood"
                value={formVals.blood}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, blood: inputAttr.value })
                }
                label="Blood Type"
                required
              />
              <Form.Input
                name="address"
                value={formVals.address}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, address: inputAttr.value })
                }
                label="Address"
                required
              />
              <Form.Input
                name="phone"
                value={formVals.phone}
                onChange={(e, inputAttr) =>
                  setFormValue({ ...formVals, phone: inputAttr.value })
                }
                label="Phone"
                required
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button type="submit">Update</Button>
              <Button onClick={() => setEditing(!editing)}>
                {editing ? "Cancel" : "Edit"}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.user.id, formVals);
    setEditing(false);
    setFormValue({ ...formVals, file: "" });
  };

  return (
    <>

      {user.user ? (
        <>
          <Container className="profile-background">
            <br></br>
            <br></br>
            {editing ? editView() : profileView()}
            <br /><br/>
          </Container>
        </>
      ) : (
        <p></p>
      )}

    </>
  );
};

const ConnectedProfile = (props) => (
  <AuthConsumer>{(value) => <Profile {...props} {...value} />}</AuthConsumer>
);

export default ConnectedProfile;
