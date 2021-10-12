import { MedicationConsumer } from '../../providers/MedicationProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AllMedications = ({ medications, grabMedications }) => {

  useEffect( () => {
    grabMedications()
  }, [])

  return(
    <>
      <List divided relaxed>
        {medications.map( m => 
          <Link to={{
            pathname: `/medications/${m.id}`,
            state: {
              ...m
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{m.name}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedAllMedications = (props) => (
  <MedicationConsumer>
    { value => <AllMedications {...value} {...props}/>}
  </MedicationConsumer>
)

export default ConnectedAllMedications;