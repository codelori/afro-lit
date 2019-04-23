import React, { Component } from 'react'
import './Home.css'
import FilterBooks from '../FilterBooks/FilterBooks'
import BookDetails from '../BookDetails/BookDetails'

class Home extends Component{
  render(){
    return(
      <div className="component-container">
        <main>
          <FilterBooks 
            selectGenre={this.props.selectGenre} 
            searchBook={this.props.searchBook} 
            getNewBooks={this.props.getNewBooks}
            genreList={this.props.genreList}
          />
          <BookDetails 
            books={this.props.books} 
            favoritedBooks={this.props.favoritedBooks}
            addToWishlist={this.props.addToWishlist}/>
        </main>
      </div>
    )
  }
}

export default Home