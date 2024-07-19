import {FaExternalLinkAlt} from 'react-icons/fa'
import {IoIosTime} from 'react-icons/io'
import './index.css'

const EducationCard = props => {
  const {educationData, isDarkMode} = props
  const {
    id,
    instituteName,
    specialization,
    description,
    date,
    instituteLogo,
    instituteWebsite,
  } = educationData

  return (
    <li className={`edu-card edu-card-${id}`}>
      <img
        className="edu-institute-img"
        src={instituteLogo}
        alt="institute-img"
      />
      <hr className="inst-hr-line" />
      <div className={`institute-description ${isDarkMode ? 'inst-dark' : ''}`}>
        <div className="inst-h1-cont">
          {' '}
          <a
            className="anchor-link"
            href={instituteWebsite}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="institute-h1">
              {instituteName}
              <FaExternalLinkAlt className="institute-link-icon" />{' '}
            </h4>
          </a>
          <p className="duration-para">
            <IoIosTime className="duration-icon" />
            {date}
          </p>
        </div>
        <h5 className="course-h1">{specialization}</h5>
        <p className="nxtwave-para">{description}</p>
      </div>
    </li>
  )
}

export default EducationCard
