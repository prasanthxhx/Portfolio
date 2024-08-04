import {Component} from 'react'
import emailjs from 'emailjs-com'
import './index.css'

class ContactMeForm extends Component {
  state = {name: '', email: '', message: ''}

  onChangeName = event => {
    const name = event.target.value
    this.setState({name})
  }

  onChangeEmail = event => {
    const email = event.target.value
    this.setState({email})
  }

  onChangeMessage = event => {
    const message = event.target.value
    this.setState({message})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, email, message} = this.state
    const {changeMsgStatus} = this.props

    if (name !== '' && email !== '' && message !== '') {
      changeMsgStatus('loading')

      emailjs.send('sample', 'sample', {name, email, message}, 'sample').then(
        response => {
          changeMsgStatus('success')
        },
        error => {
          changeMsgStatus('failure')
        },
      )
    }
  }

  onResetForm = () => {
    const {name, email, message} = this.state

    if (name !== '' || email !== '' || message !== '') {
      this.setState({name: '', email: '', message: ''})
    }
  }

  render() {
    const {name, email, message} = this.state

    return (
      <div className="form-container">
        <form className="form" onSubmit={this.onSubmitForm}>
          <span className="heading">Get in touch</span>
          <input
            placeholder="Name"
            type="text"
            className="input"
            value={name}
            onChange={this.onChangeName}
          />
          <input
            placeholder="Email"
            id="mail"
            type="email"
            className="input"
            value={email}
            onChange={this.onChangeEmail}
          />
          <textarea
            placeholder="Say Hello"
            rows="10"
            cols="30"
            id="message"
            name="message"
            className="textarea"
            value={message}
            onChange={this.onChangeMessage}
          ></textarea>
          <div className="button-container">
            <button type="submit" className="send-button">
              Send
            </button>
            <div className="reset-button-container">
              <button
                type="button"
                id="reset-btn"
                className="reset-button"
                onClick={this.onResetForm}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactMeForm
