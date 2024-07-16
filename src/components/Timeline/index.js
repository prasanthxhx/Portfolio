import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import {IoLogoWhatsapp} from 'react-icons/io'
import 'react-vertical-timeline-component/style.min.css'
import './index.css'

const Timeline = props => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work custom-timeline-element"
        contentStyle={{
          background: 'transparent',
          color: '#fff',
        }}
        contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
        date="2011 - present"
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<IoLogoWhatsapp />}
      >
        <img
          className="git-visualizer-img"
          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1721113726/bpc3p1pc5oyzv0ythezr.png"
          alt="git-profile-visualizer-img"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work custom-timeline-element"
        contentStyle={{background: 'transparent', color: '#fff'}}
        date="2010 - 2011"
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<IoLogoWhatsapp />}
      >
        <img
          className="git-visualizer-img"
          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1721114299/ldqycikwscqqm9xptgua.png"
          alt="nxtTrendz-img"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work custom-timeline-element"
        contentStyle={{background: 'transparent', color: '#fff'}}
        date="2008 - 2010"
        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
        icon={<IoLogoWhatsapp />}
      >
        <img
          className="git-visualizer-img"
          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1721115221/igeqbnopki2vbrxpbclg.png"
          alt="jobby-app-img"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
        icon={<IoLogoWhatsapp />}
      />
    </VerticalTimeline>
  )
}

export default Timeline
