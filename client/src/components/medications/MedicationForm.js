import { useState, useEffect } from 'react';
import { MedicationConsumer } from '../../providers/MedicationProvider';
import { Button, Form} from 'semantic-ui-react';
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


const MedicationForm = ({ toggleForm, addMedication, name, nickname, strength, dosage, id, img, updateMedication, history }) => {
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
        name="img"
        value={medication.img}
        onChange={(e)=> setMedication({...medication, img: e.target.value})}
        required
        placeholder="Medication Image"/>
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
        <ButtonContainer>
        <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonContainer>
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
