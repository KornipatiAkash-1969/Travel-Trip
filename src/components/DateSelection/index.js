import {useState} from 'react'

import './index.css'

const DateSelection = props => {
  const {setCurrentStep, tripDetails, setTripDetails} = props

  const [startDateError, setStartDateError] = useState(false)
  const [endDateError, setEndDateError] = useState(false)
  const [dateErrorMsg, setDateErrorMsg] = useState('')

  const {startDate, endDate} = tripDetails

  const updateField = (fieldName, value) => {
    setTripDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value,
    }))
  }

  const onClickPrevious = () => {
    setCurrentStep(1)
  }

  const onClickNext = () => {
    const isStartDateValid = startDate !== ''
    const isEndDateValid = endDate !== ''

    setStartDateError(!isStartDateValid)
    setEndDateError(!isEndDateValid)
    setDateErrorMsg('')

    if (!isStartDateValid || !isEndDateValid) {
      return
    }

    if (new Date(endDate) < new Date(startDate)) {
      setDateErrorMsg('The end date cannot be less than the start date')
      setEndDateError(true)
      return
    }

    setCurrentStep(3)
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Date Selection</h1>

      <p className="form-description">Select your Start and End Date</p>

      <form className="form-card">
        <label htmlFor="startDate" className="label">
          Start Date
        </label>

        <input
          id="startDate"
          type="date"
          value={startDate}
          className={`input ${startDateError ? 'input-error' : ''}`}
          onChange={event => {
            updateField('startDate', event.target.value)
            setStartDateError(false)
          }}
        />

        {startDateError && <p className="error-message">Select start date</p>}

        <label htmlFor="endDate" className="label">
          End Date
        </label>

        <input
          id="endDate"
          type="date"
          value={endDate}
          className={`input ${endDateError ? 'input-error' : ''}`}
          onChange={event => {
            updateField('endDate', event.target.value)
            setEndDateError(false)
            setDateErrorMsg('')
          }}
        />

        {endDateError && endDate === '' && (
          <p className="error-message">Select end date</p>
        )}

        {dateErrorMsg && <p className="error-message">{dateErrorMsg}</p>}

        <div className="buttons-container">
          <button
            type="button"
            className="previous-button"
            onClick={onClickPrevious}
          >
            Previous
          </button>

          <button type="button" className="next-button" onClick={onClickNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default DateSelection
