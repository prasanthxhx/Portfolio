import {Component} from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {IoIosTime} from 'react-icons/io'
import './index.css'

class EducationCard extends Component {
  componentDidMount() {
    const items = document.querySelectorAll('.education-scroll-item')

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
    const {educationData, isDarkMode} = this.props
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
      <li className={`edu-card edu-card-${id} education-scroll-item`}>
        <img
          className="edu-institute-img"
          src={instituteLogo}
          alt="institute-img"
        />
        <hr className="inst-hr-line" />
        <div
          className={`institute-description ${isDarkMode ? 'inst-dark' : ''}`}
        >
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
}

export default EducationCard
