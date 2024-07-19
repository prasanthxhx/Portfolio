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
                  <button
                    type="button"
                    className="ham-btn"
                    onClick={this.onClickHamBtn}
                  >
                    <MdSort />
                  </button>
                </div>
              </div>
              <div className={`nav-cont-2 ${navLinksClassName}`}>
                <ul className="nav-ul-cont">
                  <li className="nav-link">
                    <button
                      className={`nav-link-btn ${navDarkClassName}`}
                      type="button"
                      href="#"
                    >
                      <FcApproval className="nav-link-logo" />
                      about me
                    </button>
                  </li>
                  <li className="nav-link">
                    <button
                      className={`nav-link-btn ${navDarkClassName}`}
                      type="button"
                      href="#"
                    >
                      <FcApproval className="nav-link-logo" />
                      Education
                    </button>
                  </li>
                  <li className="nav-link">
                    <button
                      className={`nav-link-btn ${navDarkClassName}`}
                      type="button"
                      href="#"
                    >
                      <FcApproval className="nav-link-logo" />
                      Skills
                    </button>
                  </li>
                  <li className="nav-link">
                    <button
                      className={`nav-link-btn ${navDarkClassName}`}
                      type="button"
                      href="#"
                    >
                      <FcApproval className="nav-link-logo" />
                      Projects
                    </button>
                  </li>
                  <li className="nav-link">
                    <button
                      className={`nav-link-btn ${navDarkClassName}`}
                      type="button"
                      href="#"
                    >
                      <FcApproval className="nav-link-logo" />
                      Projects
                    </button>
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
