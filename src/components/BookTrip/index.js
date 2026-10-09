import {useState} from 'react'

import Header from '../Header'
import YourDetails from '../YourDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'

import './index.css'

const completedImage =
  'https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png'

const BookTrip = props => {
  const {stepsList, travelAssistanceList, tripsList, setTripsList} = props

  const [currentStep, setCurrentStep] = useState(1)

  const [tripDetails, setTripDetails] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    adults: 1,
    childrenCount: 0,
    infants: 0,
    travelAssistanceNeeded: false,
    travelOption: travelAssistanceList[0].value,
  })

  const stepComponents = {
    1: (
      <YourDetails
        setCurrentStep={setCurrentStep}
        tripDetails={tripDetails}
        setTripDetails={setTripDetails}
      />
    ),

    2: (
      <DateSelection
        setCurrentStep={setCurrentStep}
        tripDetails={tripDetails}
        setTripDetails={setTripDetails}
      />
    ),

    3: (
      <Guests
        setCurrentStep={setCurrentStep}
        tripDetails={tripDetails}
        setTripDetails={setTripDetails}
      />
    ),

    4: (
      <TravelAssistance
        setCurrentStep={setCurrentStep}
        tripDetails={tripDetails}
        setTripDetails={setTripDetails}
        travelAssistanceList={travelAssistanceList}
      />
    ),

    5: (
      <Confirmation
        setCurrentStep={setCurrentStep}
        tripDetails={tripDetails}
        setTripDetails={setTripDetails}
        tripsList={tripsList}
        setTripsList={setTripsList}
      />
    ),
  }

  return (
    <div className="container">
      <Header />

      <div className="booktrip-container">
        <div className="steps-container">
          <ul className="steps-list">
            {stepsList.map((step, index) => {
              const stepNumber = index + 1
              const isCompleted = currentStep > stepNumber
              const isActive = currentStep === stepNumber

              return (
                <li key={step.stepId} className="step-item">
                  {isCompleted ? (
                    <img
                      src={completedImage}
                      alt={step.displayText}
                      className="completed-icon"
                    />
                  ) : (
                    <div
                      className={`step-number ${isActive ? 'active-step' : ''}`}
                    >
                      {stepNumber}
                    </div>
                  )}

                  <p
                    className={`step-text ${
                      isActive ? 'active-step-text' : ''
                    }`}
                  >
                    {step.displayText}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>

        {stepComponents[currentStep]}
      </div>
    </div>
  )
}

export default BookTrip
