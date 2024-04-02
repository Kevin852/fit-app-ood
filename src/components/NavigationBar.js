import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from './Logo'

function NavigationBar({children}) {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
  <div className='main'>
    <nav className="navbar">
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<div>{children}</div>
</div>
  );
}

export default NavigationBar;