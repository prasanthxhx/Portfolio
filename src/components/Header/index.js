import {Component} from 'react'
import {MdSort} from 'react-icons/md'
import {FcApproval} from 'react-icons/fc'
import DarkModeSwitch from '../DarkModeSwitch'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

class Header extends Component {
  state = {hamStatus: false}

  onClickHamBtn = () => {
    this.setState(prevState => ({hamStatus: !prevState.hamStatus}))
  }

  render() {
    const {hamStatus} = this.state
    const navLinksClassName = hamStatus ? 'nav-ul-cont-dynamic' : ''

    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkMode, changeDarkMode} = value
          const navDarkClassName = darkMode ? 'nav-dark' : ''

          return (
            <nav className="navbar">
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
