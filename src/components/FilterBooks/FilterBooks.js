import React, { Component } from 'react'
import './FilterBooks.css';

class FilterBooks extends Component{
  render(){
    const { searchBook, getNewBooks } = this.props
    return(
      <div id="filter-books-container">
        <form onSubmit = {getNewBooks} >
          <input type="text" placeholder="Enter key word" name="enteredTerm" onChange={searchBook}/>
          <button type="submit">Search</button>
        </form>

        <h3>Genre: </h3>
        <ul id="genre-list">
          {/* <a className="filter-links" href="#"><li className="genre-list-items">Autobiography</li></a>
          <a className="filter-links" href="#"><li className="genre-list-items">Art</li></a>
          <a className="filter-links" href="#"><li className="genre-list-items">Biography</li></a>
          <a className="filter-links" href="#"><li className="genre-list-items">Fantasy</li></a>
          <a className="filter-links" href="#"><li className="genre-list-items">Fiction</li></a>
          <a className="filter-links" href="#"><li className="genre-list-items">History</li></a>
          <a className="filter-links" href="#"><li className="genre-list-items">Science Fiction</li></a> */}
          <li className="genre-list-items">Autobiography</li>
          <li className="genre-list-items">Art</li>
          <li className="genre-list-items">Biography</li>
          <li className="genre-list-items">Fantasy</li>
          <li className="genre-list-items">Fiction</li>
          <li className="genre-list-items">History</li>
          <li className="genre-list-items">Science Fiction</li>
        </ul>
      </div>
    )
  }
}

export default FilterBooks