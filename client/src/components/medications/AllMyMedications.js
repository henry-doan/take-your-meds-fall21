import { MedicationConsumer } from '../../providers/MedicationProvider';
import { List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AllMyMedications = ({ medications, grabMedications }) => {

  useEffect( () => {
    grabMedications()
  }, [])

  return(
    <>
        { medications.map( m => 
          
             m.currently_taking ? 
              <Link to={{
                pathname: `/medications/${m.id}`,
                state: {
                  ...m
                }
              }}>
              <List.Item>
                <List.Content>
                  <Segment>
                  <List.Header>{m.name}</List.Header>
                  </Segment>
                  
                </List.Content>
              </List.Item>
            </Link>
            :
            <> </>
        )}
        <br></br>
    </>
  )
}

const ConnectedAllMyMedications = (props) => (
  <MedicationConsumer>
    { value => <AllMyMedications {...value} {...props}/>}
  </MedicationConsumer>
)

export default ConnectedAllMyMedications;