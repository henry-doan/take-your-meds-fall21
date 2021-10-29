import React, { useEffect } from 'react';
import { MedicationConsumer } from '../../providers/MedicationProvider';
import { List, Segment, Grid, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css'

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
                    {/* <Link style={{textDecoration: "none", color: "black"}} to={{
                      pathname: `/medications/${m.id}`,
                      state: {...m}
                      }}> */}
                      <Grid.Column textAlign="center" verticalAlign="middle">
                        {/* <Segment circular style={square}> */}
                          <img src={m.img} size="small" width="70px" />
                        {/* </Segment> */}
                      </Grid.Column>

                      <Grid.Column textAlign="left" verticalAlign="middle">
                        {/* <Segment basic> */}
                        <List.Header>{m.name}</List.Header>
                        <List.Header style={{color: "green"}}>{m.nickname}</List.Header>
                        {/* </Segment> */}
                      </Grid.Column>
                    {/* </Link> */}

                    <Grid.Column textAlign="center" verticalAlign="middle">
                      <div>
                        <input type="checkbox" width="50px" height="50px;"/>
                        <label></label>
                      </div>
                      {/* <MedCheckbox /> */}
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