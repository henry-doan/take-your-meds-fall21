const ShowMedication = ({ location }) => {

  const { id, name, nickname, strength, dosage } = location.state
  return (
    <>  
      <h1>{name}</h1>
      <h3>{nickname}</h3>
      <p>{strength}</p>
      <p>{dosage}</p>
    </>
  )
}

export default ShowMedication;