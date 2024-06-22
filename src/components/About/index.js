// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from "../Navbar"

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerBg = isDarkTheme
        ? 'home-dark-container'
        : 'home-container'

      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const homeHead = isDarkTheme ? 'route-dark-head' : 'route-head'

      return (
        <>
        <Navbar />
        <div className={homeContainerBg}>
          <img src={ThemeImg} alt="about" className="home-img" />
          <h1 className={homeHead}>About</h1>
        </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
