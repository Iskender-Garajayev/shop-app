import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  return (
    <div className="header-container">
      <div className='header-container-inner'>

<div className="header-logo">
  Exclusive
</div>

<div className="navbar">
  <ul>
    <li>Home</li>
    <li>Contact</li>
    <li>About</li>
    <li>Sign Up</li>
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
    <FavoriteBorderIcon/>
    <ShoppingCartIcon/>
  </div>
</div>
</div>
    </div>
    
  )
}

export default Header