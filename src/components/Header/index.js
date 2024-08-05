import {Component} from 'react'
import {FaUserGraduate, FaMailBulk} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {GiAchievement} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import DarkModeSwitch from '../DarkModeSwitch'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

const navLinksList = [
  {
    id: 'educationSection',
    section: 'Education',
    logo: <FaUserGraduate className="nav-link-logo" />,
  },
  {
    id: 'skillsSection',
    section: 'Skills',
    logo: <ImBooks className="nav-link-logo" />,
  },
  {
    id: 'projectsSection',
    section: 'Projects',
    logo: <RiComputerFill className="nav-link-logo" />,
  },
  {
    id: 'moreCertificatesSection',
    section: 'More CFTs',
    logo: <GiAchievement className="nav-link-logo" />,
  },
  {
    id: 'contactMeSection',
    section: 'Contact me',
    logo: <FaMailBulk className="nav-link-logo" />,
  },
]

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'aboutMeSection',
      hamStatus: false,
      scrollPosition: 0,
      showNavbar: true,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleScrollToGetActiveTab)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleScrollToGetActiveTab)
  }

  handleScroll() {
    const currentScrollPos = window.pageYOffset
    const {scrollPosition} = this.state

    this.setState({
      showNavbar: scrollPosition > currentScrollPos || currentScrollPos < 10,
      scrollPosition: currentScrollPos,
    })
  }

  handleScrollToGetActiveTab = () => {
    const sections = document.querySelectorAll('section')
    let activeLink = this.state.activeLink

    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        activeLink = section.getAttribute('id')
      }
    })

    if (activeLink !== this.state.activeLink) {
      this.setState({activeLink})
    }
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
    const {hamStatus, showNavbar, activeLink} = this.state
    const navLinksClassName = hamStatus ? 'nav-ul-cont-dynamic' : ''

    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkMode, changeDarkMode} = value

          return (
            <nav
              className={`navbar ${showNavbar ? 'nav-visible' : 'nav-hidden'} ${
                darkMode ? 'navbar-dark' : ''
              }`}
            >
              <div className="nav-cont-1">
                <a
                  className="anchor-link"
                  href="#aboutMeSection"
                  rel="noreferrer"
                  onClick={this.scrollToSection}
                >
                  <img
                    className={`profile-logo ${
                      activeLink === 'aboutMeSection'
                        ? 'active-about-me-tab'
                        : ''
                    }`}
                    src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1719133533/p96wrf93qcvjkq1c5oc4.jpg"
                    alt="profile-logo"
                  />
                </a>
                <div className="nav-ham-cont">
                  <DarkModeSwitch changeToDarkMode={changeDarkMode} />
                  <label className="hamburger">
                    <input type="checkbox" onChange={this.onClickHamBtn} />
                    <svg viewBox="0 0 32 32">
                      <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      ></path>
                      <path className="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className={`nav-cont-2 ${navLinksClassName}`}>
                <ul className="nav-ul-cont">
                  {navLinksList.map(eachItem => (
                    <li className="nav-link" key={eachItem.id}>
                      <a
                        className="anchor-link"
                        href={`#${eachItem.id}`}
                        rel="noreferrer"
                        onClick={this.scrollToSection}
                      >
                        <button
                          className={`nav-link-btn  ${
                            eachItem.id === activeLink ? 'active-tab-btn' : ''
                          }`}
                          type="button"
                        >
                          {eachItem.logo}
                          {eachItem.section}
                        </button>
                      </a>
                    </li>
                  ))}
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
