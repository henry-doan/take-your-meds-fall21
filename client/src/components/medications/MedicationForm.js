import { useState, useEffect } from 'react';
import { MedicationConsumer } from '../../providers/MedicationProvider';

const MedicationForm = ({ addMedication, name, nickname, strength, dosage, id, updateMedication }) => {
  const [medication, setMedication] = useState({ name: "", nickname: "", strength: "", dosage:"" })

  useEffect( () => {
    if (id) {
      setMedication({ name, nickname, strength, dosage })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateMedication(id, medication)
    } else {
      addMedication(medication)
    }
    setMedication({ name: "", nickname: "", strength: "", dosage:"" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          value={medication.name} 
          onChange={(e) => setMedication({ ...medication, name: e.target.value })}
          required
          placeholder="Medication Name"
        />
        <input 
          name="nickname"
          value={medication.nickname} 
          onChange={(e) => setMedication({ ...medication, nickname: e.target.value })}
          required
          placeholder="Medication Nickname"
        />
        <input 
          name="strength"
          value={medication.strength} 
          onChange={(e) => setMedication({ ...medication, strength: e.target.value })}
          required
          placeholder="Medication Strength"
        />
        <input 
          name="dosage"
          value={medication.dosage} 
          onChange={(e) => setMedication({ ...medication, dosage: e.target.value })}
          required
          placeholder="Medication Dosage"
        />
        
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const ConnectedMedicationForm = (props) => (
  <MedicationConsumer>
    { value => <MedicationForm {...props} {...value} />}
  </MedicationConsumer>
)


export default ConnectedMedicationForm;