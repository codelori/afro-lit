import React, { Component } from 'react'
import './Home.css'
import FilterBooks from '../FilterBooks/FilterBooks'
import BookDetails from '../BookDetails/BookDetails'

class Home extends Component{
  render(){
    console.log(this.props)
    return(
      <div className="component-container">
        <main>
          <FilterBooks searchBook={this.props.searchBook} getNewBooks={this.props.getNewBooks}/>
          <BookDetails books={this.props.books} favoritedBooks={this.props.favoritedBooks}/>
        </main>
      </div>
    )
  }
}

export default Home