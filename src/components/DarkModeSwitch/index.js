import './index.css'

const DarkModeSwitch = props => {
  const {changeToDarkMode} = props

  return (
    <label className="switch">
      <input type="checkbox" onChange={changeToDarkMode} />
      <span className="slider"></span>
    </label>
  )
}

export default DarkModeSwitch
