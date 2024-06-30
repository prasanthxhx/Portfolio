import {Component} from 'react'
import './index.css'

class Typewriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.fullText = "Hi I'm Prasanth M"
    this.index = 0
  }

  componentDidMount() {
    this.type()
  }

  type = () => {
    if (this.index < this.fullText.length) {
      this.setState(
        prevState => ({
          text: prevState.text + this.fullText.charAt(this.index),
        }),
        () => {
          this.index++
          setTimeout(this.type, 100)
        },
      )
    }
  }

  render() {
    return (
      <h1 id="typewriter">
        {this.state.text}
        <span className="cursor"></span>
      </h1>
    )
  }
}

export default Typewriter
