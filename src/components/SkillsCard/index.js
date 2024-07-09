import {FaExternalLinkAlt} from 'react-icons/fa'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

const SkillsCard = props => {
  const {skillData} = props
  const {name, imgUrl, certificateLink} = skillData

  return (
    <PortfolioContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <li className="skills-card">
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

export default SkillsCard
