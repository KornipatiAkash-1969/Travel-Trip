import {useState} from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'

import './index.css'

const YourDetails = props => {
  const {setCurrentStep, tripDetails, setTripDetails} = props

  const [nameError, setNameError] = useState(false)
  const [startLocationError, setStartLocationError] = useState(false)
  const [endLocationError, setEndLocationError] = useState(false)

  const {name, startLocation, endLocation} = tripDetails

  const updateField = (fieldName, value) => {
    setTripDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value,
    }))
  }

  const validateForm = () => {
    const isNameValid = name.trim() !== ''
    const isStartLocationValid = startLocation.trim() !== ''
    const isEndLocationValid = endLocation.trim() !== ''

    setNameError(!isNameValid)
    setStartLocationError(!isStartLocationValid)
    setEndLocationError(!isEndLocationValid)

    return isNameValid && isStartLocationValid && isEndLocationValid
  }

  const onClickNext = () => {
    if (validateForm()) {
      setCurrentStep(2)
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Your Details</h1>

      <p className="form-description">Enter your name and location details</p>

      <div className="form-card">
        <label htmlFor="name" className="label">
          Name
        </label>

        <div className="input-container">
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Enter your name"
            className={`input ${nameError ? 'input-error' : ''}`}
            onChange={event => {
              updateField('name', event.target.value)
              setNameError(false)
            }}
          />

          {nameError && <AiOutlineInfoCircle className="error-icon" />}
        </div>

        {nameError && <p className="error-message">Enter your name</p>}

        <label htmlFor="startLocation" className="label">
          Start Location
        </label>

        <div className="input-container">
          <input
            id="startLocation"
            type="text"
            value={startLocation}
            placeholder="Enter start location"
            className={`input ${startLocationError ? 'input-error' : ''}`}
            onChange={event => {
              updateField('startLocation', event.target.value)
              setStartLocationError(false)
            }}
          />

          {startLocationError && <AiOutlineInfoCircle className="error-icon" />}
        </div>

        {startLocationError && (
          <p className="error-message">Enter your start location</p>
        )}

        <label htmlFor="endLocation" className="label">
          End Location
        </label>

        <div className="input-container">
          <input
            id="endLocation"
            type="text"
            value={endLocation}
            placeholder="Enter end location"
            className={`input ${endLocationError ? 'input-error' : ''}`}
            onChange={event => {
              updateField('endLocation', event.target.value)
              setEndLocationError(false)
            }}
          />

          {endLocationError && <AiOutlineInfoCircle className="error-icon" />}
        </div>

        {endLocationError && (
          <p className="error-message">Enter your end location</p>
        )}

        <button type="button" className="next-button" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default YourDetails
