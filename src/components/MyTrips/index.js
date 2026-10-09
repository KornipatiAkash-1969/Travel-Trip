import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const MyTrips = props => {
  const {tripsList = [], setTripsList} = props

  const onCancelTrip = id => {
    if (setTripsList) {
      const updatedTrips = tripsList.filter(eachTrip => eachTrip.id !== id)
      setTripsList(updatedTrips)
    }
  }

  return (
    <div className="container">
      {' '}
      <Header />
      <div className="my-trips-container">
        <h1 className="my-trips-heading">My Trips</h1>

        {tripsList.length === 0 ? (
          <div className="no-trips-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/travel-no-trips-img.png"
              alt="no trips"
              className="no-trips-image"
            />

            <h1 className="no-trips-heading">No upcoming trips</h1>

            <p className="no-trips-description">
              When you book a trip, you will see your trip details here
            </p>

            <Link to="/book-a-new-trip">
              <button type="button" className="book-trip-button">
                Book a new trip
              </button>
            </Link>
          </div>
        ) : (
          <ul className="trips-list">
            {tripsList.map(eachTrip => (
              <li key={eachTrip.id} className="trip-card">
                <div className="trip-details">
                  <h1 className="trip-location">{eachTrip.endLocation}</h1>

                  <div>
                    <p className="trip-date-label">Date</p>

                    <p className="trip-date">
                      {eachTrip.startDate} to {eachTrip.endDate}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => onCancelTrip(eachTrip.id)}
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default MyTrips
