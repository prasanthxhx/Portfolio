import {v4 as uuidv4} from 'uuid'
import {FaExternalLinkAlt} from 'react-icons/fa'

import './index.css'

const CertificateCard = props => {
  const {certificateData} = props
  const {courseName, skillsCovered, certificateLink} = certificateData

  return (
    <li className="card">
      <div className="top-section">
        <div className="border"></div>
        <div className="icons">
          <div className="logo">
            <span className="cert-logo">CFT</span>
          </div>
          <div className="social-media"></div>
        </div>
      </div>
      <div className="bottom-section">
        <span className="title">{courseName}</span>
        <ul className="skill-covered-ul-cont">
          {skillsCovered.map(eachItem => (
            <li className="skill-covered" key={uuidv4()}>
              {eachItem}
            </li>
          ))}
        </ul>
        <a
          className="anchor-link anchor-cert-link"
          href={certificateLink}
          target="_blank"
          rel="noreferrer"
        >
          <button className="certificate-btn" type="button">
            <FaExternalLinkAlt />
          </button>
        </a>
      </div>
    </li>
  )
}

export default CertificateCard
