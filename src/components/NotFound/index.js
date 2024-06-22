// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerBg = isDarkTheme
        ? 'home-dark-container'
        : 'home-container'

      const homeHead = isDarkTheme ? 'route-dark-head' : 'route-head'

      return (
        <>
          <Navbar />
          <div className={homeContainerBg}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-img"
            />
            <h1 className={homeHead}>Lost your Way?</h1>
            <p className={homeHead}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
