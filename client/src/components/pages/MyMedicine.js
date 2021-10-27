import MedicationForm from '../medications/MedicationForm';
import AllMyMedications from '../medications/AllMyMedications';
import { Button, Segment, Header } from 'semantic-ui-react';
import ShowMedication from '../medications/ShowMedication';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
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


const MyMedicine = ({ }) => {
  const [showForm, setShowForm] = useState(false)
   // class componen into a presentational component, and then use hooks to use features


  return(
  <>
  <br/>
  <Header>My Medicine</Header>
  <br/>
  <AllMyMedications />

  <Segment basic>
    { showForm && <MedicationForm toggleForm={setShowForm}/> }
    <br/>
    <AddButton class="ui primary basic button" onClick={() => setShowForm(!showForm)}>
       { showForm ?  "Close Form" : "Add Another Medicine" }
    </AddButton>

      {/* <MedicationForm /> */}
  </Segment>

  </>
  )
}

export default MyMedicine;