import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MedicationContext = React.createContext();
export const MedicationConsumer = MedicationContext.Consumer;

const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState([])

  // useEffect(() => {
  //   axios.get('/api/medications')
  //     .then( res => setMedications(res.data) )
  //     .catch( err => console.log(err))
  // }, [])
  
  const grabMedications = () => {
    axios.get('/api/medications')
      .then( res => setMedications(res.data) )
      .catch( err => console.log(err))
  }

  const addMedication = (medication) => {
    axios.post('/api/medications', { medication })
      .then( res => {
        setMedications([...medications, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateMedication = (id, medication) => {
    axios.put(`/api/medications/${id}`, { medication })
      .then(res => {
        const updatedMedications = medications.map( m => {
          if (m.id == id) {
            return res.data 
          }
          return m
        })
        setMedications(updatedMedications)
        window.location.href = `/medications/${id}`
        //history.push(`/medications/`)
      })
      .catch( err => console.log(err))
  }

  const deleteMedication = (id) => {
    axios.delete(`/api/medications/${id}`)
      .then(res => {
        setMedications(medications.filter( m => m.id !== id))
        window.location.href = `/medications/`

      })
      .catch( err => console.log(err))
  }

  const countMeds = () => {
    return medications.length()
  }

  return (
    <MedicationContext.Provider value={{
      medications,
      grabMedications: grabMedications,
      addMedication: addMedication,
      updateMedication: updateMedication,
      deleteMedication: deleteMedication,
      countMeds: countMeds
    }}>
      { children }
    </MedicationContext.Provider>
  )

}

export default MedicationProvider;