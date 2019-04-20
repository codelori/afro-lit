import React, { Component } from 'react'
import Header from '../Header/Header'
import FilterBooks from '../FilterBooks/FilterBooks'

class Home extends Component{
  render(){
    return(
      <div className="component-container">
        <Header />
        <FilterBooks />
      </div>
    )
  }
}

export default Home