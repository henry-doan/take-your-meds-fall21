import { Header, } from 'semantic-ui-react';
import React from 'react';
import Medications from '../medications/Medications';

const Home = () => (
  <>
  <Header as="h3" textAlign="center">Display Current Date</Header>
  <h1>Display Current Time</h1>
  <br/>
  <h3>Today's Medications</h3>
  <Medications /> 
  </>
)


export default Home;

