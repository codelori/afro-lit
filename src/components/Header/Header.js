import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <header>
        <h1>Afro Lit</h1>
        <nav>
        <Link to="/"><h4 className='nav-link'>Home</h4></Link>
        <Link to="/bestsellers"><h4 className='nav-link'>Bestsellers</h4></Link>
        <Link to="/wishlist"><h4 className='nav-link'>Wishlist</h4></Link>
        </nav>
      </header>
    )
  }
}

export default Header