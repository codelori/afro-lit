import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <header>
        <h1 id="page-title">Afro<span id='lit'>Lit</span></h1>
        <nav>
        <Link to="/" className='nav-link'><h4 className='nav-link-text'>HOME</h4></Link>
        <Link to="/wishlist" className='nav-link'><h4 className='nav-link-text'>WISHLIST</h4></Link>
        </nav>
      </header>
    )
  }
}

export default Header