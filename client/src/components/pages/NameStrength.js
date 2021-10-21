import MedicationForm from '../medications/MedicationForm';
import AllMedications from '../medications/AllMedications';
import { Segment } from 'semantic-ui-react';

const MedicationDetails = () => (
  <>
  <Segment basic>
    <h1>Name & Strength</h1>
    <MedicationForm />
  </Segment>

  </>
)

export default MedicationDetails;