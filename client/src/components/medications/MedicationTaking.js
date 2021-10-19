import { useState, useEffect} from 'react';
import { Checkbox } from 'semantic-ui-react';
import { MedicationConsumer } from '../../providers/MedicationProvider';

const MedicationTaking = ({id, name, nickname, strength, dosage, currently_taking, updateMedication, medicationId}) => {
  const [medication, setMedication] = useState({ name: "", nickname: "", strength: "", dosage:"" , currently_taking: true })

  useEffect( () => {
      setMedication({ name, nickname, strength, dosage, currently_taking })
  }, [])

  return(
    <>
      <Checkbox label='CurrentlyTaking?'
      name='currently_taking'
      value={medication.currently_taking}
      onChange={() => setMedication({...medication, currently_taking: !medication.currently_taking})}
      onClick={() => updateMedication(medicationId, id, medication)}
      />
    </>
  )

}

const ConnectedMedicationTaking = (props) => (
  <MedicationConsumer>
    { value => <MedicationTaking {...props} {...value} />}
  </MedicationConsumer>
)

export default ConnectedMedicationTaking;