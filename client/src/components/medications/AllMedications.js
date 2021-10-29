import { MedicationConsumer } from '../../providers/MedicationProvider';
import { List, Segment, Grid, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const AllMedications = ({ medications, grabMedications }) => {

  useEffect( () => {
    grabMedications()
  }, [])

  const square = { width: 50, height: 50 }


  return(
    <>
      { medications.map( m => 
          
          m.currently_taking ? 

           <List.Item>
             <List.Content>
               <Grid columns={3}>
                  <Grid.Row>
                    <Link style={{textDecoration: "none", color: "black"}} to={{
                      pathname: `/medications/${m.id}`,
                      state: {...m}
                      }}>
                      <Grid.Column width={4} textAlign="left">
                        {/* <Segment circular style={square}> */}
                          <img src={m.img} size="small" width="50px" />
                        {/* </Segment> */}
                      </Grid.Column>

                      <Grid.Column width={8} textAlign="left" verticalAlign="middle">
                        <Segment basic>
                        <List.Header>{m.name}</List.Header>
                        <List.Header style={{color: "green"}}>{m.nickname}</List.Header>
                        </Segment>
                      </Grid.Column>
                    </Link>

                    <Grid.Column width={4}>
                      <div class="ui radio checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label>Taken Today?</label></div>
                    </Grid.Column>

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