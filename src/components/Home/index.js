import {Component} from 'react'
import {
  FaPlayCircle,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaUserGraduate,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import {IoLogoWhatsapp, IoMdMailUnread, IoIosTime} from 'react-icons/io'
import {ImBooks} from 'react-icons/im'
import {GiAchievement} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import Header from '../Header'
import Typewriter from '../TypeWriting'
import SkillsCard from '../SkillsCard'
import CertificateCard from '../CertificateCard'
import EducationCard from '../EducationCard'
import Timeline from '../Timeline'
import PortfolioContext from '../../ReactContext/PortfolioContext'
import './index.css'

// education details list
const educationDetails = [
  {
    id: 1,
    instituteName: 'CCBP Intensive 4.0 Tech Program',
    specialization: 'FullStack Web Development',
    description:
      'CCBP Intensive is an Industry Ready Certification Program focusing on full-stack web development that provides training through an immersive hands-on and reverse-engineered curriculum',
    date: '2023 - 2024',
    instituteLogo:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720184633/tuu9eixat7cdsiskhfua.jpg',
    instituteWebsite: 'https://www.ccbp.in/',
  },
  {
    id: 2,
    instituteName: 'SSM College of Engineering, Namakkal',
    specialization: 'BE in ECE',
    description:
      'B.E (Bachelor of Engineering)_Electronics and Communication Engineering (ECE)',
    date: '2017 - 2021',
    instituteLogo:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720248670/wflxjjwxzuu4qzenk4ry.png',
    instituteWebsite: 'https://www.ssmce.ac.in/',
  },
]

// skills details list
const skillsDetails = [
  {
    id: 1,
    name: 'html',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418887/bfkpehm1bmhn8ifsxhpm.webp',
    certificateLink:
      'https://certificates.ccbp.in/intensive/static-website?id=XMEUZDHSJO',
  },
  {
    id: 2,
    name: 'css',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418887/mrqwsgcrz3wukdueuazd.webp',
    certificateLink:
      'https://certificates.ccbp.in/intensive/static-website?id=XMEUZDHSJO',
  },
  {
    id: 3,
    name: 'css',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418887/ieioczxretvjpb9igmwr.jpg',
    certificateLink:
      'https://certificates.ccbp.in/intensive/static-website?id=XMEUZDHSJO',
  },
  {
    id: 4,
    name: 'javaScript',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418886/xrqp2ddyvwia6olzr2dn.svg',
    certificateLink:
      'https://certificates.ccbp.in/intensive/javascript-essentials?id=GYKVXQMNWC',
  },
  {
    id: 5,
    name: 'reactJs',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720419601/q5iysomvs9qvudpdgmnm.png',
    certificateLink:
      'https://certificates.ccbp.in/intensive/react-js?id=PTCQBCYRNA',
  },
  {
    id: 6,
    name: 'python',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418886/pn2dv7dtv6evskxrutdo.png',
    certificateLink:
      'https://certificates.ccbp.in/intensive/programming-foundations?id=PHCLCVZZIP',
  },
  {
    id: 7,
    name: 'express',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418886/t25ytvfgglzewcar8dzz.png',
    certificateLink:
      'https://certificates.ccbp.in/intensive/node-js?id=MJWTMSXGTZ',
  },
  {
    id: 8,
    name: 'nodeJs',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418887/yx5xnzbqlba4ixte6jbt.png',
    certificateLink:
      'https://certificates.ccbp.in/intensive/node-js?id=MJWTMSXGTZ',
  },
  {
    id: 9,
    name: 'sql',
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720418886/uemawyzdqdstnnjdhhck.png',
    certificateLink:
      'https://certificates.ccbp.in/intensive/introduction-to-databases?id=LDHIDLLMVN',
  },
  {
    id: 10,
    name: 'git',
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/4494/4494740.png',
    certificateLink:
      'https://certificates.ccbp.in/intensive/developer-foundations?id=AYJBMIMDCC',
  },
]

// certificate Details list
const certificateDetails = [
  {
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
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720434910/pdpvago2hvmcaxszbmup.png',
    courseName: 'Build Your Own Dynamic Web Application',
    skillsCovered: ['JavaScript'],
    certificateLink:
      'https://certificates.ccbp.in/intensive/dynamic-web-application?id=KUZPREKBCO',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720434910/i6eja25f3wuwm73lzwog.png',
    courseName: 'Build Your Own Responsive Website',
    skillsCovered: ['Bootstrap', 'Flexbox'],
    certificateLink:
      'https://certificates.ccbp.in/intensive/responsive-website?id=QWXZMDDVIZ',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dkk6a7svu/image/upload/v1720434910/i6eja25f3wuwm73lzwog.png',
    courseName: 'Responsive Web Design Using Flexbox',
    skillsCovered: ['Flexbox'],
    certificateLink:
      'https://certificates.ccbp.in/intensive/flexbox?id=TLNUCRSTSS',
  },
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationFinished: false,
      buttonsVisible: false,
      phoneBtnVisible: false,
    }
  }

  componentDidMount() {
    // adding no-scroll class to body
    document.body.classList.add('no-scroll')

    // to hide the doors after the animation
    setTimeout(() => {
      this.setState({animationFinished: true})
      // Remove the no-scroll class from body
      document.body.classList.remove('no-scroll')
    }, 1000)
  }

  toggleButtons = () => {
    this.setState(prevState => ({
      buttonsVisible: !prevState.buttonsVisible,
    }))
  }

  onClickPhoneBtn = () => {
    this.setState(prevState => ({phoneBtnVisible: !prevState.phoneBtnVisible}))
  }

  render() {
    const {buttonsVisible, phoneBtnVisible, animationFinished} = this.state
    const extraButtonsClass = buttonsVisible ? 'visible' : ''
    const phoneBtnClass = phoneBtnVisible ? 'phone-visible' : ''

    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkMode} = value

          const darkModeClassName = darkMode ? 'dark' : ''

          return (
            <>
              <div id="app-container">
                <div
                  id="animation-container"
                  className={
                    animationFinished ? 'hide' : 'animation-cont-before'
                  }
                >
                  <div id="door-left" className="door">
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="door-svg"
                    >
                      <path
                        d="M100 0 C 60 50, 60 50, 100 100 L 0 100 L 0 0 Z"
                        fill="#588157"
                      />
                    </svg>
                    <img
                      className="welcome-door-img"
                      src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1722089835/xx88ptipjxcu27eygz1g.svg"
                      alt="welcome-img"
                    />
                    <h1 className="door-h1">HIRE</h1>
                  </div>
                  <div id="door-right" className="door">
                    <h1 className="door-h1">ME</h1>
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="door-svg"
                    >
                      <path
                        d="M0 0 C 40 50, 40 50, 0 100 L 100 100 L 100 0 Z"
                        fill="#588157"
                      />
                    </svg>
                  </div>
                </div>
                <div id="homepage-content" className="home-bg-cont">
                  <section
                    id="homeSection"
                    className={`home-cont-1 ${darkModeClassName}`}
                  >
                    <Header />
                    <div className="about-me-section">
                      <div className="about-me-cont">
                        <Typewriter />
                        <p
                          className={`about-me-para ${
                            darkMode ? 'textDark' : ''
                          }`}
                        >
                          A passionate individual who always thrives to work on
                          end to end products which develop sustainable and
                          scalable social and technical systems to create
                          impact.
                        </p>
                        <h1 className="role-h1">
                          MERN <br />
                          FULL STACK <br />
                          WEB DEVELOPER
                        </h1>
                        <div className="contact-cont">
                          <a
                            className="anchor-link"
                            href="https://github.com/prasanthxhx/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <button
                              className="contact-btn profile-dot"
                              type="button"
                            >
                              <FaGithub />
                            </button>
                          </a>
                          <button
                            onClick={this.onClickPhoneBtn}
                            className="contact-btn phone-btn profile-dot"
                            type="button"
                          >
                            <IoLogoWhatsapp />
                          </button>
                          <div className={`phone-cont ${phoneBtnClass}`}>
                            +91 9943474260
                          </div>
                        </div>
                        <a
                          className="anchor-link"
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=prasanth20042000@gmail.com&su=Subject&body=Body%20text"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {' '}
                          <button className="email-btn" type="button">
                            <span className="profile-dot mail-icon">
                              <IoMdMailUnread />{' '}
                            </span>
                            Contact Me
                          </button>
                        </a>
                      </div>
                      <div className="profile-pic-cont">
                        <img
                          className="profile-pic"
                          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1719912556/IMG_20240702_145731_emoka4.jpg"
                          alt="profile-pic"
                        />

                        <div className="button-container">
                          <button
                            onClick={this.toggleButtons}
                            type="button"
                            className="profile-dot"
                          >
                            <FaPlayCircle />
                          </button>
                          <div className={`extra-buttons ${extraButtonsClass}`}>
                            <a
                              className="anchor-link"
                              href="https://www.instagram.com/prasanth.abrin/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <button className="extra-button profile-dot left">
                                <FaInstagram />
                              </button>
                            </a>
                            <a
                              className="anchor-link"
                              href="https://www.linkedin.com/in/prasanth-mani/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <button className="extra-button profile-dot right">
                                <FaLinkedinIn />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    id="educationSection"
                    className={`education-section ${
                      darkMode ? 'dark-edu' : ''
                    }`}
                  >
                    <h1 className="edu-h1">
                      <FaUserGraduate className="edu-icon" />
                      Education
                    </h1>
                    <ul className="edu-card-cont">
                      {educationDetails.map(eachItem => (
                        <EducationCard
                          educationData={eachItem}
                          isDarkMode={darkMode}
                          key={eachItem.id}
                        />
                      ))}
                    </ul>
                  </section>

                  <section
                    id="skillsSection"
                    className={`skills-section ${
                      darkMode ? 'dark-skills' : ''
                    }`}
                  >
                    <h1 className="edu-h1">
                      <ImBooks className="edu-icon" />
                      Skills
                    </h1>

                    <ul className="skills-ul-cont">
                      {skillsDetails.map(eachItem => (
                        <SkillsCard skillData={eachItem} key={eachItem.id} />
                      ))}
                    </ul>
                  </section>

                  <section
                    id="projectsSection"
                    className={`project-section ${
                      darkMode ? 'dark-project-section' : ''
                    }`}
                  >
                    <h1 className="edu-h1">
                      <RiComputerFill className="edu-icon" />
                      Projects
                    </h1>
                    <div className="project-timeline-cont">
                      <Timeline />
                    </div>
                  </section>

                  <section
                    id="moreCertificatesSection"
                    className={`extra-certificates-section ${
                      darkMode ? 'dark-extra-certificates-section' : ''
                    }`}
                  >
                    <h1 className="edu-h1">
                      <GiAchievement className="edu-icon edu-cert-icon" />
                      More Cerificates
                    </h1>

                    <ul className="certificates-ul-cont">
                      {certificateDetails.map(eachItem => (
                        <CertificateCard
                          certificateData={eachItem}
                          key={eachItem.id}
                        />
                      ))}
                    </ul>
                  </section>

                  <div className="contact-me-section">
                    <div className="contact-me-cont">
                      <img
                        className="contact-me-img"
                        src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1722336346/mdp5bskvbnxa9dcdtk1w.svg"
                        alt="contact-me-img"
                      />
                      <div>
                        <div class="form-container">
                          <div class="form">
                            <span class="heading">Get in touch</span>
                            <input
                              placeholder="Name"
                              type="text"
                              class="input"
                            />
                            <input
                              placeholder="Email"
                              id="mail"
                              type="email"
                              class="input"
                            />
                            <textarea
                              placeholder="Say Hello"
                              rows="10"
                              cols="30"
                              id="message"
                              name="message"
                              class="textarea"
                            ></textarea>
                            <div class="button-container">
                              <div class="send-button">Send</div>
                              <div class="reset-button-container">
                                <div id="reset-btn" class="reset-button">
                                  Reset
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Home
