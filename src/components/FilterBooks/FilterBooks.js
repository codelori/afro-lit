import React, { Component } from 'react'
import './FilterBooks.css';

class FilterBooks extends Component{
  render(){
    return(
      <div id="filter-books-container">
        <input type="text" placeholder="Enter key word"/>
        <button type="submit">Search</button>
        <h3>Genre: </h3>
        <ul id="genre-list">
          <a href="#"><li className="genre-list-items">Autobiography</li></a>
          <a href="#"><li className="genre-list-items">Art</li></a>
          <a href="#"><li className="genre-list-items">Biography</li></a>
          <a href="#"><li className="genre-list-items">Fantasy</li></a>
          <a href="#"><li className="genre-list-items">Fiction</li></a>
          <a href="#"><li className="genre-list-items">History</li></a>
          <a href="#"><li className="genre-list-items">Science Fiction</li></a>
        </ul>
      </div>
    )
  }
}

export default FilterBooks