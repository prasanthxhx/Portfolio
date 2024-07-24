import {Component} from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

class SkillsCard extends Component {
  componentDidMount() {
    const items = document.querySelectorAll('.skills-scroll-item')

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    items.forEach(item => {
      observer.observe(item)
    })
  }

  render() {
    const {skillData} = this.props
    const {name, imgUrl, certificateLink} = skillData

    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <li className="skills-card skills-scroll-item">
              <img
                className={`skill-img ${darkMode ? 'dark-skill-img' : ''}`}
                src={imgUrl}
                alt={`${name}-img`}
              />

              <a
                className={`anchor-link anchor-skill-link ${
                  darkMode ? 'dark-anchor-skill' : ''
                }`}
                href={certificateLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt className="Certificate-icon" />
              </a>
            </li>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default SkillsCard
