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

  onSubmitForm = () => {
    const {name, email, message} = this.state
    const {changeMsgStatus} = this.props
    changeMsgStatus('loading')

    if (name !== '' && email !== '' && message !== '') {
      emailjs.send('sample', 'sample', {name, email, message}, 'smaple').then(
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
      <div class="form-container">
        <div class="form">
          <span class="heading">Get in touch</span>
          <input
            placeholder="Name"
            type="text"
            class="input"
            value={name}
            onChange={this.onChangeName}
          />
          <input
            placeholder="Email"
            id="mail"
            type="email"
            class="input"
            value={email}
            onChange={this.onChangeEmail}
          />
          <textarea
            placeholder="Say Hello"
            rows="10"
            cols="30"
            id="message"
            name="message"
            class="textarea"
            value={message}
            onChange={this.onChangeMessage}
          ></textarea>
          <div class="button-container">
            <button
              type="button"
              class="send-button"
              onClick={this.onSubmitForm}
            >
              Send
            </button>
            <div class="reset-button-container">
              <button
                type="button"
                id="reset-btn"
                class="reset-button"
                onClick={this.onResetForm}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMeForm
