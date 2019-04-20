import React, { Component } from 'react'
import './Header.css';

class Header extends Component{
  render(){
    return(
      <header>
        <h1>Afro Lit</h1>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>Bestseller's</a>
          <a href='#'>Wishlist</a>
        </nav>
      </header>
    )
  }
}

export default Header