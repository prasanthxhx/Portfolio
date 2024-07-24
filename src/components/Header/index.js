import {Component} from 'react'
import {MdSort} from 'react-icons/md'
import {FcApproval} from 'react-icons/fc'
import DarkModeSwitch from '../DarkModeSwitch'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamStatus: false,
      scrollPosition: 0,
      showNavbar: true,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const currentScrollPos = window.pageYOffset
    const {scrollPosition} = this.state

    this.setState({
      showNavbar: scrollPosition > currentScrollPos || currentScrollPos < 10,
      scrollPosition: currentScrollPos,
    })
  }

  onClickHamBtn = () => {
    this.setState(prevState => ({hamStatus: !prevState.hamStatus}))
  }

  scrollToSection = event => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href').substring(1)
    const targetSection = document.getElementById(targetId)
    targetSection.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const {hamStatus, showNavbar} = this.state
    const navLinksClassName = hamStatus ? 'nav-ul-cont-dynamic' : ''

    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkMode, changeDarkMode} = value
          const navDarkClassName = darkMode ? 'nav-dark' : ''

          return (
            <nav
              className={`navbar ${showNavbar ? 'nav-visible' : 'nav-hidden'}`}
            >
              <div className="nav-cont-1">
                <img
                  className="profile-logo"
                  src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1719133533/p96wrf93qcvjkq1c5oc4.jpg"
                  alt="profile-logo"
                />
                <div className="nav-ham-cont">
                  <DarkModeSwitch changeToDarkMode={changeDarkMode} />
                  <label class="hamburger">
                    <input type="checkbox" onChange={this.onClickHamBtn} />
                    <svg viewBox="0 0 32 32">
                      <path
                        class="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      ></path>
                      <path class="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className={`nav-cont-2 ${navLinksClassName}`}>
                <ul className="nav-ul-cont">
                  <li className="nav-link">
                    <a
                      className="anchor-link"
                      href="#homeSection"
                      rel="noreferrer"
                      onClick={this.scrollToSection}
                    >
                      <button
                        className={`nav-link-btn ${navDarkClassName}`}
                        type="button"
                      >
                        <FcApproval className="nav-link-logo" />
                        about me
                      </button>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a
                      className="anchor-link"
                      href="#educationSection"
                      rel="noreferrer"
                      onClick={this.scrollToSection}
                    >
                      <button
                        className={`nav-link-btn ${navDarkClassName}`}
                        type="button"
                      >
                        <FcApproval className="nav-link-logo" />
                        Education
                      </button>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a
                      className="anchor-link"
                      href="#skillsSection"
                      rel="noreferrer"
                      onClick={this.scrollToSection}
                    >
                      <button
                        className={`nav-link-btn ${navDarkClassName}`}
                        type="button"
                      >
                        <FcApproval className="nav-link-logo" />
                        Skills
                      </button>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a
                      className="anchor-link"
                      href="#projectsSection"
                      rel="noreferrer"
                      onClick={this.scrollToSection}
                    >
                      <button
                        className={`nav-link-btn ${navDarkClassName}`}
                        type="button"
                      >
                        <FcApproval className="nav-link-logo" />
                        Projects
                      </button>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a
                      className="anchor-link"
                      href="#moreCertificatesSection"
                      rel="noreferrer"
                      onClick={this.scrollToSection}
                    >
                      <button
                        className={`nav-link-btn ${navDarkClassName}`}
                        type="button"
                      >
                        <FcApproval className="nav-link-logo" />
                        Certificates
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Header
