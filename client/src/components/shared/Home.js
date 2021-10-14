import { Header, } from 'semantic-ui-react';
import React from 'react';
import Medications from '../medications/Medications';
import Comments from '../comments/Comments';
const Home = () => (
  <>
  <Header as="h3" textAlign="center">Welcome </Header>
  <Medications /> 
  {/* <Comments /> */}
  </>
)


export default Home;

