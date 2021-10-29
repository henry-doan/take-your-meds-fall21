import { useState, useEffect} from 'react';
import { Checkbox } from 'semantic-ui-react';
import { MedicationConsumer } from '../../providers/MedicationProvider';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

const StopTakingButton = styled.button`
background-color: #FF0000;
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
const StartTakingButton = styled.button`
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
const MedicationTaking = ({id, name, nickname, strength, dosage, currently_taking, img, updateMedication, medicationId}) => {


  return( 
    <>
    {
    currently_taking ? 
    
    <ButtonContainer>
      <StopTakingButton
        name='currently_taking'
        onClick={() => updateMedication(medicationId, {currently_taking: false})}
      >Stop Taking</StopTakingButton>
    </ButtonContainer>
    :
    <ButtonContainer>
      <StartTakingButton
      name='currently_taking'
      onClick={() => updateMedication(medicationId, {currently_taking: true})}
      >Start Taking</StartTakingButton>
    </ButtonContainer>
    }
  </>
  )
}

const ConnectedMedicationTaking = (props) => (
  <MedicationConsumer>
    { value => <MedicationTaking {...props} {...value} />}
  </MedicationConsumer>
)

export default ConnectedMedicationTaking;