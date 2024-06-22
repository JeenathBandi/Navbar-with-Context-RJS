// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerBg = isDarkTheme
        ? 'home-dark-container'
        : 'home-container'

      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeHead = isDarkTheme ? 'route-dark-head' : 'route-head'

      return (
        <>
          <Navbar />
          <div className={homeContainerBg}>
            <img src={ThemeImg} alt="home" className="home-img" />
            <h1 className={homeHead}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
