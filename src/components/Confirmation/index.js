import {useState} from 'react'

import './index.css'

const Confirmation = props => {
  const {setCurrentStep, tripDetails, setTripDetails, setTripsList} = props

  const [isConfirmed, setIsConfirmed] = useState(false)

  const {
    name,
    startLocation,
    endLocation,
    startDate,
    endDate,
    adults,
    childrenCount,
    infants,
    travelAssistanceNeeded,
    travelOption,
  } = tripDetails

  const totalGuests = adults + childrenCount + infants

  const onClickCancel = () => {
    setTripDetails({
      name: '',
      startLocation: '',
      endLocation: '',
      startDate: '',
      endDate: '',
      adults: 1,
      childrenCount: 0,
      infants: 0,
      travelAssistanceNeeded: false,
      travelOption: 'car',
    })

    setCurrentStep(1)
  }

  const onClickConfirm = () => {
    const newTrip = {
      id: Date.now(),
      ...tripDetails,
    }

    setTripsList(prevTrips => [...prevTrips, newTrip])
    setIsConfirmed(true)
  }

  const onClickBookNewTrip = () => {
    setTripDetails({
      name: '',
      startLocation: '',
      endLocation: '',
      startDate: '',
      endDate: '',
      adults: 1,
      childrenCount: 0,
      infants: 0,
      travelAssistanceNeeded: false,
      travelOption: 'car',
    })

    setCurrentStep(1)
    setIsConfirmed(false)
  }

  if (isConfirmed) {
    return (
      <div className="form-container">
        <div className="success-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
            alt="Success"
            className="success-icon"
          />

          <h1 className="success-heading">Awesome!</h1>

          <p className="success-description">
            Your booking has been confirmed.
          </p>

          <button
            type="button"
            className="next-button"
            onClick={onClickBookNewTrip}
          >
            Book a New Trip
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Confirmation</h1>

      <p className="form-description">Confirm your details</p>

      <div className="form-card">
        <div className="info-row">
          <p className="info-label">Name:</p>
          <p className="info-value">{name}</p>
        </div>

        <div className="info-row">
          <p className="info-label">Start Location:</p>
          <p className="info-value">{startLocation}</p>
        </div>

        <div className="info-row">
          <p className="info-label">End Location:</p>
          <p className="info-value">{endLocation}</p>
        </div>

        <div className="info-row">
          <p className="info-label">Start Date:</p>
          <p className="info-value">{startDate}</p>
        </div>

        <div className="info-row">
          <p className="info-label">End Date:</p>
          <p className="info-value">{endDate}</p>
        </div>

        <div className="info-row">
          <p className="info-label">Guests:</p>
          <p className="info-value">{totalGuests}</p>
        </div>

        <div className="info-row">
          <p className="info-label">Travel Assistance:</p>
          <p className="info-value">
            {travelAssistanceNeeded ? travelOption : 'Not Required'}
          </p>
        </div>

        <div className="buttons-container">
          <button
            type="button"
            className="previous-button"
            onClick={onClickCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="next-button"
            onClick={onClickConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
