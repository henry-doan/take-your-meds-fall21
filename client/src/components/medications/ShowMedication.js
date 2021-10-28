import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Modal, Header, Segment, Card, List, Image, Grid, Icon} from 'semantic-ui-react';
import ConnectedMedicationForm from "./MedicationForm";
import { MedicationConsumer } from "../../providers/MedicationProvider";
import ShowComment from  '../comments/ShowComment'
import styled from "styled-components";
import ConnectedMedicationTaking from "./MedicationTaking";
import CommentForm from '../comments/CommentForm'
import { withRouter } from "react-router-dom";
import Comments from "../comments/Comments";
import MedicationTaking from './MedicationTaking';

const StopTakingButton = styled.button`
background-color: #FF0000;
font-size: 20px;
color: white;
font-family: Verdana;
border-radius: 50px;
border: none;
display: inline-block;
padding: 15px 100px;
width: 100%;
margin: 0 auto;
`


const ButtonContainer = styled.div`
display: grid;
place-content: center;
`


const ShowMedication = ({ location, match, updateMedication, history, deleteMedication }) => {
  const [medication, setMedication] = useState([])
  const [open, setOpen] = useState(false)
  // new change
  // conditional rendering
  // modified edit use state
  useEffect( () => {
    showMeds()
  },[])

  const showMeds = () => {
    axios.get(`/api/medications/${match.params.id}`)
    .then( res => setMedication(res.data) )
    .catch( err => console.log(err))
  }


  const { id, name, nickname, strength, dosage, img, currently_taking  } = medication
  const [archiveMed, setArchiveMed] = useState(false)
  return (
    <>  
      {/* <Moment format="MM/DD/YY"> {created_at}</Moment> */}
      <br />
      <Header>My Medicine</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4" textAlign="center">
              <Image size="medium" circular src={img}/>
          </Grid.Column>
          <Grid.Column width="12" textAlign="left" verticalAlign="middle">
            <List.Header>{nickname}   
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Icon name="pencil"/>}
          > 
       <Modal.Header>Editing {name} </Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <ConnectedMedicationForm 
        id={id}
        img={img}
        name={name}
        nickname={nickname}
        strength={strength}
        dosage={dosage}
        history={history}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='yellow' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal></List.Header>
            <List.Header style={{color: "blue"}}>{name}</List.Header>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br/>
      {/* <h1>{img}</h1>
      <h1>{name}</h1>
      <h3>{nickname}</h3>
      <p>{strength}</p>
      <p>{dosage}</p> */}
 
      {/* <Icon class="edit outline" color="red" onClick={() => updateMedication(id)}> Delete</Icon> */}
      {/* <Link to="/" >
      <Button>Go Home</Button>
      </Link> */}
      <Segment>
      <Comments medicationId={id}/>
      </Segment>
      <MedicationTaking medicationId={id}
        currently_taking={currently_taking}
      />

    </>
  )
}

const ConnectedShowMedication = (props) => (
  <MedicationConsumer>
    { value => <ShowMedication {...props} {...value} />}
  </MedicationConsumer>
)

export default withRouter(ConnectedShowMedication);