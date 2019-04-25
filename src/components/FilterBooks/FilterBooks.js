import React, { Component } from 'react'
import './FilterBooks.css';

class FilterBooks extends Component{
  render(){
    const { searchBook, getNewBooks, selectGenre, genreList } = this.props
    return(
      <div id="filter-books-container">
        <form onSubmit = {getNewBooks} >
          <input className='search-input' type='text' placeholder='Enter key word' name='enteredTerm' onChange={searchBook}/>
          <button className='search-button' type='submit'>Search</button>
        </form>

        <h3>Genre: </h3>
          {genreList.map(genre =>{
            return <li key={genre} className='genre-list-items'><button type='submit' value={genre} onClick={selectGenre} className='genre-button'>{genre}</button></li>
          })}
      </div>
    )
  }
}

export default FilterBooks