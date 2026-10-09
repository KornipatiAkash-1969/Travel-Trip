import './index.css'

const Guests = props => {
  const {setCurrentStep, tripDetails, setTripDetails} = props

  const {adults, childrenCount, infants} = tripDetails

  const updateGuestCount = (fieldName, value) => {
    setTripDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value,
    }))
  }

  const increaseAdults = () => {
    updateGuestCount('adults', adults + 1)
  }

  const decreaseAdults = () => {
    if (adults > 1) {
      updateGuestCount('adults', adults - 1)
    }
  }

  const increaseChildren = () => {
    updateGuestCount('childrenCount', childrenCount + 1)
  }

  const decreaseChildren = () => {
    if (childrenCount > 0) {
      updateGuestCount('childrenCount', childrenCount - 1)
    }
  }

  const increaseInfants = () => {
    updateGuestCount('infants', infants + 1)
  }

  const decreaseInfants = () => {
    if (infants > 0) {
      updateGuestCount('infants', infants - 1)
    }
  }

  const onClickPrevious = () => {
    setCurrentStep(2)
  }

  const onClickNext = () => {
    setCurrentStep(4)
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">Guests</h1>

      <p className="form-description">Select your Guests</p>

      <div className="form-card">
        <div className="guest-row">
          <div>
            <p className="guest-title">Adults</p>
            <p className="guest-subtitle">Age 13 or above</p>
          </div>

          <div className="counter-container">
            <button
              type="button"
              className="counter-button"
              onClick={decreaseAdults}
            >
              -
            </button>

            <p className="count">{adults}</p>

            <button
              type="button"
              className="counter-button"
              onClick={increaseAdults}
            >
              +
            </button>
          </div>
        </div>

        <hr className="separator" />

        <div className="guest-row">
          <div>
            <p className="guest-title">Children</p>
            <p className="guest-subtitle">Age 2-12</p>
          </div>

          <div className="counter-container">
            <button
              type="button"
              className="counter-button"
              onClick={decreaseChildren}
            >
              -
            </button>

            <p className="count">{childrenCount}</p>

            <button
              type="button"
              className="counter-button"
              onClick={increaseChildren}
            >
              +
            </button>
          </div>
        </div>

        <hr className="separator" />

        <div className="guest-row">
          <div>
            <p className="guest-title">Infants</p>
            <p className="guest-subtitle">Under 2 Years</p>
          </div>

          <div className="counter-container">
            <button
              type="button"
              className="counter-button"
              onClick={decreaseInfants}
            >
              -
            </button>

            <p className="count">{infants}</p>

            <button
              type="button"
              className="counter-button"
              onClick={increaseInfants}
            >
              +
            </button>
          </div>
        </div>

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

export default Guests
