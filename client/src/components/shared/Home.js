import { Header, } from 'semantic-ui-react';
import React from 'react';
import Medications from '../medications/Medications';
import { HomeImg } from '../../styles/homeStyles';
const Home = () => (
  <>
  <h1>Display Current Date</h1>
  <h1>Display Current Time</h1>
  <br/>
  <h3>Today's Medications</h3>
  <Medications /> 
  <img src="/Logo.png" width="100px"/>

  </>
)


export default Home;

