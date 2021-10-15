import { useEffect, useState } from "react";
import { MedicationConsumer } from "../../providers/MedicationProvider";
import axios from "axios";
const ShowMedication = ({ match }) => {
  const [medication, setMedication] = useState({})
  useEffect( () => {
    showMeds()
  },[])

  const showMeds = () => {
    axios.get(`/api/medications/${match.params.id}`)
    .then( res => setMedication(res.data) )
    .catch( err => console.log(err))
  }

  // const delete

  const { id, name, nickname, strength, dosage } = medication
  return (
    <>  
      <h1>{name}</h1>
      <h3>{nickname}</h3>
      <p>{strength}</p>
      <p>{dosage}</p>
    </>
  )
}

// const ConnectedShowMedications = (props) => (
//   <MedicationConsumer>
//     { value => <ShowMedication {...value} {...props}/>}
//   </MedicationConsumer>
// )

export default ShowMedication;