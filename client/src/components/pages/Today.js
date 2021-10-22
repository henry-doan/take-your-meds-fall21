import React from 'react';
import { Segment } from 'semantic-ui-react';
import ConnectedAllMedications from '../medications/AllMedications';
import moment from 'moment';
import Clock from '../shared/Clock';

const Today = () => (
  <>
  <Segment basic>
    <h3>{moment().format('MMMM Do YYYY')}</h3>
    {/* <h1>{moment().format('h:mm:ss a')}</h1> */}
    <Clock />
  </Segment>
  <Segment basic>
    <h3>Today's Medications</h3>
    <ConnectedAllMedications /> 
  </Segment>
  </>
)


<<<<<<< HEAD
export default Today;

=======
export default Today;
>>>>>>> e6c10fc (pulling stuff down)
