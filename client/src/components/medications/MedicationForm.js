import { useState, useEffect } from 'react';
import { MedicationConsumer } from '../../providers/MedicationProvider';
import { Button, Form} from 'semantic-ui-react';


const MedicationForm = ({ toggleForm, addMedication, name, nickname, strength, dosage, id, updateMedication, history }) => {
  const [medication, setMedication] = useState({ name: "", nickname: "", strength: "", dosage:"" , currently_taking: true })

  useEffect( () => {
    if (id) {
      setMedication({ name, nickname, strength, dosage })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMedication(id, medication, history)
    } else {
      addMedication(medication)
    }
    setMedication({ name: "", nickname: "", strength: "", dosage:"" })
    toggleForm(false)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.TextArea 
          name="name"
          value={medication.name} 
          onChange={(e) => setMedication({ ...medication, name: e.target.value })}
          required
          placeholder="Medication Name"
        />
        <Form.Input 
          name="nickname"
          value={medication.nickname} 
          onChange={(e) => setMedication({ ...medication, nickname: e.target.value })}
          required
          placeholder="Medication Nickname"
        />
        <Form.Input 
          name="strength"
          value={medication.strength} 
          onChange={(e) => setMedication({ ...medication, strength: e.target.value })}
          required
          placeholder="Medication Strength"
        />
        <Form.Input 
          name="dosage"
          value={medication.dosage} 
          onChange={(e) => setMedication({ ...medication, dosage: e.target.value })}
          required
          placeholder="Medication Dosage"
        />
        
        <Button color='green' type="submit">Submit</Button>
      </Form>
    </>
  )
}

const ConnectedMedicationForm = (props) => (
  <MedicationConsumer>
    { value => <MedicationForm {...props} {...value} />}
  </MedicationConsumer>
)


export default ConnectedMedicationForm;
