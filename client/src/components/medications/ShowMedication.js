import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Modal, Header} from 'semantic-ui-react';
import ConnectedMedicationForm from "./MedicationForm";
import Moment from 'react-moment';
import { MedicationConsumer } from "../../providers/MedicationProvider";

const ShowMedication = ({ location, match, updateMedication, history, deleteMedication }) => {
  const [medication, setMedication] = useState([])
  const [currently_taking, setCurrently_taking] = useState([false])
  const [open, setOpen] = useState(false)
  // new change
  // conditional rendering
  // modified edit use state
  useEffect( () => {
    showMeds()
    archiveMeds()
  },[])

  const showMeds = () => {
    axios.get(`/api/medications/${match.params.id}`)
    .then( res => setMedication(res.data) )
    .catch( err => console.log(err))
  }

   const archiveMeds = (id, med ) => {
    axios.put(`/api/medications/${match.params.id}`, { med })
    .then( res => {
      const updateMeds = currently_taking.map( m => {
        if (m.id == id) {
          return res.data
        }
        return m
      })
      setCurrently_taking(updateMeds)
    })
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
      <Button onClick={() => archiveMeds(id)}>Archive</Button>
      <Button color="red" onClick={() => deleteMedication(id)}> Delete</Button>
      <Link to="/" >
      <Button>Go Home</Button>
      </Link>
      <Link to="/comment" >
      <Button >Medication Comments</Button>
      </Link>

    </>
  )
}

const ConnectedShowMedication = (props) => (
  <MedicationConsumer>
    { value => <ShowMedication {...props} {...value} />}
  </MedicationConsumer>
)

export default ConnectedShowMedication;