import {FaUserGraduate} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {GiAchievement} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import './index.css'

const TitleCard = props => {
  const {title, id} = props

  const getTitleIcon = () => {
    switch (id) {
      case 'education':
        return <FaUserGraduate className="title-icon" />
      case 'skills':
        return <ImBooks className="title-icon" />
      case 'projects':
        return <RiComputerFill className="title-icon" />
      case 'moreCertificates':
        return <GiAchievement className="title-icon" />
      default:
        return null
    }
  }

  return (
    <div className="title-cont">
      {getTitleIcon()}

      <div className="title">{title}</div>
    </div>
  )
}

export default TitleCard
