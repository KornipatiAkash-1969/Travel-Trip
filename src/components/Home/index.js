import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="container">
    <Header />

    <div className="home-container">
      <div>
        <h1 className="home-heading">
          Travel. Relax.
          <br />
          Memories.
        </h1>

        <p className="home-discription">
          With travel trip you can experience new travel and the best tourist
          destinations.
        </p>

        <Link to="/book-a-new-trip">
          <button type="button" className="book-trip-button">
            Book a new trip
          </button>
        </Link>
      </div>

      <img
        className="home-image"
        src="https://framerusercontent.com/images/APSbIv0MWvwKP97E4YZ1ZOUmEg.png?scale-down-to=1024&width=2214&height=2199"
        alt="travel"
      />
    </div>
  </div>
)

export default Home
