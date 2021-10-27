import { MedicationConsumer } from '../../providers/MedicationProvider';
import { List, Segment, Divider, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Med1 from '../../images/meds/download.png';
import Med2 from '../../images/meds/images.png';

const AllMyMedications = ({ medications, grabMedications }) => {

  useEffect( () => {
    grabMedications()
  }, [])

  return(
    <>
        { medications.map( m => 
          
             m.currently_taking ? 
              <Link style={{textDecoration: "none", color: "black"}} to={{
                pathname: `/medications/${m.id}`,
                state: {
                  ...m
                }
              }}>

              <List.Item>
                <List.Content>
                  <Grid>
                    <Grid.Row>
                    <Grid.Column width="4" textAlign="center">

                  <Segment compact>
                  <img src={Med2} size="small" width="200px"/>
                  </Segment>
                  </Grid.Column>

                  <Grid.Column width="12" textAlign="center" verticalAlign="middle">
                  <List.Header>{m.name}</List.Header>
                  <List.Header style={{color: "green"}}>{m.nickname}</List.Header>
                  </Grid.Column>
                  </Grid.Row>

                  </Grid>
                  <Divider/>
                  
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