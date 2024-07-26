import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import {v4 as uuidv4} from 'uuid'
import {
  FaGithub,
  FaBusinessTime,
  FaCreditCard,
  FaStar,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import 'react-vertical-timeline-component/style.min.css'
import './index.css'

const projectDetails = [
  {
    id: 1,
    title: 'Github Profile Visualizer',
    description:
      'Implemented GitHub Profile Visualizer App using React, designed to provide users with a seamless way to search for GitHub usernames and retrieve comprehensive user information using the GitHub API.',
    techUsed: [
      'React JS',
      'JS',
      'CSS',
      'Routing',
      'GitHub API',
      'API Key',
      'REST API Calls',
      'Authorization',
      'Recharts',
      'Figma',
    ],
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1721113726/bpc3p1pc5oyzv0ythezr.png',
    date: 'May-2024',
    icon: <FaGithub />,
    projectLink: 'https://gitprofanths.ccbp.tech',
  },
  {
    id: 2,
    title: 'Jobby App',
    description:
      'Implemented Jobby App where users can log in and can see a list of jobs with search by job title, filters based on Salary range and Employment type, etc',
    techUsed: [
      'React JS',
      'JS',
      'CSS',
      'Bootstrap',
      'Routing',
      'REST API Calls',
      'Local Storage',
      'JWT Token',
      'Authorization',
      'Authentication',
    ],
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1721115221/igeqbnopki2vbrxpbclg.png',
    date: 'April-2024',
    icon: <FaBusinessTime />,
    projectLink: 'https://jobbyanths.ccbp.tech',
  },
  {
    id: 3,
    title: 'Nxt Trendz App',
    description:
      'Developed a e-commerce website named Nxt Trendz, showcasing a fully functional online shopping platform. Ensured a mobile-friendly and responsive interface for optimal user experience across devices.',
    techUsed: [
      'React JS',
      'JS',
      'CSS',
      'HTML',
      'Routing',
      'Routing',
      'REST API Calls',
      'JWT Token',
      'Authorization',
      'Authentication',
    ],
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1721114299/ldqycikwscqqm9xptgua.png',
    date: 'March-2024',
    icon: <FaCreditCard />,
    projectLink: 'https://nxtanths.ccbp.tech',
  },
]

// returns a random background color className
const getRandColor = () => {
  const randNum = Math.floor(Math.random() * 6) + 1
  return `color-${randNum}`
}

const Timeline = props => {
  return (
    <VerticalTimeline className="vertical-timeline-outside">
      {projectDetails.map(eachItem => (
        <VerticalTimelineElement
          key={uuidv4()}
          className="vertical-timeline-element--work custom-timeline-element"
          contentStyle={{
            background: 'transparent',
            color: '#fff',
          }}
          contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
          date={eachItem.date}
          iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={eachItem.icon}
        >
          <img
            className="git-visualizer-img"
            src={eachItem.imgUrl}
            alt="project-img"
          />
          <div>
            <a
              className="anchor-link-project"
              href={eachItem.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="project-h1">
                {eachItem.title}{' '}
                <FaExternalLinkAlt className="project-link-icon" />
              </h1>
            </a>
            <p className="project-desc">{eachItem.description}</p>
            <h4 className="tech-used-h1">Technologies Used</h4>
            <ul className="technologies-ul-cont">
              {eachItem.techUsed.map(eachItem => (
                <li className={`tech-li-item ${getRandColor()}`} key={uuidv4()}>
                  {eachItem}
                </li>
              ))}
            </ul>
          </div>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  )
}

export default Timeline
