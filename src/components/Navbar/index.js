// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navbarContainer = isDarkTheme
        ? 'navbar-dark-container'
        : 'navbar-container'

      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const homeHead = isDarkTheme ? 'route-dark-head' : 'route-head'

      const liItems = isDarkTheme ? 'li-items-dark' : 'li-items'

      const onClickThemeBtn = () => toggleTheme()

      return (
        <div className={navbarContainer}>
          <img src={logo} alt="website logo" className="logo-img" />
          <ul className="home-abt-container">
            <Link to="/" className="links">
              {' '}
              <li className={liItems}>Home</li>
            </Link>
            <Link to="/about" className="links">
              <li className={liItems}>About</li>
            </Link>
          </ul>
          <button type="button" className="theme-btn" onClick={onClickThemeBtn} data-testid="theme">
            <img src={ThemeImg} alt="theme" className="logo-img" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
