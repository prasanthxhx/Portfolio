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
    githubCodeLink:
      'https://github.com/prasanthxhx/Github-Profile-Visualizer-third.git',
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
    githubCodeLink: 'https://github.com/prasanthxhx/JobbyApp.git',
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
    githubCodeLink:
      'https://github.com/prasanthxhx/Nxt-Trendz-E-commerce-App.git',
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
          iconStyle={{background: '#eb5e28', color: '#252422'}}
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
            <a
              className="git-anchor-link"
              href={eachItem.githubCodeLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="git-repos-btn">
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    height="33"
                    width="33"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ff6d00"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </span>
                <span className="text1">Git code</span>
                <span className="text2">view</span>
              </button>
            </a>
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
