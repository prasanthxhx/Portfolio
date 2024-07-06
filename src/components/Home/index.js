import {Component} from 'react'
import {
  FaPlayCircle,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaUserGraduate,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import {IoLogoWhatsapp, IoMdMailUnread, IoIosTime} from 'react-icons/io'
import Header from '../Header'
import Typewriter from '../TypeWriting'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

class Home extends Component {
  state = {buttonsVisible: false, phoneBtnVisible: false}

  toggleButtons = () => {
    this.setState(prevState => ({
      buttonsVisible: !prevState.buttonsVisible,
    }))
  }

  onClickPhoneBtn = () => {
    this.setState(prevState => ({phoneBtnVisible: !prevState.phoneBtnVisible}))
  }

  render() {
    const {buttonsVisible, phoneBtnVisible} = this.state
    const extraButtonsClass = buttonsVisible ? 'visible' : ''
    const phoneBtnClass = phoneBtnVisible ? 'phone-visible' : ''

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
                  <div className="about-me-cont">
                    <Typewriter />
                    <p
                      className={`about-me-para ${darkMode ? 'textDark' : ''}`}
                    >
                      A passionate individual who always thrives to work on end
                      to end products which develop sustainable and scalable
                      social and technical systems to create impact.
                    </p>
                    <h1 className="role-h1">
                      MERN <br />
                      FULL STACK <br />
                      WEB DEVELOPER
                    </h1>
                    <div className="contact-cont">
                      <button className="contact-btn profile-dot" type="button">
                        <FaGithub />
                      </button>
                      <button
                        onClick={this.onClickPhoneBtn}
                        className="contact-btn phone-btn profile-dot"
                        type="button"
                      >
                        <IoLogoWhatsapp />
                      </button>
                      <div className={`phone-cont ${phoneBtnClass}`}>
                        +91 9943474260
                      </div>
                    </div>
                    <button className="email-btn" type="button">
                      <span className="profile-dot mail-icon">
                        <IoMdMailUnread />{' '}
                      </span>
                      Contact Me
                    </button>
                  </div>
                  <div className="profile-pic-cont">
                    <img
                      className="profile-pic"
                      src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1719912556/IMG_20240702_145731_emoka4.jpg"
                      alt="profile-pic"
                    />

                    <div className="button-container">
                      <button
                        onClick={this.toggleButtons}
                        type="button"
                        className="profile-dot"
                      >
                        <FaPlayCircle />
                      </button>
                      <div className={`extra-buttons ${extraButtonsClass}`}>
                        <button className="extra-button profile-dot left">
                          <FaInstagram />
                        </button>
                        <button className="extra-button profile-dot right">
                          <FaLinkedinIn />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education-section">
                <h1 className="edu-h1">
                  <FaUserGraduate className="edu-icon" />
                  Education
                </h1>
                <div className="edu-card-cont">
                  <div className="edu-card">
                    <img
                      className="edu-institute-img"
                      src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1720184633/tuu9eixat7cdsiskhfua.jpg"
                      alt="institute-img"
                    />
                    <hr className="inst-hr-line" />
                    <div className="institute-description">
                      <div className="inst-h1-cont">
                        {' '}
                        <a
                          className="anchor-link"
                          href="https://www.ccbp.in/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4 className="institute-h1">
                            CCBP Intensive 4.0 Tech Program
                            <FaExternalLinkAlt className="institute-link-icon" />{' '}
                          </h4>
                        </a>
                        <p className="duration-para">
                          <IoIosTime className="duration-icon" />
                          April 2023 - Present
                        </p>
                      </div>
                      <h5 className="course-h1">FullStack Web Development</h5>
                      <p className="nxtwave-para">
                        CCBP Intensive is an Industry Ready Certification
                        Program focusing on full-stack web development that
                        provides training through an immersive hands-on and
                        reverse-engineered curriculum
                      </p>
                    </div>
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
