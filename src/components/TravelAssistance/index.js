import './index.css'

const TravelAssistance = props => {
  const {
    setCurrentStep,
    tripDetails,
    setTripDetails,
    travelAssistanceList,
  } = props

  const {travelAssistanceNeeded, travelOption} = tripDetails

  const updateTripDetails = updatedFields => {
    setTripDetails(prevDetails => ({
      ...prevDetails,
      ...updatedFields,
    }))
  }

  const onChangeCheckbox = () => {
    updateTripDetails({
      travelAssistanceNeeded: !travelAssistanceNeeded,
    })
  }

  const onChangeTravelOption = event => {
    updateTripDetails({
      travelOption: event.target.value,
    })
  }

  const onClickPrevious = () => {
    setCurrentStep(3)
  }

  const onClickNext = () => {
    setCurrentStep(5)
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Travel Assistance</h1>

      <p className="form-description">
        Select your travel assistance preference
      </p>

      <div className="form-card">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="travelAssistance"
            className="checkbox-input"
            checked={travelAssistanceNeeded}
            onChange={onChangeCheckbox}
          />

          <label htmlFor="travelAssistance" className="checkbox-label">
            Travel Assistance Needed
          </label>
        </div>

        {travelAssistanceNeeded && (
          <>
            <label htmlFor="travelOption" className="label">
              Travel Assistance Type
            </label>

            <select
              id="travelOption"
              className="select-input"
              value={travelOption}
              onChange={onChangeTravelOption}
            >
              {travelAssistanceList.map(eachItem => (
                <option key={eachItem.value} value={eachItem.value}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
          </>
        )}

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
      </div>
    </div>
  )
}

export default TravelAssistance
