import {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import BookTrip from './components/BookTrip'
import Login from './components/Login'
import MyTrips from './components/MyTrips'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

const stepsList = [
  {
    stepId: 'YOUR_DETAILS',
    displayText: 'Your Details',
  },
  {
    stepId: 'DATE_SELECTION',
    displayText: 'Date Selection',
  },
  {
    stepId: 'GUESTS',
    displayText: 'Guests',
  },
  {
    stepId: 'TRAVEL_ASSISTANCE',
    displayText: 'Travel Assistance',
  },
  {
    stepId: 'CONFIRMATION',
    displayText: 'Confirmation',
  },
]

const travelAssistanceList = [
  {
    value: 'car',
    displayText: 'Car',
  },
  {
    value: 'flight',
    displayText: 'Flight',
  },
  {
    value: 'bus',
    displayText: 'Bus',
  },
  {
    value: 'train',
    displayText: 'Train',
  },
]

const App = () => {
  const [tripsList, setTripsList] = useState([])

  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <ProtectedRoute exact path="/" component={Home} />

      <ProtectedRoute
        exact
        path="/book-a-new-trip"
        component={BookTrip}
        stepsList={stepsList}
        travelAssistanceList={travelAssistanceList}
        tripsList={tripsList}
        setTripsList={setTripsList}
      />

      <ProtectedRoute
        exact
        path="/my-trips"
        component={MyTrips}
        tripsList={tripsList}
        setTripsList={setTripsList}
      />

      <Route exact path="/not-found" component={NotFound} />

      <Redirect to="/not-found" />
    </Switch>
  )
}

export default App
