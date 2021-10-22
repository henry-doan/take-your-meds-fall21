import MedicationForm from '../medications/MedicationForm';
import AllMyMedications from '../medications/AllMyMedications';
import { Button, Segment } from 'semantic-ui-react';
import ShowMedication from '../medications/ShowMedication';
import { useState } from 'react';

const MyMedicine = ({ MedicationForm }) => {
  const [on, setOn] = useState(false)
   // class componen into a presentational component, and then use hooks to use features
  return(
  <>
  <Segment basic>
    <h1>Current Meds</h1>
    <AllMyMedications />

    <Button class="ui primary basic button" onClick={MedicationForm}>
    Add Another Medicine
    <i class="plus icon"></i>
    </Button>

      {/* <MedicationForm /> */}
  </Segment>

  </>
  )
}

export default MyMedicine;