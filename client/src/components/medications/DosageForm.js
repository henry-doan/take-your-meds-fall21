import { useState, useEffect } from 'react';
import { MedicationConsumer } from '../../providers/MedicationProvider';
import { Button, Form, Icon} from 'semantic-ui-react';
import styled from 'styled-components';

const SubmitButton = styled.button`
  background-color: #50A646;
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


const DosageForm = ({ toggleForm, addMedication, name, nickname, strength, dosage, id, img, updateMedication, history }) => {
  const [medication, setMedication] = useState({ name: "", nickname: "", strength: "", dosage:"" , currently_taking: true , img: ""})

  useEffect( () => {
    if (id) {
      setMedication({ name, nickname, strength, dosage, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMedication(id, medication, history)
    } else {
      addMedication(medication)
    }
    setMedication({ name: "", nickname: "", strength: "", dosage:"", img: "" })
    toggleForm(false)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
          name="dosage"
          value={medication.dosage} 
          onChange={(e) => setMedication({ ...medication, dosage: e.target.value })}
          required
          placeholder="Schedule Another Dose"
        />
        {/* <Icon name="plus"/> */}
      </Form>
      
    </>
  )
}

const ConnectedDosageForm = (props) => (
  <MedicationConsumer>
    { value => <DosageForm {...props} {...value} />}
  </MedicationConsumer>
)


export default ConnectedDosageForm;
