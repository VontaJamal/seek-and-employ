import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/seekandemploy.png'
import { useResults } from '../../../context/SearchContext'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="app-logo" alt="seek and employ Logo" />
      </Link>
    </header>
  )
}

export default Header
