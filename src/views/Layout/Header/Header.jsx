import './Header.css'
import logo from '../../../assets/seekandemploy.png'

const Header = () => {
  return (
    <header>
      <img src={logo} className="app-logo" alt="seek and employ Logo" />
    </header>
  )
}

export default Header
