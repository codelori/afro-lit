import React, { Component } from 'react'
import './FilterBooks.css';

class FilterBooks extends Component{
  render(){
    const { searchBook, getNewBooks, selectGenre, genreList } = this.props
    return(
      <div id="filter-books-container">
        <form onSubmit = {getNewBooks} >
          <input type="text" placeholder="Enter key word" name="enteredTerm" onChange={searchBook}/>
          <button type="submit">Search</button>
        </form>

        <h3>Genre: </h3>
        <ul id="genre-list">
          {genreList.map(genre =>{
            return <li key={genre} className="genre-list-items"><button type='submit' value={genre} onClick={selectGenre}>{genre}</button></li>
          })}
        </ul>
      </div>
    )
  }
}

export default FilterBooks