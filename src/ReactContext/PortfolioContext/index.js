import {createContext} from 'react'

const PortfolioContext = createContext({
  darkMode: false,
  changeDarkMode: () => {},
})

export default PortfolioContext
