import {FaExternalLinkAlt} from 'react-icons/fa'
import './index.css'

const certificateData = {
  id: 1,
  imgUrl:
    'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720434910/lrl1onsbdlu5hhdy8aoh.png',
  courseName: 'Exponential Performance Mindset',
  skillsCovered: [
    'Creating Personal Identity',
    'Integrity',
    'Setting Goals & Priorities',
  ],
  certificateLink:
    'https://certificates.ccbp.in/intensive/xpm-4-0-fundamentals?id=DIDROTQQDQ',
}

const CertificateCard = props => {
  const {certificateData} = props
  const {
    id,
    imgUrl,
    courseName,
    skillsCovered,
    certificateLink,
  } = certificateData

  return (
    <li className="certificate-card">
      <img className="certificate-img" src={imgUrl} alt="certificate-img" />
      <div className="certificate-desc-cont">
        <h5 className="certificate-course-name">{courseName}</h5>
        <ul className="skill-covered-ul-cont">
          {skillsCovered.map(eachItem => (
            <li className="skill-covered">{eachItem}</li>
          ))}
        </ul>
        <button className="certificate-btn" type="button">
          <FaExternalLinkAlt />
        </button>
      </div>
    </li>
  )
}

export default CertificateCard
