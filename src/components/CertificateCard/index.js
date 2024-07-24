import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {FaExternalLinkAlt} from 'react-icons/fa'

import './index.css'

class CertificateCard extends Component {
  componentDidMount() {
    const items = document.querySelectorAll('.certificate-scroll-item')

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
    const {certificateData} = this.props
    const {courseName, skillsCovered, certificateLink} = certificateData

    return (
      <li className="card certificate-scroll-item">
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
}

export default CertificateCard
