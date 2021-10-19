import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Modal, Header} from 'semantic-ui-react';
import ConnectedMedicationForm from "./MedicationForm";
import Moment from 'react-moment';
import { MedicationConsumer } from "../../providers/MedicationProvider";
import Comments from  '../comments/Comments'
import ConnectedMedicationTaking from "./MedicationTaking";
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


  const { id, name, nickname, strength, dosage,  } = medication
  return (
    <>  
      {/* <Moment format="MM/DD/YY"> {created_at}</Moment> */}
      <h1>{name}</h1>
      <h3>{nickname}</h3>
      <p>{strength}</p>
      <p>{dosage}</p>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Edit</Button>}
    >
      <Modal.Header>Editing {name} </Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <ConnectedMedicationForm 
        id={id}
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
    </Modal>
      <Button color="red" onClick={() => deleteMedication(id)}> Delete</Button>
      <Link to="/" >
      <Button>Go Home</Button>
      </Link>
      <Link to="/comment" >
      <Button >Medication Comments</Button>
      </Link>
      <Comments medicationId={id}/>

    </>
  )
}

const ConnectedShowMedication = (props) => (
  <MedicationConsumer>
    { value => <ShowMedication {...props} {...value} />}
  </MedicationConsumer>
)

export default ConnectedShowMedication;