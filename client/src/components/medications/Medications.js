import MedicationForm from './MedicationForm';
import AllMedications from './AllMedications';
import ShowMedication from './ShowMedication';
import Comments from  '../comments/Comments';
const Medications = () => (
  <>
    <h1>My Medications</h1>
    <MedicationForm />
    <AllMedications />
    {/* <Comments /> */}
  </>
)

export default Medications;