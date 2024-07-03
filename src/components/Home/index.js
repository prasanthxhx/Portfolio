import {Component} from 'react'
import Header from '../Header'
import Typewriter from '../TypeWriting'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkMode} = value

          const darkModeClassName = darkMode ? 'dark' : ''

          return (
            <div className="home-bg-cont">
              <div className={`home-cont-1 ${darkModeClassName}`}>
                <Header />
                <div className="about-me-section">
                  <div>
                    <Typewriter />
                    <p
                      className={`about-me-para ${darkMode ? 'textDark' : ''}`}
                    >
                      A passionate individual who always thrives to work on end
                      to end products which develop sustainable and scalable
                      social and technical systems to create impact.
                    </p>
                  </div>
                  <div>
                    <img
                      className="profile-pic"
                      src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1719912556/IMG_20240702_145731_emoka4.jpg"
                      alt="profile-pic"
                    />
                    <div className="profile-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Home
