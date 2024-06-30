import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PortfolioContext from './ReactContext/PortfolioContext'
import './App.css'

class App extends Component {
  state = {darkMode: false}

  changeDarkMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    return (
      <PortfolioContext.Provider
        value={{darkMode, changeDarkMode: this.changeDarkMode}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </PortfolioContext.Provider>
    )
  }
}

export default App
