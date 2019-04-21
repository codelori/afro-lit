import React, { Component } from 'react'
import './Header.css';

class Header extends Component{
  render(){
    return(
      <header>
        <h1>Afro Lit</h1>
        <nav>
          <h4>Home</h4>
          <h4>Bestseller's</h4>
          <h4>Wishlist</h4>
        </nav>
      </header>
    )
  }
}

export default Header