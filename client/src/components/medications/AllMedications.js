import { MedicationConsumer } from '../../providers/MedicationProvider';
import { List, Segment, Grid, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const AllMedications = ({ medications, grabMedications }) => {

  useEffect( () => {
    grabMedications()
  }, [])

// const Checkbox = () => (
//   <Checkbox label='Med Taken' />
// )

  return(
    <>
      { medications.map( m => 
          
          m.currently_taking ? 

           <List.Item>
             <List.Content>
               <Grid>
                  <Grid.Row>
             <Link style={{textDecoration: "none", color: "black"}} to={{
               pathname: `/medications/${m.id}`,
               state: {...m}
             }}>
                    <Grid.Column width="4" textAlign="left">
                      <Segment compact>
                        <img src={m.img} size="small" width="200px"/>
                      </Segment>
                    </Grid.Column>

                    <Grid.Column width="12" textAlign="left" verticalAlign="middle">
                      <List.Header>{m.name}</List.Header>
                      <List.Header style={{color: "green"}}>{m.nickname}</List.Header>
                    </Grid.Column>
         </Link>
             <div class="ui radio checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label></label></div>
                  </Grid.Row>
               </Grid>               
             </List.Content>
           </List.Item>
         :
         <> 
      </>
     )}
     <br></br>
  </>
  )
}

const ConnectedAllMedications = (props) => (
  <MedicationConsumer>
    { value => <AllMedications {...value} {...props}/>}
  </MedicationConsumer>
)

export default ConnectedAllMedications;