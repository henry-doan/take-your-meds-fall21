import MedicationForm from '../medications/MedicationForm';
import AllMyMedications from '../medications/AllMyMedications';
import { Button, Segment } from 'semantic-ui-react';
import ShowMedication from '../medications/ShowMedication';
import { useEffect, useState } from 'react';

const MyMedicine = ({ }) => {
  const [showForm, setShowForm] = useState(false)
   // class componen into a presentational component, and then use hooks to use features


  return(
  <>
  <AllMyMedications />

  <Segment basic>
    <h1>Current Meds</h1>
    { showForm && <MedicationForm toggleForm={setShowForm}/> }
    <br/>
    <Button class="ui primary basic button" onClick={() => setShowForm(!showForm)}>
       { showForm ?  "Close Form" : "Add Another Medicine" }
    </Button>

      {/* <MedicationForm /> */}
  </Segment>

  </>
  )
}

export default MyMedicine;