import React from 'react';
import kat from '../../images/kat.png';
import thomas from '../../images/thomas.png';
import sean from '../../images/sean.png';
import meg from '../../images/meg.png';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

function About(props) {
  return (
    <div>
      <h1>Four developers on a mission</h1>
      <h2>to help you rememeber to take your meds.</h2>
      <MyCard>
        <Card.Content>
          <Card>
          <img src={kat} alt="Kat" width="200px"/>
          </Card>
          <Card>
          <img src={thomas} alt="Thomas" width="200px" />
          </Card>
          <Card>
          <img src={sean} alt="Sean" width="200px" />
          </Card>
					<Card>
          <img src={meg} alt="Meg" width="200px" />
          </Card>
        </Card.Content>
      </MyCard>

    </div>
  );
}

export default About;

const MyCard = styled(Card)`
  display: flex;
`