import MedicationForm from '../medications/MedicationForm';
import AllMedications from '../medications/AllMedications';
import { Segment, Header, Button } from 'semantic-ui-react';

const MedicationDetails = () => (
  <>
  <br/>
  <Header>My Medicine</Header>
  <Segment basic>
    <h1>Name & Strength</h1>
    <MedicationForm />
  </Segment>

  </>
)

export default MedicationDetails;