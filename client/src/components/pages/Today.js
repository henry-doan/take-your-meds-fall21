import React from 'react';
import { Segment } from 'semantic-ui-react';
import ConnectedAllMedications from '../medications/AllMedications';
import Clock from '../shared/Clock';
import styled from 'styled-components';
import Greeting from '../shared/Greeting';

const ClockContainer = styled.div`
  display: grid;
  place-content: center;
  background-color: #DCEDDA;
  font-family: Verdana;
  border-radius: 10px;
  height: 125px;
`


const Today = () => {
  return (
    <>
      <Segment basic>
        <Greeting />
      </Segment>

      <ClockContainer>
        <Segment basic>
          <Clock />
        </Segment>
      </ClockContainer>

      <Segment basic>
        <h3>Today's Medications</h3>
        <ConnectedAllMedications /> 
      </Segment>
  </>
  )
}


export default Today;
