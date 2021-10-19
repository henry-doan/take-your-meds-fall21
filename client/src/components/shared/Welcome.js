import { Header, Button} from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <>
  <Header as="h3" textAlign="center">Welcome </Header>
  <h1>Medication Tracker</h1>
  <h3>Track, Log, Live</h3>
  <Link to="/medications" >
      <Button >Medication </Button>
  </Link>
  </>
)


export default Welcome;
