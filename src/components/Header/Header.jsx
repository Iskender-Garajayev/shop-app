import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header-container">
      <div className='header-container-inner'>

<div className="header-logo">
  Exclusive
</div>

<div className="navbar">
  <ul> 
    <li>
      <NavLink to='/' className='navbar-link'>
      Home
      </NavLink>
      </li>
    <li><NavLink to='/contacts' className='navbar-link' >
      Contacts
      </NavLink></li>
    <li><NavLink to='/about' className='navbar-link' >
      About
      </NavLink></li>
    <li><NavLink to='/signup' className='navbar-link' >
      Sing Up
      </NavLink></li>
  </ul>
</div>

<div className="search-login">
  <div className="header-input">
    <form action="">
      <input type="text" placeholder='What are you looking for?' />
      <SearchIcon/>
    </form>
  </div>
  <div className="header-icons">
    <Link to='/wishlist' ><ion-icon name="heart-outline"></ion-icon></Link>
    <Link to='/cart' ><ion-icon name="cart-outline"></ion-icon></Link>
    
  </div>
</div>
</div>
    </div>
    
  )
}

export default Header