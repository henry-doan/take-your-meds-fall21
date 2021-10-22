import MedicationForm from '../medications/MedicationForm';
import AllMyMedications from '../medications/AllMyMedications';
import { Button, Segment } from 'semantic-ui-react';
import ShowMedication from '../medications/ShowMedication';

const MyMedicine = ({ MedicationForm}) => {
  return(
  <>
  <Segment basic>
    <h1>Current Meds</h1>
    <AllMyMedications />

    <Button class="ui primary basic button" onClick={MedicationForm}>
    Add Another Medicine
    <i class="plus icon"></i>
    </Button>

    {/* <Segment>
     {/* <MedicationForm /> */}
     {/* </Segment> */} 
  </Segment>

  </>
  )
}

export default MyMedicine;